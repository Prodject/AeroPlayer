/*
 * @Author: zcib.rainsilver 
 * @Date: 2018-11-27 16:55:48 
 * @Last Modified by: zcib.rainsilver
 * @Last Modified time: 2018-12-10 10:09:27
 */
/****************成员列表***********************/
var i = 3;
var flag = 0;
var one = 1;
list_fun(0); //绑定块的单击事件
/****************方法列表***********************/
//列表通用指令
function list_fun(flag) {
    var blocks = document.getElementsByClassName("list_block"); /*获取所有块*/
    for (var i = 0; i < blocks.length; i++) {
        switch (flag) {
            case 0: //参数0:绑定块的点击事件;
                blocks[i].addEventListener('click', changeColor, false);
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

function changeMusic(songName ,songSign) {

    flag = 0;

    document.getElementById("title_name").innerHTML = songName;
    /*改变音乐源*/
    document.getElementById("play_music").src = "audio/" + songSign + ".mp3";
    /*改变专辑图片*/
    document.getElementById("album").style.background = "url(image/" + songSign + ".jpg)";
    document.getElementById("album").style.backgroundSize = "100% 100%";
}


/*添加歌曲*/

function addSong(x) {
    alert("此功能暂未开放!敬请期待！");


}
//播放外链歌曲
function playURL(){
    
    var loc = prompt("请输入你的外链地址(Input your URL)");
    if(loc != null){
        var title = prompt("请输入你的歌曲名(Input your song name");
        if(title != null) {
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
