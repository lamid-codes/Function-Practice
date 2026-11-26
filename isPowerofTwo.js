function isPowerofTwo(number){
	if (number % 2 !== 0){
		return "False";
	} else {
		while(number > 0){
			if (number % 2 === 0){
				number = number / 2;
				return "True";
			}
		}
	}
	return number;
	
}
console.log(isPowerofTwo(5));
