var leftT;
    var leftL;
    var objLeft;
    function place(){
        objLeft=document.getElementById("leftad");
        if(objLeft.currentStyle){
            leftT=parseInt(objLeft.currentStyle.top);
            leftL=parseInt(objLeft.currentStyle.left);
        }
        else{
            leftT=parseInt(document.defaultView.getComputedStyle(objLeft,null).top);
            leftL=parseInt(document.defaultView.getComputedStyle(objLeft,null).left);
        }
    }
    function move(){
        objLeft.style.top=leftT+parseInt(document.documentElement.scrollTop)+"px";
        objLeft.style.left=leftL+parseInt(document.documentElement.scrollLeft)+"px";
    }
    window.onload=place;
    window.onscroll=move;