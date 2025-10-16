// Переключение темы 🌙☀️
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeToggle");
  const body = document.body;

  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const isDark = body.classList.contains("dark");
    themeBtn.textContent = isDark ? "🌙" : "☀️";
  });

  // Пример кнопки
  const btn = document.getElementById("clickMe");
  btn.addEventListener("click", () => {
    alert("Привет, Gosha! Твой сайт уже современный 😎");
  });
});
