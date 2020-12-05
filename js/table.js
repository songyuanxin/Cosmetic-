function check(){
    var oInput=document.getElementsByName("lastete");
    for(var i=0;i<oInput.length;i++){
        if(document.getElementById("all").checked==true){
            oInput[i].checked=true;
        }else{
            oInput[i].checked=false;
        }
    }
}
function del1(){
    var dRow=document.getElementById("row1");
    dRow.parentNode.removeChild(dRow);
}
function del2(){
    var dRow=document.getElementById("row2");
    dRow.parentNode.removeChild(dRow);
}
function del3(){
    var dRow=document.getElementById("row3");
    dRow.parentNode.removeChild(dRow);
}
function del4(){
    var dRow=document.getElementById("row4");
    dRow.parentNode.removeChild(dRow);
}
function addRow(){
    var addTable=document.getElementById("order");
    var row_index=addTable.rows.length-1;
    var newRow=addTable.insertRow(row_index);
    newRow.id="row5"+row_index;
    var col1=newRow.insertCell(0);
    col1.innerHTML="技术研发，不断创新";
    var col2=newRow.insertCell(1);
    col2.innerHTML="严优选材，进口原料";
    var col3=newRow.insertCell(2);
    col3.innerHTML="精工生产，保证产品质量";
    var col4=newRow.insertCell(3);
    col4.innerHTML="优质售后服务";
    var col5=newRow.insertCell(4);
    col5.innerHTML="轻松拥有自主品牌";
}
function updateRow(){
    var uRow=document.getElementById("rowtitle");
    uRow.setAttribute("style","font-weight:bold;text-align:center;background-color:#cccccc;");
}