// Enable scroll animations
document.body.classList.add("js-enabled");

// Select elements for animation
const revealElements = document.querySelectorAll(`
    .listing-section-head,
    .listing-section-filter-bar,
    .home-types-head,
    .cities-section-head,
    .why-section-content,
    .how-section-head,
    .agents-section-head,
    .stories-section-head,
    .find-section-content,
    .find-section-form
`);

// Add reveal class
revealElements.forEach((element) => {
    element.classList.add("reveal");
});

// Slide animations
document.querySelector(".page-home-content")
    ?.classList.add("reveal-left");

document.querySelector(".page-home-image")
    ?.classList.add("reveal-right");

document.querySelector(".why-section-image")
    ?.classList.add("reveal-left");

// Select cards for stagger animation
const cardGroups = [
    ".listing-section-grid",
    ".home-types-grid",
    ".how-section-body",
    ".agents-section-grid",
    ".stories-section-body"
];

cardGroups.forEach((group) => {
    const container = document.querySelector(group);

    if (container) {
        const cards = container.children;

        Array.from(cards).forEach((card, index) => {
            card.classList.add("reveal-item");

            card.style.transitionDelay = `${index * 0.15}s`;
        });
    }
});

// Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

// Observe all animated elements
document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-item"
).forEach((element) => {
    observer.observe(element);
});
