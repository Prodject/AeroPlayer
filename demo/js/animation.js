
//点击封面标题弹出播放列表
document.getElementById("rui_box").onmouseover = function(){
    var x =  document.getElementById("rui_list");
    x.style.display = "block";
    x.style.animation = "moveList 1s";
    x.style.animationIterationCount = 1;
    x.style.top = "380px"
};

