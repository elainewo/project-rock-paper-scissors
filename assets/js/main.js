const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twenty = document.getElementById("twenty")
const container = document.getElementById("container")
const roundContainer = document.getElementById("round-container")
const roundTotal = document.getElementById("round-total")
const roundInc = document.getElementById("round")
const result = document.getElementById("result")
const matchUser = document.getElementById("userCount")
const matchComp = document.getElementById("compCount")
const newStart = document.getElementById("restart")
let rockSpan = document.getElementById("rockSpan")
let paperSpan = document.getElementById("paperSpan")
let scissorsSpan = document.getElementById("scissorsSpan")

function getRounds() {
    let round = 0;

    if (five.checked) {
        round = 5
    } else if (ten.checked) {
        round = 10
    } else if (fifteen.checked) {
        round = 15
    } else if (twenty.checked) {
        round = 20
    }
    return round;
}

getRounds()

let computerChoice;
let x = Math.floor(Math.random() * 3);
console.log("x:", x);

switch (x) {
    case 0:
        computerChoice = "paper";
        break;
    case 1:
        computerChoice = "rock";
        break;
    case 2:
        computerChoice = "scissors";
        break;
}
console.log("computerChoice is", computerChoice)


let i = 0;
let user = 0;
let comp = 0;
document.getElementById("rock").addEventListener("click", (e) => {
    console.log(e.target);
    rockSpan.style.borderColor = "#fff";
    paperSpan.style.borderColor = "#fff";
    scissorsSpan.style.borderColor = "#fff";
    let round = getRounds();
    container.style.display = "none";
    roundContainer.style.display = "block";
    roundTotal.innerHTML = round;
    x = Math.floor(Math.random() * 3);
    console.log(x)
    if (i < round) {
        i++;
        roundInc.innerHTML = i;
    }
    if (x == 0) {
        matchUser.innerHTML = `${user * 1}`
        matchComp.innerHTML = `${++comp}`
        rockSpan.style.borderColor = "red";
        result.innerHTML = `<p>Paper (comp) beats Rock (user). You lose!</p>`
    } else if (x == 1) {
        matchUser.innerHTML = `${++user}`
        matchComp.innerHTML = `${++comp}`
        rockSpan.style.borderColor = "grey";
        result.innerHTML = `<p>It was a Draw. You both chose Rock.</p>`
    }
    else if (x == 2) {
        matchUser.innerHTML = `${++user}`
        matchComp.innerHTML = `${comp * 1}`
        rockSpan.style.borderColor = "green";
        result.innerHTML = `<p>Rock (user) beats Scissors (comp). You win!</p>`

    }
    else if (i == round && user > comp) {
        result.innerHTML = `<p>The user wins</p>`
    }
    else if (i == round && comp > user) {
        result.innerHTML = `<p>The comp wins</p>`
    }
})


document.getElementById("paper").addEventListener("click", (e) => {
    console.log(e.target);
    rockSpan.style.borderColor = "#fff";
    paperSpan.style.borderColor = "#fff";
    scissorsSpan.style.borderColor = "#fff";
    let round = getRounds();
    container.style.display = "none";
    roundContainer.style.display = "block";
    roundTotal.innerHTML = round;
    x = Math.floor(Math.random() * 3);
    console.log(x)
    if (i < round) {
        i++;
        roundInc.innerHTML = i;
    }
    if (x == 0) {
        matchUser.innerHTML = `${++user}`
        matchComp.innerHTML = `${++comp}`
        paperSpan.style.borderColor = "grey";
        result.innerHTML = `<p>It was a Draw. You both chose Paper.</p>`
    } else if (x == 1) {
        matchUser.innerHTML = `${++user}`
        matchComp.innerHTML = `${comp * 1}`
        paperSpan.style.borderColor = "green";
        result.innerHTML = `<p>Paper (user) beats Rock (comp). You win!</p>`
    }
    else if (x == 2) {
        matchUser.innerHTML = `${user * 1}`
        matchComp.innerHTML = `${++comp}`
        paperSpan.style.borderColor = "red";
        result.innerHTML = `<p>Scissors (comp) beats Paper (user). You lose!</p>`

    }
    else if (i == round && user > comp) {
        result.innerHTML = `<p>The user wins</p>`
    }
    else if (i == round && comp > user) {
        result.innerHTML = `<p>The comp wins</p>`
    }
})

document.getElementById("scissors").addEventListener("click", (e) => {
    console.log(e.target);
    rockSpan.style.borderColor = "#fff";
    paperSpan.style.borderColor = "#fff";
    scissorsSpan.style.borderColor = "#fff";
    let round = getRounds();
    container.style.display = "none";
    roundContainer.style.display = "block";
    roundTotal.innerHTML = round;
    x = Math.floor(Math.random() * 3);
    console.log(x)
    if (i < round) {
        i++;
        roundInc.innerHTML = i;
    }
    if (x == 0) {
        matchUser.innerHTML = `${++user}`
        matchComp.innerHTML = `${comp * 1}`
        scissorsSpan.style.borderColor = "green";
        result.innerHTML = `<p>Scissors (user) beats Paper (comp). You win!</p>`
    } else if (x == 1) {
        matchUser.innerHTML = `${user * 1}`
        matchComp.innerHTML = `${++comp}`
        scissorsSpan.style.borderColor = "red";
        result.innerHTML = `<p>Rock (comp) beats Scissors (user). You lose!</p>`
    }
    else if (x == 2) {
        matchUser.innerHTML = `${++user}`
        matchComp.innerHTML = `${++comp}`
        scissorsSpan.style.borderColor = "grey";
        result.innerHTML = `<p>It was a Draw. You both chose Scissors.</p>`

    }
    else if (i == round && user > comp) {
        result.innerHTML = `<p>The user wins</p>`
    }
    else if (i == round && comp > user) {
        result.innerHTML = `<p>The comp wins</p>`
    }
})

function restarten() {
    console.log("test")
    location.reload()
}

newStart.innerHTML = `<p><a onclick="restarten()">restart</a></p>`