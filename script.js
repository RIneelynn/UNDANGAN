// OPENING GATE
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");

openBtn.addEventListener("click", () => {
  opening.classList.add("hide");
  playMusic();
});

// FADE ON SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// MUSIC FADE IN
const music = new Audio("assets/music/music.mp3");
music.loop = true;
music.volume = 0;

function playMusic() {
  music.play();
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.7) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);
}