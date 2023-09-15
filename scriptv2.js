const form = document.querySelector("form");
let toolTip = document.querySelector("#toolTip");
//bill and num of ppl input
const billInput = document.querySelector(".billAmtInput");
const pplInput = document.querySelector(".pplAmtInput");
//tip selections
const tips = document.querySelectorAll(".tipNum");
const customTipInput = document.querySelector("#customTip");
//button
const resetBtn = document.querySelector("#reset");

//tip amount and per person amount display
let totalTipAmnt = document.querySelector("#tipAmntPerPerson");
let totalBillAmnt = document.querySelector("#totalAmntPerPerson");

// calculate the amount:
//1. get the value of the bill input and value ppl input
//2. loop through to get the value of the clicked button
//3. get the value of the custom tip to calculate

function calcTip() {
	tips.forEach((tip) => {
		let billAmnt = parseFloat(billInput.value);
		let numofPpl = parseFloat(pplInput.value);
		if (isNaN(billAmnt) || isNaN(numofPpl) || billAmnt <= 0 || numofPpl <= 0) {
			handleErrors();
		} else {
			let tipAmnt = billAmnt * (tip.value / 100);
			let totalAmnt = billAmnt + tipAmnt;
			let perPersonAmnt = totalAmnt / numofPpl;

			totalTipAmnt.textContent = `$${tipAmnt.toFixed(2)}`;
			totalBillAmnt.textContent = `$${perPersonAmnt.toFixed(2)}`;
		}
	});
}

function calcCustomTip() {
	let billAmnt = parseFloat(billInput.value);
	let numofPpl = parseFloat(pplInput.value);
	let customTip = parseInt(customTipInput.value);
	if (isNaN(billAmnt) || isNaN(numofPpl) || billAmnt <= 0 || numofPpl <= 0) {
		handleErrors();
	}
	let tipAmnt = billAmnt * (customTip / 100);
	let totalAmnt = billAmnt + tipAmnt;
	let perPersonAmnt = totalAmnt / numofPpl;

	totalTipAmnt.textContent = `$${tipAmnt.toFixed(2)}`;
	totalBillAmnt.textContent = `$${perPersonAmnt.toFixed(2)}`;
}

function handleTipButtonClick() {
	// customTipInput.value = ""; // Reset custom tip input
	tips.forEach((tip) => {
		tip.classList.remove("selected");
	});
	this.classList.add("selected");
	calcTip();
}

function handleErrors() {
	toolTip.classList.add("invalid");
	billInput.classList.add("empty");
	pplInput.classList.add("empty");
	totalTipAmnt.textContent = "$0.00";
	totalBillAmnt.textContent = "$0.00";
}

customTipInput.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		calcCustomTip();
	}
});

tips.forEach((tip) => {
	tip.addEventListener("click", handleTipButtonClick);
});

// Reset form
resetBtn.addEventListener("click", () => {
	billInput.value = "";
	pplInput.value = "";
	customTip.value = "";
	totalTipAmnt.textContent = "$0.00";
	totalBillAmnt.textContent = "$0.00";
});
