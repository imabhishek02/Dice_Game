
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="images/dice"+randomNumber1+".png"; //images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage);

var randnum2=Math.floor(Math.random()*6)+1;
var randiceimage="images/dice"+randnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randiceimage);


if(randomNumber1>randnum2)
{
  document.querySelector("h1").innerHTML="&#128681 Player 1 won!";
}
else if(randnum2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 won! &#128681";
}else{
  document.querySelector("h1").innerHTML="Draw!";
}
