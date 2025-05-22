let choice=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");
let playerWin=document.getElementById("player");
let compWin=document.getElementById("comp");
let count=0;
let count2=0;
choice.forEach(event => {
    event.addEventListener("click",()=>{
        let comp=Math.floor(Math.random()*choice.length);
        let compId=choice[comp].getAttribute("id");
        let playerId=event.getAttribute("id");
        if(playerId==="rock"&&compId==="scissor"||playerId==="scissor"&&compId==="rock"){
            if(playerId==="rock"){
                playerWin.innerHTML=`${count++}`;
            }
            else if(compId==="rock"){
                compWin.innerHTML=`${count2++}`;
            }
        }
        else if(playerId==="scissor"&&compId==="paper"||playerId==="paper"&&compId==="scissor"){
            msg.innerText="scissor win";
        }
        else if(playerId==="paper"&&compId==="rock"||playerId==="rock"&&compId==="paper"){
            msg.innerText="paper win";
        }
        else if(playerId===compId){
            msg.innerText="Same";
        }
    })
});