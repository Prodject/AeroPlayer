/**
 * @author RainSilver
 * @email ppstream123@126.com
 * @create date 2019-02-13 18:54:57
 * @modify date 2019-02-17 12:00:26
 * @desc Animation of player and website.
 */

//默认调用的方法
list_slideOut();

/*方法列表*/
//点击封面标题弹出播放列表
function list_slideOut() {
    document.getElementById("rui_box").onmouseover = function(){
        var x =  document.getElementById("rui_list");
        x.style.display = "block";
        x.style.animation = "moveList 1.5s";
        x.style.animationIterationCount = 1;
        x.style.top = "380px"
        // var y =  document.getElementById("rui_list-bg");
        // y.style.display = "block";
        // y.style.animation = "moveList 1s";
        // y.style.animationIterationCount = 1;
        // y.style.top = "380px"
    };


    
    

  }
