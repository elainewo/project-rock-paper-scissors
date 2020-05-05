const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twenty = document.getElementById("twenty");
const container = document.getElementById("container");
const roundContainer = document.getElementById("round-container");
const roundTotal = document.getElementById("round-total");
const roundInc = document.getElementById("round");
const result = document.getElementById("result");
const matchUser = document.getElementById("userCount");
const matchComp = document.getElementById("compCount");
const newStart = document.getElementById("restart");
let rockSpan = document.getElementById("rockSpan");
let paperSpan = document.getElementById("paperSpan");
let scissorsSpan = document.getElementById("scissorsSpan");
let test = document.getElementById("test");

function getRounds() {
  let round = 0;

  if (five.checked) {
    round = 5;
  } else if (ten.checked) {
    round = 10;
  } else if (fifteen.checked) {
    round = 15;
  } else if (twenty.checked) {
    round = 20;
  }
  return round;
}

getRounds();

let i = 0;
let user = 0;
let comp = 0;
document.getElementById("rockSpan").addEventListener("click", (e) => {
  console.log(e.target);
  rockSpan.style.borderColor = "#fff";
  paperSpan.style.borderColor = "#fff";
  scissorsSpan.style.borderColor = "#fff";
  let round = getRounds();
  container.style.display = "none";
  roundContainer.style.display = "block";
  roundTotal.innerHTML = round;
  x = Math.floor(Math.random() * 3);
  console.log(x);
  ++i;
  if (i < round) {
    roundInc.innerHTML = i;
  } else if (i <= round) {
    roundInc.innerHTML = i++;
    console.log("finish");
    test.style.display = "none";
    rechnen();
  }

  if (x == 0) {
    matchUser.innerHTML = `${user * 1}`;
    matchComp.innerHTML = `${++comp}`;
    rockSpan.style.borderColor = "red";
    result.innerHTML = `<p><b>Rock</b> VS <b>Paper</b> . <span style="color:red">You lose!</span></p>`;
  } else if (x == 1) {
    matchUser.innerHTML = `${++user}`;
    matchComp.innerHTML = `${++comp}`;
    rockSpan.style.borderColor = "grey";
    result.innerHTML = `<p>It was a <span style="color:grey">Draw</span>. You both chose <b>Rock</b>.</p>`;
  } else if (x == 2) {
    matchUser.innerHTML = `${++user}`;
    matchComp.innerHTML = `${comp * 1}`;
    rockSpan.style.borderColor = "green";
    result.innerHTML = `<p><b>Rock</b> VS <b>Scissors</b>. <span style="color:green">You win!</span></p>`;
  }
});

document.getElementById("paperSpan").addEventListener("click", (e) => {
  console.log(e.target);
  rockSpan.style.borderColor = "#fff";
  paperSpan.style.borderColor = "#fff";
  scissorsSpan.style.borderColor = "#fff";
  let round = getRounds();
  container.style.display = "none";
  roundContainer.style.display = "block";
  roundTotal.innerHTML = round;
  x = Math.floor(Math.random() * 3);
  console.log(x);
  ++i;
  if (i < round) {
    roundInc.innerHTML = i;
  } else if (i <= round) {
    roundInc.innerHTML = i++;
    console.log("finish");
    test.style.display = "none";
    rechnen();
  }
  if (x == 0) {
    matchUser.innerHTML = `${++user}`;
    matchComp.innerHTML = `${++comp}`;
    paperSpan.style.borderColor = "grey";
    result.innerHTML = `<p>It was a <span style="color:grey">Draw</span>. You both chose <b>Paper</b>.</p>`;
  } else if (x == 1) {
    matchUser.innerHTML = `${++user}`;
    matchComp.innerHTML = `${comp * 1}`;
    paperSpan.style.borderColor = "green";
    result.innerHTML = `<p><b>Paper</b> VS <b>Rock</b>. <span style="color:green">You win!</span></p>`;
  } else if (x == 2) {
    matchUser.innerHTML = `${user * 1}`;
    matchComp.innerHTML = `${++comp}`;
    paperSpan.style.borderColor = "red";
    result.innerHTML = `<p><b>Paper</b> VS <b>Scissors</b>.<span style="color:red">You lose!</span></p>`;
  }
});

document.getElementById("scissorsSpan").addEventListener("click", (e) => {
  console.log(e.target);
  rockSpan.style.borderColor = "#fff";
  paperSpan.style.borderColor = "#fff";
  scissorsSpan.style.borderColor = "#fff";
  let round = getRounds();
  container.style.display = "none";
  roundContainer.style.display = "block";
  roundTotal.innerHTML = round;
  x = Math.floor(Math.random() * 3);
  console.log(x);
  ++i;
  if (i < round) {
    roundInc.innerHTML = i;
  } else if (i <= round) {
    roundInc.innerHTML = i++;
    console.log("finish");
    test.style.display = "none";
    rechnen();
  }
  if (x == 0) {
    matchUser.innerHTML = `${++user}`;
    matchComp.innerHTML = `${comp * 1}`;
    scissorsSpan.style.borderColor = "green";
    result.innerHTML = `<p><b>Scissors</b> VS <b>Paper</b>. <span style="color:green">You win!</span></p>`;
  } else if (x == 1) {
    matchUser.innerHTML = `${user * 1}`;
    matchComp.innerHTML = `${++comp}`;
    scissorsSpan.style.borderColor = "red";
    result.innerHTML = `<p><b>Scissors</b> VS <b>Rock</b>. <span style="color:red">You lose!</span></p>`;
  } else if (x == 2) {
    matchUser.innerHTML = `${++user}`;
    matchComp.innerHTML = `${++comp}`;
    scissorsSpan.style.borderColor = "grey";
    result.innerHTML = `<p>It was a <span style="color:grey">Draw</span>. You both chose <b>Scissors</b>.</p>`;
  }
});

function rechnen() {
  if (matchUser.innerHTML > matchComp.innerHTML) {
    result.innerHTML = "Congratulations! You win! 🥳<br>Play again";
  } else if (matchUser.innerHTML < matchComp.innerHTML) {
    result.innerHTML = "You lose. 🥺 Try again";
  } else if ((matchUser.innerHTML = matchComp.innerHTML)) {
    result.innerHTML = "It is a draw. 🤝<br>Try to win";
  }
  hier.style.display = "block";
}

function restarten() {
  console.log("test");
  location.reload();
}

newStart.innerHTML = `<p><a onclick="restarten()">restart</a></p>`;
