import React, {useState} from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState({
    petName: "",
    petType: ""
  });

  function inputChange(event) {
    const {value, name} = event.target;
    setFormValues({...formValues, [name]: value})
  }

  function addToPetsList(event) {
    event.preventDefault();
    const {petName, petType} = formValues;
    setPets(pets.concat({
      petName: petName,
      petType: petType
    }));
    setFormValues({
      petName: "",
      petType: ""
    });
  }

  return <div className="container">
    <h1>Simple Form App</h1>
    {pets.map((pet, idx) => {
      return(
        <div key={idx}>
          {pet.petName} is a {pet.petType}
        </div>
      )
    })}
    <br/>
    <form onSubmit={addToPetsList}>
      <label>Pet Name:</label>
      <input type="text" name="petName" value={formValues.petName} onChange={inputChange}/>
      <label>Pet Type:</label>
      <input type="text" name="petType" value={formValues.petType} onChange={inputChange}/>
      <br/>
      <input type="submit" value="Add Pet" />
    </form>
  </div>
}

render(
  <>
    {/*<SimpleForm />*/}
     <App /> 
  </>
  , document.querySelector('#root')
)
