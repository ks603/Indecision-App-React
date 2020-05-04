
let count = 0
const someId = 'myidhere'
const addOne = () => {
  console.log('add one')
  count++
  renderCounterApp()
}
const minusOne = () => {
  console.log('minus one')
  count--
  renderCounterApp()
}
const reset = () => {
  count = 0
  renderCounterApp()
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
    )
    
    ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()

