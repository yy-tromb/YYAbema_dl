# YYAbema_dl
download Ameba movie (now only windows+Node.js)
now,only Windows+Node.js

##Usage

### Windows+Node.js (win_node)
  English:  
    
  1. open browser developper tools in browser(F12　or right click)
  2. move to Network Tab
  3. filter `m3u8`
  4. from playlist of m3u8s , select resolution and download it
  5. cmd `copyURI.bat "Playlist's Path"`
  6. paste and execute in browser console (downloaded AES-128 key)
  7. cmd `abema_dl.bat "Playlist's Path" "Output video Path" "Key Path" "segment url domain+/"`
  
  written relative playlist path in playlists of m3u8s . So you have to convert to absolute path  
  segment url domain is as same as playlist url domain
    
  日本語：  
    
  1. ブラウザで開発者ツールを開く（F12か右クリック）  
  2. ネットワークタブに移動する  
  3. `m3u8`をフィルターする  
  4. 異なる解像度のm3u8プレイリストが含まれるプレイリストから、解像度を選んでダウンロードする  
  5. cmd `copyURI.bat "ダウンロードしたプレイリストのパス"`  
  6. ブラウザのコンソールに貼り付け、実行する（AES-128キーがダウンロードされる）  
  7. cmd `abema_dl.bat "プレイリストのパス" "最終的に出力されるビデオのパス" "キーのパス" "動画のセグメントのURLのドメイン/"`
    
  異なる解像度のm3u8プレイリストが含まれるプレイリストは相対パスで書かれているため、絶対パスに直す必要があります  
  動画のセグメントのURLのドメインはプレイリストのURLのドメインと同じです  

## License
一応Apache License 2.0に従ってください。こんなもの使う人いないと思いますがww  
Follow Apache License 2.0 . I don't think anyone will use it lol  
