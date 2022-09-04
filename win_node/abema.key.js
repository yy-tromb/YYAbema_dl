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
const keyPath=process.argv[3];
const urlHead=process.argv[4];
const playlist=fs.readFileSync(playlistPath).toString();

let fd="";
for(let l of playlist.split("\n")){
   if(/^\/.*\.ts/.test(l)===true){
      console.log("l="+l);
      fd=l.split("/")[1];
      break;
   }
}
let t=playlist.replaceAll("/"+fd,urlHead+fd);
t=t.replaceAll(/URI=\"abematv-license:\/\/.+\",IV=/g,"URI=\""+keyPath+"\",IV=");
fs.writeFileSync(playlistPath+".m3u8",t);

console.log(playlistPath,keyPath,urlHead,"fd="+fd);
