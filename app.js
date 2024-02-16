const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeleft=document.querySelector('#time-left')
const score=document.querySelector('#score')
let result=0
let hitposition
let currentTime=60

function randomsquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomsquare = squares[Math.floor(Math.random()*9)]
    randomsquare.classList.add('mole')

    hitposition=randomsquare.id
}
squares.forEach(square => {
    square.addEventListener('mousedown',() => {
        if (square.id == hitposition) {
            result++
            console.log(result)
            score.textContent=result
            hitposition=null
        }
    })

})
 
 
 function movemole(){
   setInterval(randomsquare,1000)
      randomsquare()
 }
 movemole()
 function countdown(){
 currentTime--
 timeleft.textContent=currentTime
 if(currentTime==0){
    clearInterval(countdownTimerId)
    alert('game over! your final score is ' + result)
 }
 }

 let countdownTimerId=setInterval(countdown,1000)