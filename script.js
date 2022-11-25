var total=0;
document.getElementById('btn1').onclick=function(){
    document.getElementById('btn1').style.backgroundColor=' hsl(25, 97%, 53%)';
    total +=parseInt(document.getElementById('btn1').getAttribute("price"));
    document.getElementById('span').innerHTML=total;
}
document.getElementById('btn2').onclick=function(){
    document.getElementById('btn2').style.backgroundColor=' hsl(25, 97%, 53%)';
    total +=parseInt(document.getElementById('btn1').getAttribute("price"));
    document.getElementById('span').innerHTML=total;
}
document.getElementById('btn3').onclick=function(){
    document.getElementById('btn3').style.backgroundColor=' hsl(25, 97%, 53%)';
    total +=parseInt(document.getElementById('btn1').getAttribute("price"));
    document.getElementById('span').innerHTML=total;
}
document.getElementById('btn4').onclick=function(){
    document.getElementById('btn4').style.backgroundColor=' hsl(25, 97%, 53%)';
    total +=parseInt(document.getElementById('btn1').getAttribute("price"));
    document.getElementById('span').innerHTML=total;
}
document.getElementById('btn5').onclick=function(){
    document.getElementById('btn5').style.backgroundColor=' hsl(25, 97%, 53%)';
    total +=parseInt(document.getElementById('btn1').getAttribute("price"));
    document.getElementById('span').innerHTML=total;
}
document.getElementById('btn6').onclick=function(){
    document.getElementById('div2').style.visibility="visible";
}
document.getElementById('button2').onclick=function(){
    document.getElementById('div2').style.visibility="hidden";
}


