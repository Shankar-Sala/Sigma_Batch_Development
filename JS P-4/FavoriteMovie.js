const favMovie = "avatar";
let guess = prompt("Guess my favorite movie:");

while (guess != favMovie) {
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess. please try again");
}
if(guess == favMovie){
    console.log("congrats!!");
}