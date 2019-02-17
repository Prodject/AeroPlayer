/**
 * @author RainSilver
 * @email ppstream123@126.com
 * @create date 2019-11-27 19:36:37
 * @modify date 2019-02-17 12:00:24
 * @desc Controling player actions.
 */


/****************成员列表***********************/
var i = 3;
var flag = 0;
var one = 1;
var music = document.querySelector("#play_music");
var browser_info = -1;
//正在播放信息
var currentMusic = "";
var currentTitle = "";
var currentAlbum = "";

catchBrowser(); //检测浏览器
list_fun(0); //绑定块的单击事件
catchKeyDown(); //监听快捷键
preLoading();

/****************方法列表***********************/
//列表通用指令
function list_fun(flag) {
    var blocks = document.getElementsByClassName("list_block"); /*获取所有块*/
    for (var i = 0; i < blocks.length; i++) {
        switch (flag) {
            case 0: //参数0:绑定块的点击事件;
                blocks[i].addEventListener('click', changeColor, false);
                blocks[i].addEventListener('click', list_play, false);
                break;
            case 1: //参数1:清除先前存在的颜色
                blocks[i].style = "color:gray;background-color:white;";
                break;
            default:
                alert("未知的命令!");
                break;
        }

    }
}
//播放列表中的音乐
function list_play() {
    flag = 0;
    var music = this.music_url;
    var music = this.getAttribute("music_url");
    var album = this.album_url; // for IE
    var album = this.getAttribute("album_url"); // for Chrome/Fixfox
    var title = this.value;
    document.querySelector("#title_name").innerHTML = title;
    document.querySelector("#play_music").src = music;
    var albumDiv = document.querySelector("#album");
    albumDiv.style.background = "URL(" + album + ")";
    albumDiv.style.backgroundSize = "100% 100%";
    // console.log(music);
    // console.log(album);
    // console.log(title);
}
//列表-更改颜色
function changeColor() {
    list_fun(1);
    this.style = "color:white;background-color:#38f;";
}

//旋转封面-播放音乐
function songPlay() {
    flag = 1;
    if (one == 1) {
        setInterval("rotate()", 10);
        one = 0;
    }
}
//旋转封面-暂停音乐
function songPause() {
    flag = 0;

}
//旋转封面-主函数
function rotate() {
    if (flag == 1) {
        document.getElementById("album").style.transform = "rotate(" + i + "deg)";
        document.getElementById("album").style.webkitTransform = "rotate(" + i + "deg)";
        document.getElementById("album").style.msTransform = "rotate(" + i + "deg)";
        i += 0.1;

        //旋转变换 浏览器兼容
    }

}
/*更换歌曲*/

// function changeMusic(songName, songSign, songUrl) {
//     // console.log(songSign);
//     // console.log(songUrl);


//     flag = 0;
//     /*改变音乐名*/
//     document.getElementById("title_name").innerHTML = songName;
//     /*改变音乐源*/
//     var musicSrc = songUrl;
//     document.getElementById("play_music").src = musicSrc; 
//     /*改变专辑图片*/
//     var albumSrc = "url(image/" + songSign + ".jpg)";
//     document.getElementById("album").style.background = albumSrc;
//     document.getElementById("album").style.backgroundSize = "100% 100%";
//     //增补到正在播放的消息
//     currentMusic = songName;
//     currentSrc = musicSrc;
//     currentAlbum = albumSrc;

// }


// /*添加歌曲*/

// function addSong(x) {
//     alert("此功能暂未开放!敬请期待！");


// }
//播放外链歌曲
function playURL() {

    var loc = prompt("请输入你的外链地址(Input your URL)");
    if (loc != null) {
        var title = prompt("请输入你的歌曲名(Input your song name");
        if (title != null) {
            document.getElementById("title_name").innerHTML = title;
            document.getElementById("album").style.background = "url(image/origin.jpg)";
            document.getElementById("album").style.backgroundSize = "100% 100%";
            var newSong = document.createElement("input");
            newSong.className = "list_block_local";
            newSong.value = title;
            newSong.type = "button";
            document.getElementById("rui_list").appendChild(newSong);
            list_fun(1);
            document.getElementById("play_music").src = loc;
        }

    }
}
// /*本地音乐播放*/
// function getinputFile() {
//     var x = document.getElementById("inputFile");
//     var loc = x.value; //文件地址    
//     alert(loc);
//     var songTitle = loc.substring(loc.lastIndexOf("\\") + 1 , loc.indexOf("."));
//     document.getElementById("play_muisc").src = "url("+loc+")";
//     alert(newStr);
// }
//键盘快捷键
function catchKeyDown() {
 
    document.body.onkeydown = function (e) {
        var keynum;
        var keychar;
        keynum = window.event ? e.keyCode : e.which;
        //将键盘码转化为对应的字符
        //alert(keynum);
        keychar = String.fromCharCode(keynum);
        if (keychar == "S") {
            if (music != null) {
                if (music.paused) {
                    music.play();
                } else {
                    music.pause();
                }
            }
        } else if (keychar == "D") {
            var x = document.querySelector("#rui_list").children;
            // var src = currentMusic;
            // var src = document.querySelector("#play_music");
            alert(x.length);

        }
    }

}

function catchBrowser() {
    //判断浏览器类型
    if ((!!window.ActiveXObject || "ActiveXObject" in window)) {
        browser_info = 0;
    }
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser_info = 1;
    }
    if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser_info = 2;
    }
    if (navigator.userAgent.indexOf("Safari") != -1) {
        browser_info = 3;
    }
}
function preLoading() {
    document.querySelectorAll(".list_block")[0].click(); //模拟点击块

  }