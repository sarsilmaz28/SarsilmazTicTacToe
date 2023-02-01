let gameOverSound=new Audio("gameover.mp3")
let moveSound=new Audio("ting.mp3")
let winSound=new Audio("win.mp3")
let turn=1
let win=0


function checkwin(winner)
{
    if((one.innerHTML!='' && two.innerHTML!='' && three.innerHTML!='' && one.innerHTML==two.innerHTML && two.innerHTML==three.innerHTML)  || (four.innerHTML!='' && five.innerHTML!='' && six.innerHTML!='' && four.innerHTML==five.innerHTML && five.innerHTML==six.innerHTML) || (seven.innerHTML!='' && eight.innerHTML!='' && nine.innerHTML!='' && seven.innerHTML==eight.innerHTML && eight.innerHTML==nine.innerHTML) || (one.innerHTML!='' && four.innerHTML!='' && seven.innerHTML!='' && one.innerHTML==four.innerHTML && four.innerHTML==seven.innerHTML) || (two.innerHTML!='' && five.innerHTML!='' && eight.innerHTML!='' && two.innerHTML==five.innerHTML && five.innerHTML==eight.innerHTML) || (three.innerHTML!='' && six.innerHTML!='' && nine.innerHTML!='' && three.innerHTML==six.innerHTML && six.innerHTML==nine.innerHTML) || (one.innerHTML!='' && five.innerHTML!='' && nine.innerHTML!='' && one.innerHTML==five.innerHTML && five.innerHTML==nine.innerHTML) || (three.innerHTML!='' && five.innerHTML!='' && seven.innerHTML!='' && three.innerHTML==five.innerHTML && five.innerHTML==seven.innerHTML) )
    {
        winSound.play()
        turn_text.innerHTML=winner+" wins "
        dance.style.width="200px"
        turn=1
        win=1
    }

    //Check for Draw

    else if(one.innerHTML!='' && two.innerHTML!='' && three.innerHTML!='' && four.innerHTML!='' && five.innerHTML!='' && six.innerHTML!='' && seven.innerHTML!='' && eight.innerHTML!='' && nine.innerHTML!='')
    {
        gameOverSound.play();
        turn_text.innerHTML="Its a Draw. Play Again"  
    }
}

//game logic


let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    element.addEventListener("click",()=>{
        moveSound.play()
        if(element.innerHTML==='')
        {
            if(turn==1){
                element.innerHTML="X"
                turn=0
                turn_text.innerHTML="Turn for O"
                checkwin("X")
            }
            else{
                element.innerHTML="O"
                turn=1
                turn_text.innerHTML="Turn for X"
                checkwin("O")
            }
        }
    })
})

reset.addEventListener("click", ()=>{
    Array.from(boxes).forEach(element=>{
            element.innerHTML=''
            dance.style.width="0px"
            turn_text.innerHTML="Turn for X"
})
})
