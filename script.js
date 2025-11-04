const cardElements = {
	userName: document.querySelector(".username"),
	cardNumber: document.querySelector(".card-info"),
	cardDate: document.querySelector(".date"),
	cardCvc: document.querySelector(".cvc")
};

const inputs = {
	name: document.querySelector(".input-name"),
	date: document.querySelector(".input-date"),
	cardNumber: document.querySelector(".input-card-number"),
	cvc: document.querySelector(".input-cvc")
};

// Update card display when inputs change
inputs.name.addEventListener('input', () => cardElements.userName.innerHTML = inputs.name.value);
inputs.cardNumber.addEventListener('input', () => cardElements.cardNumber.innerHTML = inputs.cardNumber.value);
inputs.date.addEventListener('input', () => cardElements.cardDate.innerHTML = inputs.date.value);
inputs.cvc.addEventListener('input', () => cardElements.cardCvc.innerHTML = inputs.cvc.value);

