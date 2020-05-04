let Visibility = false;

const toggleVisibility = () => {
  Visibility = !Visibility
  render()
}


const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {Visibility ? "hide details" : 'Show details'}
      </button>
      {Visibility && <p>here the details</p>}
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'))
}


render()