let numeros = document.querySelector(".div_numeros");
let rateNumber = document.querySelector(".div_rateNumber");
let buttonSubmit = document.querySelector(".button");
let targetFirst = document.querySelector("#qw");
let targetThanks = document.querySelector("#thanks");

numeros.addEventListener("click", (event) => {
  let numberSelect = event.target.innerText;
  rateNumber.innerText = numberSelect;
  console.log(numberSelect);
  if (numberSelect >= 1 || numberSelect <= 5) {
    buttonSubmit.addEventListener("click", () => {
      targetFirst.style.display = "none";
      targetThanks.style.display = "block";
    });
  }
});
