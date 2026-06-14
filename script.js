const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (event) => {
  if (!glow) return;

  glow.style.opacity = "1";
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

reveals.forEach((element) => observer.observe(element));
