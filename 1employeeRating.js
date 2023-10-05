function calculateEmployeeRating(N, workload) {
    let maxConsecutiveWorkingDays = 0;
    let consecutiveWorkingDays = 0;

    for (let i = 0; i < N; i++) {
        if (workload[i] > 6) {
            consecutiveWorkingDays++;
        } else {
            consecutiveWorkingDays = 0;
        }

        maxConsecutiveWorkingDays = Math.max(maxConsecutiveWorkingDays, consecutiveWorkingDays);
    }

    return maxConsecutiveWorkingDays;
}

// Example usage:
const N = 12;
const workload = [2, 3, 7, 8, 7, 6, 3, 8, 12, 11, 12, 10];
const rating = calculateEmployeeRating(N, workload);
console.log("Employee Rating:", rating); // Output: Employee Rating: 5

