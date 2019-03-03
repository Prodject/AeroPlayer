/**
 * @author RainSilver
 * @email ppstream123@126.com
 * @create date 2019-02-13 18:54:57
 * @modify date 2019-02-17 12:00:26
 * @desc Animation of player and website.
 */

//默认调用的方法
//list_slideOut();

/*方法列表*/
//点击封面标题弹出播放列表
function list_slideOut(action) {
    if(action == "in"){
            var x =  document.getElementById("rui_list");
            x.style.animation = "moveListBack 1s";
            x.style.animationIterationCount = 1;
            x.style.top = "10px";
            x.style.opacity = "0";

    }else if(action == "out"){
            var x =  document.getElementById("rui_list");
            x.style.animation = "moveList 1s";
            x.style.animationIterationCount = 1;
            x.style.top = "380px";
            x.style.display = "block";
            x.style.opacity = "1";



    }
  }
