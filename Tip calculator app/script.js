const elBill = document.querySelector("#bill");
const elBillError = document.querySelector("#bill-error");

const elTipPercents = document.querySelectorAll(
  "input[type=radio][name=tip-percent]"
);
const elCustomPercent = document.querySelector("#custom-percent");
const elTipPercentError = document.querySelector("#tip-percent-error");

const elPeople = document.querySelector("#people");
const elPeopleError = document.querySelector("#people-error");

const elTipAmount = document.querySelector("#tip-amount");
const elTotal = document.querySelector("#total");

const elReset = document.querySelector("#reset");

let bill = null;
let percent = null;
let people = null;

elBill.addEventListener("input", (event) => {
  elBillError.style.display = "none";

  event.target.setCustomValidity("");

  let currentBill = null;

  if (isDecimal(event.target.value)) {
    currentBill = event.target.value;
  } else {
    const errorMsg = "Input isn't valid";

    elBillError.textContent = errorMsg;
    elBillError.style.display = "unset";

    event.target.setCustomValidity(errorMsg);
  }

  bill = currentBill;

  calculate(bill, percent, people);
});

elTipPercents.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    elTipPercentError.style.display = "none";

    elCustomPercent.value = "";
    elCustomPercent.setCustomValidity("");

    let currentTipPercent = null;

    if (isInteger(event.target.value)) {
      currentTipPercent = event.target.value;
    } else {
      elTipPercentError.textContent = "Input isn't valid";
      elTipPercentError.style.display = "unset";
    }

    percent = currentTipPercent;

    calculate(bill, percent, people);
  });
});

elCustomPercent.addEventListener("input", (event) => {
  elTipPercentError.style.display = "none";

  event.target.setCustomValidity("");

  elTipPercents.forEach((radio) => {
    radio.checked = false;
  });

  let currentTipPercent = null;

  if (isInteger(event.target.value)) {
    currentTipPercent = event.target.value;
  } else {
    const errorMsg = "Input isn't valid";

    elTipPercentError.textContent = errorMsg;
    elTipPercentError.style.display = "unset";

    event.target.setCustomValidity(errorMsg);
  }

  percent = currentTipPercent;

  calculate(bill, percent, people);
});

elPeople.addEventListener("input", (event) => {
  elPeopleError.style.display = "none";

  event.target.setCustomValidity("");

  let currentPeople = null;

  if (isInteger(event.target.value)) {
    currentPeople = event.target.value;
  } else {
    const errorMsg = "Input isn't valid";

    elPeopleError.textContent = errorMsg;
    elPeopleError.style.display = "unset";

    event.target.setCustomValidity(errorMsg);
  }

  people = currentPeople;

  calculate(bill, percent, people);
});

elReset.addEventListener("click", (event) => {
  elBill.value = "";

  elTipPercents.forEach((radio) => {
    radio.checked = false;
  });

  elCustomPercent.value = "";

  elPeople.value = "";

  calculate(null, null, null);
});

function calculate(bill, percent, people) {
  if (bill == null || percent == null || people == null) {
    elTipAmount.textContent = "$0.00";
    elTotal.textContent = "$0.00";
  } else {
    let currentBill = Number.parseFloat(bill);
    let currentPercent = Number.parseFloat(percent);
    let currentPeople = Number.parseFloat(people);

    let total = (currentBill * ((100 + currentPercent) / 100)) / currentPeople;
    let tipAmount = (currentBill * (currentPercent / 100)) / currentPeople;

    total = Math.round(total * 100) / 100;
    tipAmount = Math.round(tipAmount * 100) / 100;
    elTipAmount.textContent = "$" + tipAmount;
    elTotal.textContent = "$" + total;
  }
}

function isDecimal(str) {
  return /^-?\d+(\.\d+)?$/.test(str);
}

function isInteger(str) {
  return /^-?\d+$/.test(str);
}
