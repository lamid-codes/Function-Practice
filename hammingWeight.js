function hammingWeight(number){
	let value = String(number).length;
	let binary = 0;
	for(count = 0; count < value; count++){
		let placeholder = number % 10;
		binary = binary + placeholder * 2 ** count;	
		number = Math.floor(number / 10);
	}
	return binary
}
console.log(hammingWeight(111))