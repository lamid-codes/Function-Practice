function checkPerfectNumber(number){
	let total = 0;
	for(let count = 0; count =< number; count++){
		if (number % count === 0){
			total += counter;     
        	}
	}                     
	if (total === number){
        return "True";
	}  else{
        return "False";
   	}
}
console.log(checkPerfectNumber(13))
