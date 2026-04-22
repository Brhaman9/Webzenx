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
const isLocalFilePreview = window.location.protocol === "file:";

if (isLocalFilePreview) {
  const routeMap = {
    "/": "index.html",
    "/services": "services.html",
    "/work": "work.html",
    "/why-us": "why-us.html",
    "/testimonials": "testimonials.html",
    "/contact": "contact.html",
    "/thanks": "thanks.html",
  };

  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    const href = link.getAttribute("href");

    if (href && routeMap[href]) {
      link.setAttribute("href", routeMap[href]);
    }
  });
}

if (nextRedirect) {
  nextRedirect.value = isLocalFilePreview
    ? new URL("thanks.html", window.location.href).href
    : new URL("/thanks", window.location.origin).href;
}

if (formUrl) {
  formUrl.value = window.location.href;
}
