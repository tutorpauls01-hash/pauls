// Tutor Paul S — site interactions
// Progressive enhancement only: the page is fully usable without this file.

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const revealTargets = document.querySelectorAll(".section, .hero");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    // Skip animation entirely; just make sure everything is visible.
    revealTargets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
});
