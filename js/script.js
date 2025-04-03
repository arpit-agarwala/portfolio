// Hover spotlight effect on name
const glowText = document.querySelector(".glow-text");
const hoverZone = document.querySelector(".hover-zone");

if (glowText && hoverZone) {
  glowText.setAttribute("data-text", glowText.textContent);

  hoverZone.addEventListener("mouseenter", () => {
    glowText.classList.add("active-glow");
  });

  hoverZone.addEventListener("mousemove", (e) => {
    const rect = hoverZone.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowText.style.setProperty("--x", `${x}%`);
    glowText.style.setProperty("--y", `${y}%`);
  });

  hoverZone.addEventListener("mouseleave", () => {
    glowText.classList.remove("active-glow");
    glowText.style.removeProperty("--x");
    glowText.style.removeProperty("--y");
  });
}

// Close menu when a menu link is clicked
document.querySelectorAll('.menu-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    const overlay = document.getElementById('menuOverlay');
    const toggle = document.getElementById('navToggle');
    overlay.classList.remove('active');
    toggle.classList.remove('active');
  });
});


// IST Clock
function updateISTClock() {
  const clock = document.getElementById("ist-clock");
  if (!clock) return;

  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (5.5 * 60 * 60 * 1000));

  const hours = String(istTime.getHours()).padStart(2, '0');
  const minutes = String(istTime.getMinutes()).padStart(2, '0');
  const seconds = String(istTime.getSeconds()).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateISTClock, 1000);
updateISTClock();

// Toggle hamburger menu
function toggleMenu() {
  const overlay = document.getElementById('menuOverlay');
  const toggle = document.getElementById('navToggle');
  overlay.classList.toggle('active');
  toggle.classList.toggle('active');
}


const cursor = document.getElementById("customCursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});
