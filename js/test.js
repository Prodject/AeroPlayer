function changeMusic(songName, songSign, songUrl) {
    flag = 0;
    /*改变音乐名*/
    document.getElementById("title_name").innerHTML = songName;
    /*改变音乐源*/
    var musicSrc = songUrl;
    document.getElementById("play_music").src = musicSrc; 
    /*改变专辑图片*/
    var albumSrc = "url(image/" + songSign + ".jpg)";
    document.getElementById("album").style.background = albumSrc;
    document.getElementById("album").style.backgroundSize = "100% 100%";
    //增补到正在播放的消息
    currentMusic = songName;
    currentSrc = musicSrc;
    currentAlbum = albumSrc;
    
}