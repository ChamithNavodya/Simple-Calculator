let value = "";

function test(input) {
	let inputValue = input.innerText;
	console.log(inputValue);

	switch (inputValue) {
		case "=":
			try {
				document.getElementById("display").innerText = eval(
					document.getElementById("display").innerText
				);
			} catch (e) {
				document.getElementById("display").innerText = "Error!";
				value = "";
			}
			break;
		case "C":
			value = "";
			document.getElementById("display").innerText = value;
			break;
		default:
			value += inputValue;
			document.getElementById("display").innerText = value;
			break;
	}
}
