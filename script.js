const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

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
    threshold: 0.14,
  }
);

reveals.forEach((element) => observer.observe(element));
