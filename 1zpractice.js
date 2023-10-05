function employeeRatingFinder(N,workloadOfNdays){

    let consecutiveWorkingDays = 0;
    let maxConsecutiveWorkingDays = 0;

    for(let i=0;i<N;i++){

        if(workloadOfNdays[i]>6){
            consecutiveWorkingDays++;
        }
        else{
            consecutiveWorkingDays = 0;
        }
        
        maxConsecutiveWorkingDays = Math.max(maxConsecutiveWorkingDays,consecutiveWorkingDays);

    }

    return maxConsecutiveWorkingDays;
}

//Testing
const N = 12;
const workloadOfNdays =[4,3,5,6,6,7,5,7,9,7,8,10];
let rating = employeeRatingFinder(N,workloadOfNdays);
console.log("Employee rating of Ram is :",rating);