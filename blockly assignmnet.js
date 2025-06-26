const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    toggleBtn.textContent = isDark ? "🌙" : "☀️";
});

// Optional: Button click visual effect
document.querySelectorAll(".btn-custom").forEach(button => {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "#0f172a";
        button.style.color = "#fff";
    });
});