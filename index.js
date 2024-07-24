//1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 6
let secondCard = 9 

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

//console.log(sum)

function startGame() {
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20){ 
        message= "Do you want to draw a new card"
    } else if (sum === 21 ) {
        message= "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message= "You're out of the game!"
        isAlive = false
    }
}

messageEl.textContent = message

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

//let age = 22 

//if (age <= 21) {
 //   console.log("You can not enter the club")
//} else {
 //   console.log("Welcome!")
//}


// CASH OUT!
//console.log(hasBlackJack)
//console.log(isAlive)
//console.log(message)


