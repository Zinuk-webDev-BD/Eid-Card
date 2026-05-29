// Name Customization

const nameInput = document.getElementById("nameInput");
const greetingText = document.getElementById("greetingText");

nameInput.addEventListener("keyup", () => {

  let name = nameInput.value;

  if(name === ""){
    greetingText.innerHTML =
    "Eid Mubarak, Friend ✨";
  }
  else{
    greetingText.innerHTML =
    `Eid Mubarak, ${name} ✨`;
  }

});


// Upload Photo

const uploadPhoto =
document.getElementById("uploadPhoto");

const profilePic =
document.getElementById("profilePic");

uploadPhoto.addEventListener("change", (e)=>{

  const file = e.target.files[0];

  if(file){

    const reader = new FileReader();

    reader.onload = function(event){

      profilePic.src = event.target.result;

    }

    reader.readAsDataURL(file);

  }

});


// Music Player Toggle

const music =
document.getElementById("eidMusic");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", ()=>{

  if(!playing){

    music.play();
    musicBtn.innerHTML =
    "⏸ Pause Music";

    playing = true;

  }else{

    music.pause();

    musicBtn.innerHTML =
    "🎵 Play Music";

    playing = false;

  }

});


// Countdown Timer

const countdown =
document.getElementById("countdown");

const eidDate =
new Date("March 21, 2027 00:00:00").getTime();

setInterval(()=>{

  const now = new Date().getTime();

  const distance = eidDate - now;

  const days =
  Math.floor(distance / (1000*60*60*24));

  const hours =
  Math.floor((distance % (1000*60*60*24))
  /(1000*60*60));

  const minutes =
  Math.floor((distance % (1000*60*60))
  /(1000*60));

  const seconds =
  Math.floor((distance % (1000*60))
  /1000);

  countdown.innerHTML =
  `${days}d ${hours}h ${minutes}m ${seconds}s`;

},1000);


// Download Card as Image

const downloadBtn =
document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", ()=>{

  html2canvas(document.querySelector("#card"))
  .then(canvas=>{

    const link =
    document.createElement("a");

    link.download = "eid-card.png";

    link.href =
    canvas.toDataURL();

    link.click();

  });

});


// Dark / Light Mode Toggle

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    themeBtn.innerHTML = "☀";
  }else{
    themeBtn.innerHTML = "🌙";
  }

});


// 3D Card Mouse Effect

const card =
document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

  let x =
  (window.innerWidth / 2 - e.pageX) / 25;

  let y =
  (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform =
  `rotateY(${x}deg) rotateX(${-y}deg)`;

});


// Islamic Particle Background Animation

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0; i<80; i++){

  particles.push({

    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    radius:Math.random()*3,
    dx:(Math.random()-0.5),
    dy:(Math.random()-0.5)

  });

}

function animate(){

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particles.forEach((p)=>{

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.radius,
      0,
      Math.PI*2
    );

    ctx.fillStyle =
    "rgba(255,255,255,0.7)";

    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if(p.x < 0 || p.x > canvas.width){
      p.dx *= -1;
    }

    if(p.y < 0 || p.y > canvas.height){
      p.dy *= -1;
    }

  });

  requestAnimationFrame(animate);

}

animate();