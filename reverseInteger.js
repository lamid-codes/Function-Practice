function reversedInteger(number){
	let count = 0
	let reversed = 0;
	let sumOfDigits = 0;
	while(number > 0){
		let extractedDigits  = number % 0;
		reversed = (reversed * 10) + extractedDigits;
		sumOfDigits = sumOfDigits + extractedDigits;
		number = Math.floor(number / 10);
	}
	return number;
}
console.log(reversedInteger(234))