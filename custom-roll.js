const prompt = require 
("prompt-sync")({sigint: true})
console.log("Pick a number for a sided dice, n = number. ")
let uI = Number(prompt("How many sides should the dice have: "))
const sidesOfDice = [1, 2, 3, 4, 5, 6 ]


if(uI === sidesOfDice[0]){
   console.log("The dice will only have n/1 here is your random roll: " + (Math.ceil(Math.random() * 1)))
} else if(uI === sidesOfDice[1]){
    console.log("The dice will only have n/2 here is your random roll: " + (Math.ceil(Math.random() * 2)))
} else if(uI === sidesOfDice[2]){
    console.log("The dice will only have n/3 here is your random roll: " + (Math.ceil(Math.random() * 3)))}
else if(uI === sidesOfDice[3]){
    console.log("The dice will only have n/4 here is your random roll: " + (Math.ceil(Math.random() * 4)))}
else if(uI === sidesOfDice[4]){
    console.log("The dice will only have n/5 here is your random roll: " + (Math.ceil(Math.random() * 5)))}
else if(uI === sidesOfDice[5]){
    console.log("The dice will only have n/6 here is your random roll: " + (Math.ceil(Math.random() * 6)))}
    else{console.log("Error")}