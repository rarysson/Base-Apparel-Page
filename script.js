const input = document.querySelector("input");
const submit = document.querySelector("button");

input.addEventListener("change", () => {
	if (!input.checkValidity()) {
		input.classList.add("input-error");
	} else {
		input.classList.remove("input-error");
	}
})