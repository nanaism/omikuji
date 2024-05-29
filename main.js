"use strict";

{
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    btn.disabled = true;
    result.style.opacity = 0;

    setTimeout(() => {
      const n = Math.floor(Math.random() * 5);
      const results = ["大吉", "中吉", "吉", "凶", "大凶"];
      result.textContent = results[n];

      result.style.opacity = 1;
      result.classList.add("fade-in");

      setTimeout(() => {
        result.classList.remove("fade-in");
        btn.disabled = false;
      }, 1000);
    }, 500);
  });
}
