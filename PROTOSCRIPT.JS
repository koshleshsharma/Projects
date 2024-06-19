let btn=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn")
let newgame=document.querySelector("#new-btn");
let msg_container=document.querySelector(".msg_container")
let msg=document.querySelector("#msg");


turnO=true;

const resetgame=()=>{
   turnO=true;
   enablebtn();
   msg_container.classList.add("hide");
}

const winPatterns=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

btn.forEach((bul)=> {
   bul.addEventListener("click",()=>{
      if(turnO==true){
         bul.innerText='O';
         turnO=false;
      }
      else{
         bul.innerText='X';
         turnO=true;
      };

      checWinner();
   })

});
const enablebtn=()=>{
   for(let btns of btn)
   {
      btns.innerText="";
      btns.disabled=false;
      
   }
}

const disablebtn=()=>{
   for(let btns of btn)
   {
      btns.disabled=true;
   }
}

const showwinner=(winner)=>{
      msg.innerText=`Congratualtion Winner is ${winner}`;
      msg_container.classList.remove("hide");
}

const checWinner=()=>{
      for(let pattern of winPatterns){
         let pos1=btn[pattern[0]].innerText;
         let pos2=btn[pattern[1]].innerText;
         let pos3=btn[pattern[2]].innerText;
         if(pos1 !="" && pos2 !="" && pos3 !="")
         {
            if(pos1==pos2 && pos2==pos3){
               console.log("Winner");
               showwinner(pos1);
               disablebtn();
            }
         }

      }
}

reset_btn.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);