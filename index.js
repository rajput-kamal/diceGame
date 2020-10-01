var randomNumber1 = Math.floor(6*Math.random())+1;
var ranNum1src = "dice"+randomNumber1+".png";
ranNum1src = "images/"+ranNum1src;

var randomNumber2 = Math.floor(6*Math.random())+1;
var ranNum2src = "dice"+randomNumber2+".png";
ranNum2src = "images/"+ranNum2src;

var ranPath1 = document.querySelectorAll("img")[0];
ranPath1.setAttribute("src" , ranNum1src);

var ranPath2 = document.querySelectorAll("img")[1];
ranPath2.setAttribute("src" , ranNum2src);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player1 wins! ";
}
else if (randomNumber1 < randomNumber2)
  document.querySelector("h1").innerHTML = "player2 wins! ";
else {
  document.querySelector("h1").innerHTML = "draw! ";
}
