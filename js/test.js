/**
 * @author RainSilver
 * @email ppstream123@126.com
 * @create date 2019-02-08 09:03:13
 * @modify date 2019-02-08 09:03:21
 * @desc Script for important days matter. 
 */

//------------------------------正数日
function  calcDays() {
    var key= new Date("2017/11/19 00:00:00");
    var now = new Date();
    var date = now.getTime()-key.getTime();
    var x = Math.floor(date / (1000 * 60 * 60 * 24))+1;
    var i=document.getElementById("number");
    i.innerHTML=x;
}
//setInterval("calcDays()",1000);

// ----------------------------浮动小挂件
//    窗口大小
var oPageX=window.screen.width;
var oPageY=window.screen.height;
var aSnow=[];
//    雪花模板
function snow(x,y,xspeed,yspeed,xsin,size){//x水平位置,y垂直位置,xspeed水平步距,yspeed垂直步距,xsin振幅,size雪花大小
    this.node=document.createElement('div');
    this.x=x;
    this.y=y;
    this.xspeed=xspeed;
    this.yspeed=yspeed;
    this.xsin=xsin;
        this.size=size;
        this.createSnow=function(){
            this.node.style.position='absolute';
            this.node.style.top=this.y+'px';
            this.node.style.left=this.x+'px';
            this.node.style.color="pink";
            var date = new Date();
            if(date.getDate() == 19 && date.getMonth == 10){
                this.node.innerHTML='🌰';
            }else{
                this.node.innerHTML='❤';
            }
        
        document.body.appendChild(this.node);
    };
    this.createSnow();
    this.snowMove=function(){
        this.node.style.top=parseInt(this.node.style.top)+this.yspeed+'px';//垂直方向运动
        this.node.style.left=parseInt(this.node.style.left)+this.xsin*Math.sin(this.xspeed)+'px';
        this.node.style.fontSize=this.size+'px';
//            this.node.style.color='rgb('+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+')';
    };
}
//    创建雪花
function createSnow(){
    aSnow.push(new snow(Math.random()*oPageX,-50,0.02+Math.random()/10,1+Math.random(),Math.random()*30,20+Math.random()*30));
}
setInterval(createSnow,1000);//一秒钟创建一个雪花
//    雪花移动函数
function snowMove(){
    for(var j=0;j<aSnow.length;j++){
        aSnow[j].snowMove();
        if(parseInt(aSnow[j].node.style.top)>oPageY || parseInt(aSnow[j].node.style.left)>oPageX){
            aSnow[j].node.parentNode.removeChild(aSnow[j].node);
            aSnow.splice(j,1);

        }
    }
}
setInterval(snowMove,10);
