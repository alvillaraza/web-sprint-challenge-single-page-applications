import React, { useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./Homepage";
import OrderForm from "./OrderForm";

const initialFormValues = {
  name: "",
  size: "",
  toppings: {
    pineapple: false,
    sausage: false,
    pepperoni: false,
    cheese: false,
  },
  instructions: "",
};
const initialPizza = [];

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizza, setPizza] = useState(initialPizza);

  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  const getPizza = () => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
    //    helper to [GET] all friends from `http://localhost:4000/friends`
    axios
      .get("http://localhost:4000/pizza")
      .then((res) => {
        setPizza(res.data);
      })
      .catch((err) => {
        debugger;
      });
  };

  const postNewPizza = (newPizza) => {
    // 🔥 STEP 7- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://localhost:4000/friends`
    //    and regardless of success or failure, the form should reset
    axios
      .post("http://localhost:4000/pizza", newPizza)
      .then((res) => {
        setPizza([res.data, ...pizza]);
        // getFriends() // the price of triggering a new 'getFriends`
      })
      .catch((err) => {
        debugger;
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const onInputChange = (name, value) => {
    // 🔥 STEP 11- RUN VALIDATION WITH YUP
    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const onCheckboxChange = (evt) => {
    // 🔥 STEP 8- IMPLEMENT!
    // a) pull the `name` of the checkbox from the event
    const { name } = evt.target;
    // b) pull whether `checked` true or false, from the event
    const { checked } = evt.target;

    // c) set a new state for the whole form
    setFormValues({
      // copy formvalues
      ...formValues,
      // override one thing inside formvalues
      toppings: {
        // copy the current hobbies
        ...formValues.toppings,
        // override one of the hobbies
        [name]: checked, // NOT AN ARRAY
      },
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: Object.keys(formValues.toppings).filter(
        (topping) => formValues.toppings[topping] === true
      ),

      instructions: formValues.instructions.trim(),
      // 🔥 STEP 8- WHAT ABOUT HOBBIES?
    };
    postNewPizza(newPizza);
  };
  return (
    <>
      <h1>Lambda Eats</h1>

      <div>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/pizza">
          <OrderForm
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            onCheckboxChange={onCheckboxChange}
          />
        </Route>
      </div>
    </>
  );
};
export default App;
