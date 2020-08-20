import React, {useState} from "react";
import { Route } from 'react-router-dom';
import Homepage from "./Homepage";
import OrderForm from "./OrderForm";

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    pineapple: false,
    sausage: false,
    pepperoni: false,
    cheese: false,
  },
  instructions:'',
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)

  const inputChange = (name, value) => {
    // 🔥 STEP 11- RUN VALIDATION WITH YUP
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const checkboxChange = (name, isChecked) => {
    // 🔥 STEP 7- IMPLEMENT!
    //  set a new state for the whole form
  }

  const submit = () => {
    const newFriend = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: formValues.toppings.trim(),
      instructions: formValues.instructions.trim(),
      // 🔥 STEP 8- WHAT ABOUT HOBBIES?
    }
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <div>
        <Route exact path="/"><Homepage/></Route>
        <Route exact path="/pizza"><OrderForm/></Route>
      </div>
    </>
  );
};
export default App;
