// // tip selections
// // 1. get each custom tip number by their ids
// const fiveDiv = document.querySelector("#five");
// const tenDiv = document.querySelector("#ten");
// const fifteenDiv = document.querySelector("#fifteen");
// const twentyfiveDiv = document.querySelector("#twentyfive");
// const fiftyDiv = document.querySelector("#fifty");
// //2.get the dataset num
// const fiveDataset = fiveDiv.dataset.number;
// const tenDataset = tenDiv.dataset.number;
// const fifteenDataset = fifteenDiv.dataset.number;
// const twentyfiveDataset = twentyfiveDiv.dataset.number;
// const fiftyDataset = fiftyDiv.dataset.number;

// //FINAL PERCENTS!!!//
// //3. parse int it for the final variable
// const fivePercent = parseInt(fiveDataset, 0.05);
// const tenPercent = parseInt(tenDataset, 0.1);
// const fifteenPercent = parseInt(fifteenDataset, 0.15);
// const twentyfivePercent = parseInt(twentyfiveDataset, 0.25);
// const fiftyPercent = parseInt(fiftyDataset, 0.5);
// const customTip = document.querySelector("#customTip");

// const form = document.querySelector("form");
// const resetBtn = document.querySelector("button");
// const finalTipAmnt = document.querySelector("#tipAmntPerPerson");
// const finalTotalAmnt = document.querySelector("totalAmntPerPerson");

// // inputs for calculator: bill and people amount
// const billInput = document.querySelector(".billAmtInput");
// const numofPpl = document.querySelector(".pplAmtInput");

// Get elements
const fiveDiv = document.querySelector("#five");
const tenDiv = document.querySelector("#ten");
const fifteenDiv = document.querySelector("#fifteen");
const twentyfiveDiv = document.querySelector("#twentyfive");
const fiftyDiv = document.querySelector("#fifty");
const customTip = document.querySelector("#customTip");
const form = document.querySelector("form");
const resetBtn = document.querySelector("button");
const finalTipAmnt = document.querySelector("#tipAmntPerPerson");
const finalTotalAmnt = document.querySelector("#totalAmntPerPerson");

const billInput = document.querySelector(".billAmtInput");
const numofPpl = document.querySelector(".pplAmtInput");

// Define tip percentages
const tipPercentages = {
	five: 5,
	ten: 10,
	fifteen: 15,
	twentyfive: 25,
	fifty: 50,
};

// Event listener for custom tip input
customTip.addEventListener("input", () => {
	calculateTip();
});

// Event listeners for preset tip percentages
fiveDiv.addEventListener("click", () => {
	customTip.value = tipPercentages.five;
	calculateTip();
});

tenDiv.addEventListener("click", () => {
	customTip.value = tipPercentages.ten;
	calculateTip();
});

fifteenDiv.addEventListener("click", () => {
	customTip.value = tipPercentages.fifteen;
	calculateTip();
});

// Calculate tip and total amounts
function calculateTip() {
	const billAmount = parseFloat(billInput.value);
	const tipPercentage = parseFloat(customTip.value);
	const numberOfPeople = parseFloat(numofPpl.value);

	if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
		// Invalid input
		finalTipAmnt.textContent = "$0.00";
		finalTotalAmnt.textContent = "$0.00";
	} else {
		// Calculate tip and total per person
		const tipAmount = billAmount * (tipPercentage / 100);
		const totalAmount = billAmount + tipAmount;
		const perPersonAmount = totalAmount / numberOfPeople;

		finalTipAmnt.textContent = `$${tipAmount.toFixed(2)}`;
		finalTotalAmnt.textContent = `$${perPersonAmount.toFixed(2)}`;
	}
}

const calculateBtn = document.querySelector("#calculate");

calculateBtn.addEventListener("click", (event) => {
	event.preventDefault(); // Prevents the form from submitting
	calculateTip();
});
