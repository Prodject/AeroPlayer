/*
 * @Author: zcib.rainsilver 
 * @Date: 2018-11-27 16:55:39 
 * @Last Modified by: zcib.rainsilver
 * @Last Modified time: 2018-12-10 08:34:06
 */


/**********************成员列表 **************/
var bgIndex = 0;
setAuthorInfo();


/*********方法列表 ***********/
//设置版权信息
function setAuthorInfo() {
    var text = document.createElement("p");
    text.innerHTML = "Lovely HTML5 record-style player created by RainSilver."
    text.style.color = "black";
    text.style.fontStyle = "italic";
    document.body.appendChild(text);
}
// //修改背景图片
// function changeBG() {
//     // background: url("../image/wallpaper/blue-mount.jpg");
//     bgIndex = bgIndex < 3 ?  bgIndex+1 : 1;   //将范围控制在1,2,3
//     //alert(bgIndex);
//     var imgLoc = "image/wallpaper/" + bgIndex + ".jpg";
//     //alert(imgLoc);
//     document.body.style.backgroundImage = "url("+imgLoc+")";
// }

