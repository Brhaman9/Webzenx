const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealItems.forEach((item) => observer.observe(item));

const heroVisual = document.querySelector(".visual-shell");

if (heroVisual && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    heroVisual.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0)`;
  });
}

const nextRedirect = document.querySelector("#nextRedirect");
const formUrl = document.querySelector("#formUrl");

if (nextRedirect) {
  nextRedirect.value = new URL("thanks.html", window.location.href).href;
}

if (formUrl) {
  formUrl.value = window.location.href;
}
