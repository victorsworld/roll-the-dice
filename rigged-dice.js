const prompt = require 
("prompt-sync")({sigint: true})

let rigged = Number(prompt("Input a rigged number: "))

let roll = Number(Math.ceil(Math.random() * 6))

let riggedRoll = Number(Math.ceil(Math.random() * 6))

let riggedRoll2 = Number(Math.ceil(Math.random() * 6))

let riggedRoll3 = Number(Math.ceil(Math.random() * 6))

if(roll === rigged || roll === riggedRoll || rigged === riggedRoll2 || rigged === riggedRoll3){
    console.log(rigged)
}
 else {console.log(`   ITS NOT YOUR LUCK DAY       ---${roll}---`)
 console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣶⣶⣾⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠷⠾⠿⠶⠶⠶⠿⣷⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣴⡶⠿⠟⠛⠛⠛⠻⠭⠭⠤⠤⠤⠒⠒⠛⠛⠉⢉⣉⣉⣉⡉⠉⠉⠓⠲⠤⣄⡀⠀⠀⠀⠀⠀⠈⠻⢿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⠀⠀⠀⢀⣴⡾⠟⠉⠁⠔⠊⠛⠓⠒⠒⠢⠤⠤⠤⠶⠶⠖⠒⠛⠉⠉⠉⠉⢉⣉⣉⠉⠙⠓⠲⢤⣄⡉⠲⢤⡀⠀⠀⠀⠀⠈⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⠀⠀⣾⡿⠋⠀⠀⠀⠀⣀⡤⠔⠒⠒⠒⠒⠲⠦⠤⠀⠀⠀⠀⠀⠀⠀⣠⠂⠀⠀⠀⠈⠉⠉⠓⠒⠤⣍⠳⢤⡈⠒⢄⡀⠀⠀⠀⢻⣿⡀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⠀⢠⣿⠀⠀⠀⠀⠀⡐⠁⠀⠀⠀⠀⠀⠀⠀⠢⡀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢆⠙⠢⡀⠀⠀⠀⠀⠀⢻⣷⡀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⢀⣾⡟⠀⠀⠀⠀⠀⠁⠀⢀⣀⣀⣀⣀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⠿⢿⣿⣿⣿⣿⣶⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⡄⠀⠀⠀⠀⠀")
 console.log("⠀⢀⣴⡿⠋⣀⣀⣀⠀⠤⢄⢠⣾⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⡀⠀⠀⠀⠀⣴⣿⠏⠉⣀⣠⣼⣿⣿⣿⣿⣿⣭⣿⣧⠀⢠⣤⡄⠀⠀⢀⣴⣶⣢⡿⢿⣶⣄⠀⠀⠀")
 console.log("⢠⣿⠟⡡⠚⣉⠄⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠛⠛⠻⢿⣿⠿⠛⠀⠀⠀⠀⠻⢿⣶⡾⠟⠛⠉⠉⢠⣄⡀⠉⠉⠉⠉⠀⠃⣀⣤⣤⣶⣶⣤⣤⡀⠈⠙⠪⠻⣷⡄⠀")
 console.log("⣿⡿⡸⠁⡏⢠⣶⣾⣿⣶⣶⣤⡀⢀⣀⡀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠈⠻⢿⣶⣤⣤⣤⣶⣾⠿⠟⠉⣴⠀⠀⠉⠻⣷⡀⠀⢁⠘⣿⡆")
 console.log("⣿⡇⡇⠀⡇⠈⠀⠀⢠⣆⠈⠿⠿⠿⠟⠀⠀⠀⢀⣴⡿⠟⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣧⣀⠀⠀⢹⣿⠀⢸⠀⢸⣿")
 console.log("⠘⣿⣧⠀⠳⠄⠀⠀⣾⣿⠀⠀⠀⠀⠀⢀⣠⣾⣿⠋⠀⠀⠀⠀⠀⠀⣀⣀⣈⡙⠛⢻⣧⠓⠲⠖⠒⠢⠀⠀⢀⣀⣤⣶⣾⠟⠋⠉⢹⣿⠿⣷⡆⣸⡿⠀⡘⠀⢸⣿")
 console.log("⠀⠙⣿⡝⠒⢤⠀⣼⣿⣿⣤⡀⠀⠤⠚⠉⠘⠋⠛⣷⣄⠀⠀⡀⠀⠚⠿⠟⠛⠟⢠⣿⠇⠀⠀⣀⣠⣴⣶⣿⡿⢿⣿⠉⠀⠀⢀⣠⣿⡏⠀⠀⠀⡿⠁⢠⠇⢠⣿⠇")
 console.log("⠀⠀⢹⣿⡄⠀⢀⣿⣿⡿⢻⣿⣷⣦⣄⣀⡀⠀⠀⠈⠛⢿⠿⠃⠀⠀⠀⣀⣀⣠⣤⣴⣶⣾⠿⠟⠛⠉⠁⠀⢀⣾⣿⣤⣶⣾⣿⣿⠟⠁⠀⠀⠀⠤⠒⢉⣴⡿⠋⠀")
 console.log("⠀⠀⠀⣿⣇⠀⢸⣿⣿⡇⣼⡟⠈⠙⣿⡟⠿⠿⣿⣶⣶⣶⣶⠾⠿⣿⡿⠟⠛⠛⠋⠉⠹⣿⡄⠀⣀⣠⣤⣶⣿⣿⣿⠟⠉⣰⣿⠋⠀⠀⠀⠀⠀⢐⣾⡿⠋⠀⠀⠀")
 console.log("⠀⠀⠀⢹⣿⠀⢸⣿⣿⣷⣿⣿⣀⣸⣿⣁⣀⠀⠀⢸⣿⠁⠀⠀⠀⣿⡇⠀⠀⢀⣀⣀⣤⣿⣿⣿⣿⣿⠿⠛⠉⢿⣇⣀⣴⡿⠁⠀⠀⠀⠀⠀⢠⣿⠟⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⢸⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⠋⠉⠀⠀⠀⠀⢘⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⣼⡏⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⢸⡏⠀⠀⢹⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⡿⠛⠉⠁⠀⠀⠈⢿⣧⠀⠀⢀⣠⣾⡿⠛⠁⠀⠀⠀⠀⠀⠀⢀⣼⡟⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⣿⡇⠀⠀⠈⢿⣧⣿⡇⢹⣿⡄⠹⣿⡄⠀⠈⢿⣇⠀⠀⠀⠀⢸⣷⠀⠀⠀⠀⠀⠀⢈⣿⣷⣾⡿⠟⠉⠀⠀⡀⠀⠀⢀⠀⢀⣴⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⣿⡇⠀⠀⠀⠈⠻⠿⣷⣶⣿⣷⣤⣿⣿⣄⣀⣘⣿⣀⣀⣀⣀⣸⣿⣤⣤⣤⣶⣶⣿⠿⠟⠋⠁⣀⡤⠖⢋⣩⡴⠞⢉⣤⣾⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⢰⣿⠀⠀⢀⠀⠀⠠⡀⠀⠈⠉⠉⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠋⠉⠉⠁⠀⣀⡤⠖⢋⣡⡴⠞⠋⣡⣤⣾⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⢸⣿⠀⠀⠸⡀⠀⠀⠙⠶⣤⣀⣀⠀⠀⠈⠉⠉⠉⠉⠉⠉⢉⠉⣁⣀⣀⡀⠤⠖⣚⣩⠥⠖⠛⠉⣁⣤⣶⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⢸⣿⠀⠀⠀⠉⠲⢤⣄⣀⡀⠀⠈⠉⠉⠉⠀⠀⠀⣀⣉⣁⣀⡭⠭⠤⠒⠒⠋⠉⠁⢀⣠⣴⣶⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⣀⣤⣶⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⠈⠻⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣴⣾⣿⡿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
 console.log("⠀⠀⠀⠀⠀⠈⠙⠻⠿⢿⢶⣶⣶⣶⣶⣶⣶⢾⠿⠿⠛⠛⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
}
