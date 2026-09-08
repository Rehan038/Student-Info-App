document.addEventListener("DOMContentLoaded", () => {
  console.log("Student information loaded.");

  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const printBtn = document.getElementById("print-btn");
  const lastUpdated = document.getElementById("last-updated");
  const attendanceFill = document.getElementById("attendance-fill");
  const attendancePercent = document.getElementById("attendance-percent");

  // ---- Dark mode toggle (remembers choice using localStorage) ----
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") === "dark";
    if (isDark) {
      body.removeAttribute("data-theme");
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  });

  // ---- Print the ID card ----
  printBtn.addEventListener("click", () => {
    window.print();
  });

  // ---- Show last viewed date/time ----
  const now = new Date();
  lastUpdated.textContent = now.toLocaleString();

  // ---- Animate the attendance progress bar on load ----
  const targetPercent = parseInt(attendancePercent.textContent, 10) || 0;
  requestAnimationFrame(() => {
    attendanceFill.style.width = `${targetPercent}%`;
  });
});
