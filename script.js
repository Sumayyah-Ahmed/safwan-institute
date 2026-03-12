const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");

let currentLang = "en";

// Language toggle
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";

  // Update text content for elements with data-en/data-ar
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  // Update placeholders for inputs, textareas, selects
  document.querySelectorAll("input, textarea, select").forEach(el => {
    const placeholder = el.getAttribute(`data-${currentLang}`);
    if (placeholder) el.setAttribute("placeholder", placeholder);
  });

  // Update custom labels (like date/time)
  document.querySelectorAll(".placeholder-label").forEach(label => {
    const text = label.getAttribute(`data-${currentLang}`);
    if (text) label.textContent = text;
  });

  // Update document language and direction
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  // Update toggle button label
  langToggle.textContent = currentLang === "en" ? "AR" : "EN";
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
