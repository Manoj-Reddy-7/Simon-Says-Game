let gameSeq=[];
let userSeq=[];
let maxScore=0;



let btns=["yellow","red","purple","green"];

let started=false;
let level= 0;

let h2=document.querySelector("h2");

let h3=document.createElement("h3");
h3.innerText=`High Score : ${maxScore} `;

h2.insertAdjacentElement("beforebegin",h3);

document.addEventListener("keypress",function(){
    if(started ==false){
    console.log("game started");
    started="true";


      levelUp();
}
});

function gameFlash(btn){
    //level++;
  btn.classList.add("gameflash");
  setTimeout(function(){
    btn.classList.remove("gameflash");
},250);

}

function levelUp(){

  userSeq=[];
    level++;
        
h2.innerText=`Level ${level}`;

// random
let radIdx=Math.floor(Math.random()*3);

let radcolor=btns[radIdx];
let radBtn =document.querySelector(`.${radcolor}`);
// console.log(radIdx,radcolor,radBtn);
gameSeq.push(radcolor);

// flash;

gameFlash(radBtn);

  console.log(gameSeq);

}



 function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
 }

function checkAns(idx){
  if(userSeq[idx]== gameSeq[idx]){
    if(userSeq.length== gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }else{
   h2.innerHTML=`Game over ! Your score was ${level} <br> <br> Press any key to start`;
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
   },150);
   updateHighScore();
   reset();
  }
  

}
function btnPress(){

  let btn=this;
  userFlash(btn);
  // console.log(gameSeq);
  // console.log(userSeq);



  let userColor=this.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);

}


let allBtns=document.querySelectorAll(".btn");
for(bt of allBtns){
  bt.addEventListener("click",btnPress);
}

function reset(){
  gameSeq=[];
  userSeq=[];
  started=false;
  level=0;

}



// highest
function updateHighScore(){
  maxScore=Math.max(maxScore,level);
  h3.innerText=`High Score : ${maxScore} `;

}
