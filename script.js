"use strict";
let bmi = 0;
let height = 0;
let weight = 0;
document.querySelector(".calculate").addEventListener("click", function () {
  height = Number(document.querySelector(".heightClass").value);
  weight = Number(document.querySelector(".weightClass").value);
  bmi = Number((weight / (height * height)) * 10 ** 4);
  document.querySelector(".result").textContent = "Your BMI is: " + bmi;
  if (bmi <= 18.5) {
    document.querySelector(".yourBMI").textContent = "You are underweight";
    document.querySelector("yourBMI").classList.add("colorYellow");
  } else if (bmi > 18.5 && bmi <= 24.9) {
    document.querySelector(".yourBMI").textContent = "You got a healthy Weight";
    document.querySelector("yourBMI").classList.add("colorGreen");
  } else if (bmi > 24.9) {
    document.querySelector(".yourBMI").textContent = "You are overweight";
    document.querySelector("yourBMI").classList.add("colorRed");
  }
});
document.querySelector(".testagain").addEventListener("click", function () {
  document.querySelector(".heightClass").value = 0;
  document.querySelector(".weightClass").value = 0;
  document.querySelector(".result").textContent = "";
  document.querySelector(".yourBMI").textContent = "";
});
