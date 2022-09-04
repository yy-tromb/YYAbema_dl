/*
Copyright 2022 yyhome-tromb

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


const fs=require("fs");
const playlistPath=process.argv[2];

const playlist=fs.readFileSync(playlistPath).toString();
let URI="abematv-license:\/\/"+playlist.split("URI=\"abematv-license:\/\/")[1].split("\",IV=")[0];

const fn=`
(function(){
   const xhr=new XMLHttpRequest();
   let key;
   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200){
         key = new Uint8Array(xhr.response);
         const b=new Blob([key],{type:"application/octet-stream"});
         const a=document.createElement("a");
         a.download="key.key";
         a.href=URL.createObjectURL(b);
         a.click();
      }
   }
   xhr.onerror=e=>{
      console.error(e);
      alert(e);
   }
   xhr.open("GET","${URI}");
   xhr.send();
})();
`;
process.stdout.write(fn);
