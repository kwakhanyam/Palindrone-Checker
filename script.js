function checkPalindrome() {
	var input = document.getElementById("input").value;
	input = input.replace(/\W/g, '').toLowerCase();
	var len = input.length;
	for (var i = 0; i < len/2; i++) {
		if (input[i] !== input[len - 1 - i]) {
			document.getElementById("result").innerHTML = "Not a palindrome.";
			return false;
		}
	}
	document.getElementById("result").innerHTML = "Palindrome!";
	return true;
}