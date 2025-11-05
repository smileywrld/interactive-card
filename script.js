const submitBtn = document.querySelector(".submit");

const cardElements = {
	userName: document.querySelector(".username"),
	cardNumber: document.querySelector(".card-info"),
	cardDate: document.querySelector(".date"),
	cardCvc: document.querySelector(".cvc"),
};

const inputs = {
	name: document.querySelector(".input-name"),
	date: document.querySelector(".input-date"),
	cardNumber: document.querySelector(".input-card-number"),
	cvc: document.querySelector(".input-cvc"),
};

// Update card display when inputs change
inputs.name.addEventListener("input", (e) => {
	cardElements.userName.textContent = e.target.value || "JANE APPLESEED";
});

inputs.cardNumber.addEventListener("input", (e) => {
	cardElements.cardNumber.textContent =
		e.target.value || "0000 0000 0000 0000";
});

inputs.date.addEventListener("input", (e) => {
	cardElements.cardDate.textContent = e.target.value || "00/00";
});

inputs.cvc.addEventListener("input", (e) => {
	cardElements.cardCvc.textContent = e.target.value || "000";
});

function confirmDetails(e) {
	e.preventDefault();
	cardElements.cardNumber = inputs.cardNumber;
}

submitBtn.addEventListener("click", confirmDetails);
