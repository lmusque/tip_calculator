const form = document.querySelector("form");
const toolTip = document.querySelector("#toolTip");
//bill and num of ppl input
const billInput = document.querySelector(".billAmtInput");
const pplInput = document.querySelector(".pplAmtInput");

//tip selections
const fivePer = document.querySelector("#five");
const tenPer = document.querySelector("#ten");
const fifteenPer = document.querySelector("#fifteen");
const twentyfivePer = document.querySelector("#twentyfive");
const fiftyPer = document.querySelector("#fifty");

const tips = document.querySelectorAll(".tipNum");

const customTipInput = document.querySelector("#customTip");
//buttons
const calcBtn = document.querySelector("#calculate");
const resetBtn = document.querySelector("#reset");

//tip amount and per person amount display
let totalTipAmnt = document.querySelector("#tipAmntPerPerson");
let totalBillAmnt = document.querySelector("#totalAmntPerPerson");

//bill amount & ppl number values
// let billAmnt = parseInt(billInput.value);
// let numofPpl = parseInt(pplInput.value);
// let customTip = parseInt(customTipInput.value);

// calculate the amount:
//1. get the valye of the bill input and value ppl input
//2. loop through to get the value of the clicked button
//3. get the value of the custom tip to calculate

function calcTip() {
	tips.forEach((tip) => {
		let billAmnt = parseFloat(billInput.value);
		let numofPpl = parseFloat(pplInput.value);
		// if (billAmnt = '' || isNaN(numofPpl) || billAmnt == 0 || numofPpl == 0) {
		if ((billAmnt = "" || isNaN(numofPpl) || billAmnt == 0 || numofPpl == 0)) {
			billAmnt.classList.add("empty");
			numofPpl.classList.add("empty");
			toolTip.classList.add("invalid");
			totalTipAmnt.textContent = "$right on!";
			totalBillAmnt.textContent = "$ok!";
			// totalTipAmnt.textContent = "$0.00";
			// totalBillAmnt.textContent = "$0.00";
		} else {
			let tipAmnt = billAmnt * (tip.value / 100);
			let totalAmnt = billAmnt + tipAmnt;
			let perPersonAmnt = totalAmnt / numofPpl;

			totalTipAmnt.textContent = `$${tipAmnt.toFixed(2)}`;
			totalBillAmnt.textContent = `$${perPersonAmnt.toFixed(2)}`;
		}
	});
}

// TODO:
function calcCustomTip() {
	let billAmnt = parseFloat(billInput.value);
	let numofPpl = parseFloat(pplInput.value);
	let customTip = parseInt(customTipInput.value);
	if (
		billAmnt === "" ||
		billAmnt === NaN ||
		numofPpl === "" ||
		numofPpl === NaN ||
		billAmnt === 0 ||
		numofPpl === 0
	) {
		toolTip.classList.add("invalid");
		billAmnt.classList.add("empty");
		numofPpl.classList.add("empty");
		totalTipAmnt.textContent = "$0.00";
		totalBillAmnt.textContent = "$0.00";
	}
	let tipAmnt = billAmnt * (customTip / 100);
	let totalAmnt = billAmnt + tipAmnt;
	let perPersonAmnt = totalAmnt / numofPpl;

	totalTipAmnt.textContent = `$${tipAmnt.toFixed(2)}`;
	totalBillAmnt.textContent = `$${perPersonAmnt.toFixed(2)}`;
}

customTipInput.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		calcCustomTip();
	}
});
function handleTipButtonClick() {
	// customTipInput.value = ""; // Reset custom tip input
	tips.forEach((tip) => {
		tip.classList.remove("selected");
	});
	this.classList.add("selected");
	calcTip();
}

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
