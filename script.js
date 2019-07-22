// A function I wrote back in 2013

let userChoice = prompt("Do you choose rock, paper, or scissors?");
let computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice < 0.34) {
    computerChoice = 'rock';
}
else if (computerChoice < 0.67) {
     computerChoice = 'paper';
}
else {
     computerChoice = 'scissors';
}

let compare = function(choice1, choice2) {
    console.log(choice1, choice2);
    if (choice1 === choice2) {
        console.log("It's a tie");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            console.log("rock wins");
        }
        else {
            console.log("paper wins");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("paper wins");
        }
        else {
            console.log("scissors wins");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            console.log("scissors wins");
        }
        else {
            console.log("rock wins");
        }
    }
};

compare(userChoice, computerChoice);


// Some nice styling

let body = document.querySelector('body');
document.querySelector('#red').onclick = function() {
    body.style.backgroundColor = 'LightSalmon';
};
document.querySelector('#green').onclick = function() {
    body.style.backgroundColor = 'PaleGreen';
};
document.querySelector('#blue').onclick = function() {
    body.style.backgroundColor = 'LightSkyBlue';
};

// Add functionality for increasing font size. Actually, it only
// works within the script tags inside the html file, for some odd reason

let hits = function() {
    for (let i = 0; i < 5; i++) {
        let res = Math.random();
        if (res < 0.5) {
            res = 0;
            console.log(res)
        }
        else if (res > 0.5) {
            res = 1;
            console.log(res);
        }
    }
};
hits();
