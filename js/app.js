let balance = document.querySelector(".balance");
let inputUser = document.querySelector(".user");
let inputUsd = document.querySelector(".usd");
let transferBtn = document.querySelector(".transfer-btn");
let body = document.querySelector(".body");
let close = document.querySelector(".close");
let succsesfulyPage = document.querySelector(".sucssesfuly-wrapper");
let userName = document.querySelector(".ussername");
let money = document.querySelector(".money");
let balanceCount = 47630820;
let count = 0;

transferBtn.addEventListener("click", () => {
  let numberValue = 0;
  numberValue = inputUsd.value;
  if (
    balanceCount < numberValue ||
    inputUsd.value === "" ||
    inputUser.value === ""
  ) {
  } else {
    count = balanceCount - parseInt(numberValue);
    balanceCount = balanceCount - parseInt(numberValue);
    balance.innerHTML = `R$ ${count.toLocaleString()} `;
    console.log(count);
    body.classList.add("body-color");
    succsesfulyPage.classList.remove("hidden");
    userName.innerHTML = `${inputUser.value},`;
    money.innerHTML = `R$ ${inputUsd.value} `;
  }
});

close.addEventListener("click", () => {
  body.classList.remove("body-color");
  succsesfulyPage.classList.add("hidden");
});
