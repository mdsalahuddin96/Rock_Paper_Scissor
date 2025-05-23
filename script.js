let choice=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");
let playerWin=document.getElementById("player");
let compWin=document.getElementById("comp");
let count=1;
let count2=1;
choice.forEach(event => {
    event.addEventListener("click",()=>{
        let comp=Math.floor(Math.random()*choice.length);
        let compId=choice[comp].getAttribute("id");
        let playerId=event.getAttribute("id");
        if(playerId==="rock"&&compId==="scissor"||playerId==="scissor"&&compId==="rock"){
            if(playerId==="rock"){
                playerWin.innerHTML=`${count++}`;
                msg.style.backgroundColor="green";
                msg.innerText=`You win! ${playerId} beats ${compId}`;
            }
            else{
                compWin.innerText=`${count2++}`;
                msg.style.backgroundColor="red";
                msg.innerText=`You lost! ${compId} beats ${playerId}`;
            }
        }
        else if(playerId==="scissor"&&compId==="paper"||playerId==="paper"&&compId==="scissor"){
            if(playerId==="scissor"){
                playerWin.innerHTML=`${count++}`;
                msg.style.backgroundColor="green";
                msg.innerText=`You win! ${playerId} beats ${compId}`;
            }
            else {
                compWin.innerText=`${count2++}`;
                msg.style.backgroundColor="red";
                msg.innerText=`You lost! ${compId} beats ${playerId}`;
            }
        }
        else if(playerId==="paper"&&compId==="rock"||playerId==="rock"&&compId==="paper"){
            if(playerId==="paper"){
                playerWin.innerHTML=`${count++}`;
                msg.style.backgroundColor="green";
                msg.innerText=`You win! ${playerId} beats ${compId}`;
            }
            else {
                compWin.innerText=`${count2++}`;
                msg.style.backgroundColor="red";
                msg.innerText=`You lost! ${compId} beats ${playerId}`;
            }
        }
        else{
            msg.innerText="Its Draw!";
            msg.style.backgroundColor="rgb(9, 9, 66)";
        }
    })
});
