var randomNumber1=Math.floor(Math.random() * 6) +1;

var dick="images/dice"+randomNumber1+".png";

var im=document.querySelectorAll("img")[0].setAttribute("src",dick);


var randomNumber2=Math.floor(Math.random()*6)+1;
var dick="images/dice"+randomNumber2+".png";
var im=document.querySelectorAll("img")[1].setAttribute("src",dick);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Sanu  Wins😘";
}else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerText="Soo  Wins 😜";

}else{
    document.querySelector("h1").innerText="koi  ni jeeta 😢";
}

