/**
 * @author RainSilver
 * @email ppstream123@126.com
 * @create date 2018-11-10 19:35:39
 * @modify date 2019-02-10 19:35:39
 * @desc Main script for index.
 */




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




