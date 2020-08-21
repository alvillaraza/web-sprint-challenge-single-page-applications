import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

import formSchema from "./validation/formSchema";
import Homepage from "./Homepage";
import OrderForm from "./OrderForm";
import Orders from "./Orders";

const initialFormValues = {
  name: "",
  size: "",
  // Checkboxes //
  toppings: {
    pineapple: false,
    sausage: false,
    pepperoni: false,
    cheese: false,
  },
  instructions: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  // Checkboxes //
  // toppings: {
  //   pineapple: false,
  //   sausage: false,
  //   pepperoni: false,
  //   cheese: false,
  // },
  instructions: "",
}
const initialPizza = [];
const initialDisabled = true;

const App = () => {
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
        console.log("err");
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
        console.log("err");
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    // 🔥 STEP 11- RUN VALIDATION WITH YUP
    yup
      .reach(formSchema, name)
      // we can then run validate using the value
      .validate(value)
      .then((valid) => {
        // happy path, we can clear the error message
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        // sad path, does not validate so we set the error message to the message
        // returned from yup (that we created in our schema)
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

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
    };
    postNewPizza(newPizza);
  };

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getPizza();
  }, []);

  useEffect(() => {
    // 🔥 STEP 11- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

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
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route exact path="/pizza">
          {" "}
          {pizza.map((piz) => {
            return <Orders key={piz.id} details={piz} />;
          })}
        </Route>
      </div>
    </>
  );
};
export default App;
