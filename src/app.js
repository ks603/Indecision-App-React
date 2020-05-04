console.log('App is running')

let app = {
  title: 'Indecision App',
  subtitle: 'Title',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderNewPic()
  }
}
const reset = () => {
 app.options = []
 renderNewPic()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
  console.log(randomNum)
}

const renderNewPic = () => {
const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle}</p>
    <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'no options yet'}</p>
    <button disabled={!app.options.length} onClick={onMakeDecision}>What Should I do?</button>
    <button onClick={reset}>reset</button>
    <ol>
    {
      app.options.map((option) => {
        return <li key={option}>{option}</li>
      })
    }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type='text' name='option'/>
      <button>Add Option</button>
    </form>
  </div>
);
ReactDOM.render(template, appRoot)
}
const appRoot = document.getElementById('app');


renderNewPic()