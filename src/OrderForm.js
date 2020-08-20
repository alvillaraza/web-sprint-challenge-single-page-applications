import React from "react";

const OrderForm = () => {
  return (
    <>
      <form>
        <h1>Order your Pizza Today!</h1>
        <div>
          <label>
            {/* value={values.name}
              onChange={onChange} */}
            <input name="name" placeholder="type name" type="text" />
          </label>

          {/* ////////// DROPDOWN ////////// */}
          {/* ////////// DROPDOWN ////////// */}
          {/* ////////// DROPDOWN ////////// */}
          <label>
            Pizza size
            <select name="pizza size">
              <option value="">Select a size</option>
              <option value="14 inch">14"</option>
              <option value="16 inch">16"</option>
            </select>
          </label>

          {/* ////////// CHECKBOXES ////////// */}
          {/* ////////// CHECKBOXES ////////// */}
          {/* ////////// CHECKBOXES ////////// */}
          <h2>Toppings</h2>
          <label>Pineapple</label>

          <label>Sausage</label>

          <label>Pepperoni</label>
          <label>Cheese</label>

          <label>
            {/* value={values.name}
              onChange={onChange} */}
            <input name="instructions" placeholder="Special Instructions" type="text" />
          </label>

          {/* 

 Text input for special instructions
 An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions */}
        </div>
      </form>
    </>
  );
};
export default OrderForm;
