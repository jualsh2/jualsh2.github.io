const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-chip");
const projectCards = document.querySelectorAll(".project-card");
const metricNumbers = document.querySelectorAll(".metric-number");
const sections = document.querySelectorAll("main section[id]");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((chip) => chip.classList.remove("active"));
        button.classList.add("active");

        projectCards.forEach((card) => {
            const matches = filter === "all" || card.dataset.category === filter;
            card.classList.toggle("is-hidden", !matches);
        });
    });
});

const counterObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const element = entry.target;
            const target = Number(element.dataset.count) || 0;
            const duration = 1200;
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                element.textContent = Math.floor(progress * target).toString();

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    element.textContent = target.toString();
                }
            };

            requestAnimationFrame(updateCount);
            observer.unobserve(element);
        });
    },
    { threshold: 0.6 }
);

metricNumbers.forEach((metric) => counterObserver.observe(metric));

const setActiveLink = () => {
    let currentId = "";

    sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isActive);
    });
};

window.addEventListener("scroll", setActiveLink);
setActiveLink();

const supportsFinePointer = window.matchMedia("(pointer:fine)").matches;

if (supportsFinePointer) {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor.style.opacity = "1";
    });

    document.querySelectorAll("a, button, .project-card, .course-card").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            cursor.style.width = "42px";
            cursor.style.height = "42px";
            cursor.style.background = "rgba(255, 179, 71, 0.22)";
        });

        item.addEventListener("mouseleave", () => {
            cursor.style.width = "22px";
            cursor.style.height = "22px";
            cursor.style.background = "rgba(255, 255, 255, 0.08)";
        });
    });
}
