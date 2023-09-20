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

function calcTip(isCustomTip) {
	let billAmnt = parseFloat(billInput.value);
	let numofPpl = parseFloat(pplInput.value);
	if (isNaN(billAmnt) || isNaN(numofPpl) || billAmnt <= 0 || numofPpl <= 0) {
		handleErrors();
	} else {
		//checking if there is a custom tip: if there is, then custom tip wil be calculated
		//if not, the regular selected tip (this) will be calculated
		let tipPercentage = isCustomTip ? parseInt(customTipInput.value) : parseFloat(this.value);
		let tipAmnt = billAmnt * (tipPercentage / 100);
		let totalAmnt = billAmnt + tipAmnt;
		let perPersonAmnt = totalAmnt / numofPpl;
		totalTipAmnt.textContent = `$${tipAmnt.toFixed(2)}`;
		totalBillAmnt.textContent = `$${perPersonAmnt.toFixed(2)}`;
	}
}

function handleErrors() {
	toolTip.classList.add("invalid");
	billInput.classList.add("empty");
	pplInput.classList.add("empty");
	totalTipAmnt.textContent = "$0.00";
	totalBillAmnt.textContent = "$0.00";
}

//calling the function to handle the regular tip button (this)
//'false' signifies isCustomTip is false
function handleTipButtonClick() {
	tips.forEach((tip) => {
		calcTip.call(this, false);
	});
}

//event listeners
customTipInput.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		calcTip(true);
	}
});

pplInput.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		calcTip(true);
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
	toolTip.classList.remove("invalid");
	billInput.classList.remove("empty");
	pplInput.classList.remove("empty");
	totalTipAmnt.textContent = "$0.00";
	totalBillAmnt.textContent = "$0.00";
});
