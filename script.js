// PASSWORD
function unlock() {
  const pass = document.getElementById("passwordInput").value;
  if (pass.toLowerCase() === "ayushi") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    startConfetti();
  } else {
    alert("Wrong password 😜");
  }
}

// IMAGE SLIDER
let images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 2500);

// SECRET MESSAGE
function revealMessage() {
  document.getElementById("secretMessage").classList.remove("hidden");
}

// CONFETTI 🎆
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 5
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,77,109,0.8)";
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(animate);
}
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.muted = false;
  music.play();
}
