document.addEventListener("click", (event) => {
  const toggler = event.target.closest("[data-mobile-nav-toggle]");
  if (!toggler) {
    return;
  }

  const targetSelector = toggler.getAttribute("data-bs-target");
  const target = targetSelector ? document.querySelector(targetSelector) : null;
  if (!target) {
    return;
  }

  const isOpen = target.classList.toggle("show");
  toggler.setAttribute("aria-expanded", String(isOpen));
});

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

for (const id of ["home-checkin", "reserva-checkin"]) {
  const input = document.getElementById(id);
  if (input) input.min = formatLocalDate(today);
}

for (const id of ["home-checkout", "reserva-checkout"]) {
  const input = document.getElementById(id);
  if (input) input.min = formatLocalDate(tomorrow);
}
