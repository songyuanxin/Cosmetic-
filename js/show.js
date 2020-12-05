var picsArr=new Array();
     picsArr[0]="imgs/index/slide-homepage1.jpg";
     picsArr[1]="imgs/index/slider-homepage1.jpg";
     picsArr[2]="imgs/index/slider-homepage2.jpg";
var timer,index=0;
window.onload=showPic;
function showPic(){
    document.getElementById("pic").src=picsArr[index];
    if(index<(picsArr.length-1)){
        index++;
    }
    else{
        index=(index+1)%picsArr.length;
    }
    timer=setTimeout("showPic()",2000);
}
function showPrepic(){
    if(index>0){
        index--;
    }
    else{
        index=4;
    }
    document.getElementById("pic").src=picsArr[index];
    timer=setTimeout("showPrepic()",2000);
}
function showNext(){
    clearTimeout(timer);
    showPic();
}
function showPre(){
    clearTimeout(timer);
    showPrepic();
}