# YYAbema_dl
download Ameba movie (now only windows+Node.js)
now,only Windows+Node.js

##Usage

### Windows+Node.js (win_node)
  1. open browser developper tools (F12)
  2. move to Network Tab
  3. filter `m3u8`
  4. from playlist of m3u8s , select resolution and download it
  5. cmd `copyURI.bat "Playlist's Path"`
  6. paste and execute in browser console (downloaded AES128 key)
  7. cmd `abema_dl.bat "Playlist's Path" "Output video Path" "Key Path" "segment url domain+/"`
  
  written relative playlist path in playlists of m3u8s . So you have to convert to absolute path  
  segment url domain is as same as playlist url domain
