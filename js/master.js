/**
 * @author RainSilver
 * @email ppstream123@126.com
 * @create date 2018-11-10 19:35:39
 * @modify date 2019-03-02 12:00:28
 * @desc Main script for index.
 */
/**
 * 执行区
 *  
 */


 /**
  * 变量区  
  */
/**
 * 函数区
 */




function randomGraBg(){
    //产生随机数并取整
    var x = Math.floor(Math.random()*16777215).toString(16); 
    var y =  Math.floor(Math.random()*16777215).toString(16); 
    var fromColor = document.body.style.background = "#" + x;
    var toColor = document.body.style.background = "#" + y;
    document.body.style.background = toColor;
    document.body.style.background = "-webkit-linear-gradient(to left, "+fromColor+", "+toColor+")";
    document.body.style.background = "linear-gradient(to left, "+fromColor+", "+toColor+")";

}
function randomPicBg(){
    document.body.style.background = "url('../image/hardrain.jpg') no-repeat";
    document.body.style.backgroundSize = "100%";
}
 function showBackstage() {
    var bs = document.querySelector(".backstage");
    if(bs.style.display == "none"){
        bs.style.display = "block";

    }else{
        bs.style.display = "none";





    }



}


