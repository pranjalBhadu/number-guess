const btn = document.querySelector(".submit-btn");
let turn = 1;
const uguess = document.querySelector(".guess");
const lastresult = document.querySelector(".lastresult");
const totalturn = document.querySelector(".totalturn");
const loworhigh = document.querySelector(".loworhigh");
let number = Math.floor(Math.random()*100)+1;
let resetbtn;
alert(number);

function checkguess(){
  let userguess = Number(uguess.value);
  totalturn.textContent = "Total turns played: "+turn;
  lastresult.textContent = "you guessed "+userguess;
  if(userguess == number){
    loworhigh.textContent = "Congratulations! You got it right";
    loworhigh.style.backgroundColor = "green";
    restartgame();
  }
  else if(turn == 10){
    totalturn.textContent = "";
    lastresult.textContent = "";
    loworhigh.textContent = "GAME OVER!!!";
    restartgame();
  }
  else if(userguess > number){
    loworhigh.textContent = "Guess is too high!";
    loworhigh.style.backgroundColor = "red";
  }
  else if(userguess < number){
    loworhigh.textContent = "Guess is too low!";
    loworhigh.style.backgroundColor = "red";
  }
  turn++;
  uguess.value = "";
  uguess.focus();
}

btn.addEventListener('click',checkguess);

function restartgame() {
  alert("restart game");
  uguess.disabled = true;
  btn.diabled = true;
  resetbtn = document.createElement('button');
  resetbtn.textContent = "Start a new game?";
  document.body.append(resetbtn);
  resetbtn.addEventListener("click",resetgame);
}

function resetgame(){
  turn = 1;
  let i;
  let paras = document.querySelectorAll(".results p");
  for(i=0;i<paras.length;i++){
    paras[i].textContent = "";
    paras[i].style.backgroundColor = "white";
  }
  ugess.value="";
  uguess.disabled = false;
  btn.diabled = false;
  let number = Math.floor(Math.random()*100)+1;
}