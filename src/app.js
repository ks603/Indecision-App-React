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

const renderNewPic = () => {
const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle}</p>
    <p>{app.options && app.options.length > 0 ? `options: ${app.options}` : 'no options yet'}</p>
    <p>{app.options.length}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type='text' name='option'/>
      <button>Add Option</button>
    </form>
    <button onClick={reset}>reset</button>
  </div>
);
ReactDOM.render(template, appRoot)
}
const appRoot = document.getElementById('app');


renderNewPic()