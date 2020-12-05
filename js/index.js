function showTime(){
    var myDate=new Date();//定义日期与时间变量
    var hour=myDate.getHours();
    var minutes=myDate.getMinutes();
    var seconds=myDate.getSeconds();
    if(hour<10){
        hour="0"+hour;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    document.getElementById("time").innerHTML="当前时间为："+hour+":"+minutes+":"+seconds;//给id为time的标签赋值
    setTimeout("showTime()",1000);//设置定时函数，1秒执行一次showTime函数
}

function openwindow(){
    window.status="系统当前状态：您正在注册用户......";
    if(window.screen.width==1024&&window.screen.height==768){
        window.open("register.html");
    }
    else{
        window.alert("请设置分辨率为1024x768.然后再打开");
    }
}
function closewindow(){
    if(window.confirm("您确认要退出系统吗？")){
        opener=null;
        window.close();
    }
}
