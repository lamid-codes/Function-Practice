function countPrime(upperLimit){
	let count = 0;
	for (let number = 1; number <= upperLimit; number++){
		for(let inNumber = 1; inNumber <= number; inNumber++){
			if(number % inNumber !== 0){
			count += 1
			}
		}
	}
	return count;
}
console.log(countPrime(15));