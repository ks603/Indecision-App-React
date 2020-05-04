console.log('App is running')

const app = {
  title: 'Indecision App',
  subtitle: 'subtitl',
  options: ['one', 'two', 'three']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle}</p>
    <p>{app.options && app.options.length > 0 ? `options: ${app.options}` : 'no options'}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);


const user = {
  name: 'Andrew',
  age: 19,
  location: 'boston'
};


function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
} 

// function userAge(age) {
//   if (age >= 18) {
//     return age
//   } 
// }



const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age >= 19 && user.age}</p>
    {getLocation(user.location)}
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)