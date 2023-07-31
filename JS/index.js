var i=Math.random()*6 +1;
i=Math.floor(i);
var j= Math.random()*6 +1;
j=Math.floor(j);
var n=document.querySelectorAll("img");
var firstImage='assets/images/dice'+i+'.png';
var secondImage='assets/images/dice'+j+'.png';
n[0].setAttribute("src",firstImage);
n[1].setAttribute("src",secondImage);
var x=document.querySelector("h1");
if(j>i){
    x.innerText="Player 2 wins";
}
else if(j==i){
    x.innerText="Draw"
}
else{
    x.innerText="Player 1 Wins";
}
