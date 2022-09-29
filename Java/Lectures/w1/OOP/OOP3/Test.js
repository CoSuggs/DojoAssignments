function getStreakGoal(numWeeks) {
    let sum = 0;
    for (let i = 0; i <= numWeeks; i++) {
        // console.log("Current sum: "+ sum+ " current i: "+ i)
        sum += i;
        // console.log("New sum: "+ sum)
    }
    return sum;
}

console.log(getStreakGoal(10))