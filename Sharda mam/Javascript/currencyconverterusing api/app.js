const BASE_URL =
  "https://v6.exchangerate-api.com/v6/0bad806173f25a6f4245b55a/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = parseFloat(amount.value);
  if (isNaN(amtVal) || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  try {
    const response = await fetch(`${BASE_URL}/${fromCurr.value}`);
    if (!response.ok) throw new Error("Failed to fetch exchange rates");
    const data = await response.json();
    const rate = data.conversion_rates[toCurr.value];

    if (rate) {
      let finalAmount = (amtVal * rate).toFixed(2);
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } else {
      msg.innerText = "Exchange rate not available.";
    }
  } catch (error) {
    msg.innerText = `Error: ${error.message}`;
  }
};


const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  if (countryCode) {
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    if (img) img.src = newSrc;
  }
};


btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
