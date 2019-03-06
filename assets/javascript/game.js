
var randomNumber;
var score;
var win = 0;
var lose = 0;

var randomNumberText = $("#random-number-text");
var scoreText = $("#score-text");
var winText = $("#win-text");
var loseText = $("#lose-text");

var gem1Value;
var gem2Value;
var gem3Value;
var gem4Value;

StartGame();

function GetRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function UpdateScore(){
    winText.text(win);
    loseText.text(lose);
    scoreText.text(score);
}

function CheckGameStatus(){
    if(score == randomNumber){
        win++
        StartGame();
    }else if(score > randomNumber){
        lose++;
        StartGame();
    }

    UpdateScore();
}

function PrintGemsStatus(){
    console.log("Gem 1 value: " + gem1Value);
    console.log("Gem 2 value: " + gem2Value);
    console.log("Gem 3 value: " + gem3Value);
    console.log("Gem 4 value: " + gem4Value);
    console.log("-------------------------");
}

function PrintScoreStatus(){

    console.log("Random Number: " + randomNumber);
    console.log("Score: " + score);
    console.log("Wins: " + win);
    console.log("Looses: " + lose);
    console.log("-------------------------");
}

function StartGame(){
    randomNumber = GetRandom(19,121);
    randomNumberText.text(randomNumber);

    score = 0;

    gem1Value = GetRandom(1,13);
    gem2Value = GetRandom(1,13);
    gem3Value = GetRandom(1,13);
    gem4Value = GetRandom(1,13);
    console.clear();
    console.log("NEW GAME------------------");
    PrintScoreStatus();
    PrintGemsStatus();
}

$("#gem1").on("click", function(){
    score += gem1Value;
    CheckGameStatus();
})

$("#gem2").on("click", function(){
    score += gem2Value;
    CheckGameStatus();
})

$("#gem3").on("click", function(){
    score += gem3Value;
    CheckGameStatus();
})

$("#gem4").on("click", function(){
    score += gem4Value;
    CheckGameStatus();
})