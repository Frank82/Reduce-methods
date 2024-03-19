const actors = [
  {name: 'johnny', netWorth: 2000000},
  {name: 'amber', netWorth: 10},
  {name: 'leo', netWorth: 1200000000},
  {name: 'brad', netWorth: 300000000},
  {name: 'matt', netWorth: 120000000},
]

console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))
// console.log(lol.filter(num => num > 4 || num < 2))
// let result = actors.filter(actor => actor.netWorth > 10)
// console.log(result)
// let names = result.map(actor => actor.name).join(', ')

// playground.innerHTML = `<h1>JS Starter</h1>`

// Reduce
// Sum all of the net worths
// Sum: Think reduce
// Reduce takes in a function as an argument
// Reduce loops and gives you back an accumulator

const beep = [1, 2, 3]
const result = beep.reduce(function(prev, curr) {
  return prev + curr
})

console.log(result)