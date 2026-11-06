/* Shared across Home, Research and CV. Run in the head to avoid theme flashing. */
(function () {
  "use strict";
  const root = document.documentElement;
  const storageKey = "website-theme";
  let selected = "dark";

  try {
    if (localStorage.getItem(storageKey) === "light") selected = "light";
  } catch (_) {
    // Some browsers disable storage; switching still works for this page.
  }

  function applyTheme(theme) {
    const light = theme === "light";
    root.dataset.theme = light ? "light" : "dark";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", light ? "#fafafa" : "#0b0d10");
    document.querySelectorAll(".theme-toggle").forEach(function (button) {
      const label = light ? "Switch to dark mode" : "Switch to light mode";
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.setAttribute("aria-pressed", String(light));
    });
  }

  // Applied before CSS loads for a stable first paint.
  applyTheme(selected);

  document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    applyTheme(root.dataset.theme);
    document.querySelectorAll(".theme-toggle").forEach(function (button) {
      button.addEventListener("click", function () {
        const next = root.dataset.theme === "light" ? "dark" : "light";
        applyTheme(next);
        try { localStorage.setItem(storageKey, next); } catch (_) {}
      });
    });
  });
})();
