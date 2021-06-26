let problem = '';

const calc = () => {
      let res
      res = String(eval(problem))      
      if (res.includes('Infinity')) {res = 'Bad Expression'}
      if (res.includes('NaN')) {res = 'Bad Expression'}
      return res
  }

const calculate = () => document.querySelector('#res').value = calc()

const addToProblem = (str) => {
  problem += str;
  document.querySelector('#res').value = problem.replace('*', '×');
}

const reset = () => {
  problem = ''
  document.querySelector('#res').value = problem;
}

document.onkeyup = (e) => {
  switch (e.key) {
    case '1': // 1
      addToProblem('1')
      break
    case '2': // 2
      addToProblem('2')
      break
    case '3': // 3
      addToProblem('3')
      break
    case '4': // 4
      addToProblem('4')
      break
    case '5': // 5
      addToProblem('5')
      break
    case '6': // 6
      addToProblem('6')
      break
    case '7': // 7
      addToProblem('7')
      break
    case '8': // 8
      addToProblem('8')
      break
    case '9': // 9
      addToProblem('9')
      break
    case '0': // 0
      addToProblem('0')
      break
    case '/': // /
      addToProblem(' / ')
      break
    case '+': // +
      addToProblem(' + ')
      break
    case '-': // -
      addToProblem(' - ')
      break
    case '*': // *
      addToProblem(' × ')
      break
    case '=': // =
      problem = calculate()
      break
    case 'Enter': // Enter
      problem = calculate()
      break
    case 'c': // Clear
      reset()
      break
  }
}