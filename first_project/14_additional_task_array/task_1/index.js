const goals = [8, 1, 1, 3, 2, -1, 5];
const sortGoals = goals.sort((a, b) => {
    return a - b;
});

console.log(goals)
console.log(sortGoals[sortGoals.length - 1])
console.log(goals.findIndex())
alert(`Самый результативный матч был под номером ${goals.find(sortGoals[sortGoals.length - 1])}`)