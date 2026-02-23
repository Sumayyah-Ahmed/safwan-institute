const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

let currentLang = "en";

langToggle.addEventListener("click", () => {
  const elements = document.querySelectorAll("[data-en]");
  currentLang = currentLang === "en" ? "ar" : "en";

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  langToggle.textContent = currentLang === "en" ? "AR" : "EN";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

bookingForm.addEventListener("submit", function(e){
  e.preventDefault();
  bookingMessage.innerText = 
    currentLang === "en"
    ? "✅ Your booking request has been submitted!"
    : "✅ تم إرسال طلب الحجز بنجاح!";
  bookingForm.reset();
});