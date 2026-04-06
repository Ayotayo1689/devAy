// Dark Mode Theme Toggle
(function () {
  "use strict";

  const DARK_MODE_KEY = "devAy-dark-mode";
  const themeCheckbox = document.getElementById("theme-checkbox");
  const html = document.documentElement;

  // Initialize theme on page load
  function initializeTheme() {
    const savedTheme = localStorage.getItem(DARK_MODE_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // Use saved preference, or fallback to system preference
    const isDarkMode = savedTheme ? savedTheme === "true" : prefersDark;

    setTheme(isDarkMode);
  }

  // Set theme
  function setTheme(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      if (themeCheckbox) themeCheckbox.checked = true;
    } else {
      document.body.classList.remove("dark-mode");
      if (themeCheckbox) themeCheckbox.checked = false;
    }
    localStorage.setItem(DARK_MODE_KEY, isDarkMode);
  }

  // Toggle theme
  function toggleTheme() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    setTheme(!isDarkMode);
  }

  // Event listener for theme toggle
  if (themeCheckbox) {
    themeCheckbox.addEventListener("change", toggleTheme);
  }

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      // Only apply if user hasn't set a preference
      if (!localStorage.getItem(DARK_MODE_KEY)) {
        setTheme(e.matches);
      }
    });

  // Initialize on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTheme);
  } else {
    initializeTheme();
  }
})();
