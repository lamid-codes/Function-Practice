function isHappy(number){
	let number = String(number)
	let sum = 0;
	let square = 0;
	let sum = 0;
	for (digit of number){
		digit = Number(digit);
		square = digit * digit;
		sum = sum + square;
	}
	if (sum === 1){
		return true;
	} else {
		number += sum;
	}
		return false;
}	
console.log(isHappy(2))
