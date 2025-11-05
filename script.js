const submitBtn = document.querySelector(".submit");

const cardElements = {
	userName: document.querySelector(".username"),
	cardNumber: document.querySelector(".card-info"),
	cardDate: document.querySelector(".date"),
	cardCvc: document.querySelector(".cvc"),
};

const inputs = {
	name: document.querySelector(".input-name").value,
	date: document.querySelector(".input-date").value,
	cardNumber: document.querySelector(".input-card-number").value,
	cvc: document.querySelector(".input-cvc").value,
};

// Update card display when inputs change
inputs.name.addEventListener(
	"input",
	() => (cardElements.userName.innerHTML = inputs.name.value)
);
inputs.cardNumber.addEventListener(
	"input",
	() => (cardElements.cardNumber.innerHTML = inputs.cardNumber.value)
);
inputs.date.addEventListener(
	"input",
	() => (cardElements.cardDate.innerHTML = inputs.date.value)
);
inputs.cvc.addEventListener(
	"input",
	() => (cardElements.cardCvc.innerHTML = inputs.cvc.value)
);

console.log(inputs.cardNumber);
function confirmDetails(e) {
    e.preventDefault(); // Prevent form submission
    // Add your form validation logic here
}

submitBtn.addEventListener("click", confirmDetails);
