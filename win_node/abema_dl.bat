@REM Copyright 2022 yyhome-tromb
@REM 
@REM Licensed under the Apache License, Version 2.0 (the "License");
@REM you may not use this file except in compliance with the License.
@REM You may obtain a copy of the License at
@REM 
@REM     https://www.apache.org/licenses/LICENSE-2.0
@REM 
@REM Unless required by applicable law or agreed to in writing, software
@REM distributed under the License is distributed on an "AS IS" BASIS,
@REM WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@REM See the License for the specific language governing permissions and
@REM limitations under the License.

if %1==help (
   echo "1:playlist Path , 2:output Path , 3:key Path , 4:segment url domain(require '/')"
   ) else (
   node ./abema.key.js "%1" "%3" "%4"
   pause
   ffmpeg -allowed_extensions ALL  -protocol_whitelist file,http,https,tcp,tls,crypto -i "%1.m3u8" -c copy "%2"
   )
