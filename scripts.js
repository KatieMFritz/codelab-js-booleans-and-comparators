alert("You are hiking through a dangerous forest.")

var choice1 = prompt("The sun is setting. Do you stay here for the night, or leave right away? [Type STAY or LEAVE]")

if (choice1 === "STAY") {
  var choice2a = prompt("How many of your 6 ration packs do you eat before bed? [Type a number]")

  if (choice2a < 1) {
    alert("You pass out from low blood sugar and a bear eats you and your six ration packs. Didn't do you much good, did it? THE END")
  }
  else if (choice2a >= 1 && choice2a < 4) {
    alert("Good work on the moderation. You live another day. THE END")
  }
  else if (choice2a >= 4 && choice2a <=6) {
    alert("Your ration packs are pretty big. You explode from eating so many at once. THE END")
  }
  else if (choice2a > 6) {
    alert("Dude, you didn't even have that many ration packs. Disqualified! THE END")
  }
  else {
    alert("You didn't follow directions. THE END")
  }
}
else if (choice1 === "LEAVE") {
  var choice2b = prompt("How many miles will you walk tonight? [Type a number]")
}
else {
  alert("You didn't follow directions. THE END")
}
