function climbStairs(totalSteps) {
    let StepCount1 = 1;
    let StepCount2 = 0;
    for (let count = 0; count < totalSteps; count +=2) {
        StepCount2 += 1;
    }
     while ( StepCount1 < totalSteps ) {
        StepCount1++;
    }
    return StepCount1 + StepCount2;
}
    
console.log(climbStairs(5));