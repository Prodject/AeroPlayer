/*
 * @Author: zcib.rainsilver 
 * @Date: 2018-11-27 16:55:39 
 * @Last Modified by: zcib.rainsilver
 * @Last Modified time: 2018-12-10 08:34:06
 */

// //修改背景图片
// function changeBG() {
//     // background: url("../image/wallpaper/blue-mount.jpg");
//     bgIndex = bgIndex < 3 ?  bgIndex+1 : 1;   //将范围控制在1,2,3
//     //alert(bgIndex);
//     var imgLoc = "image/wallpaper/" + bgIndex + ".jpg";
//     //alert(imgLoc);
//     document.body.style.backgroundImage = "url("+imgLoc+")";
// }

function randomUI(){
    //产生随机数并取整
    var x = Math.floor(Math.random()*16777215).toString(16); 
    var y =  Math.floor(Math.random()*16777215).toString(16); 
    var fromColor = document.body.style.background = "#" + x;
    var toColor = document.body.style.background = "#" + y;
    document.body.style.background = toColor;
    document.body.style.background = "-webkit-linear-gradient(to left, "+fromColor+", "+toColor+")";
    document.body.style.background = "linear-gradient(to left, "+fromColor+", "+toColor+")";

}
//setAuthorInfo();




