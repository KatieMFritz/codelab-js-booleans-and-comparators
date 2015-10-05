alert("You are hiking through a dangerous forest.")

var choice1 = prompt("The sun is setting. Do you stay here for the night, or leave right away? [Type STAY or LEAVE]")

if (choice1 === "STAY") {
  var choice2a = prompt("How many of your 6 ration packs do you eat before bed? [Type a number]")
}

else if (choice1 === "LEAVE") {
  var choice2b = prompt("How many miles will you walk tonight? [Type a number]")
}

else {
  prompt("Please type STAY or LEAVE.")
}
