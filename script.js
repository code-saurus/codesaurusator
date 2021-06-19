let problem = '';

const calc = () => {
      let res = String(eval(problem))
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