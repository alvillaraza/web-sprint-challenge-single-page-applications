import React from "react";
import { Route } from 'react-router-dom';
import Homepage from "./Homepage";
import OrderForm from "./OrderForm";

const App = () => {
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
