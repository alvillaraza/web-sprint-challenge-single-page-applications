import React from "react";

const OrderForm = (props) => {
  const {
    values,
    onInputChange,
    onSubmit,
    onCheckboxChange,
    disabled,
    errors,
  } = props;

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Order your Pizza Today!</h1>
        <div>
          <label>
            Name:
            <input
              value={values.name}
              onChange={onInputChange}
              name="name"
              placeholder="type name"
              type="text"
            />
          </label>

          {/* ////////// DROPDOWN ////////// */}
          {/* ////////// DROPDOWN ////////// */}
          {/* ////////// DROPDOWN ////////// */}
          <p>
            <label>
              Pizza size
              <select name="pizza size">
                <option value="">Select a size</option>
                <option value="14 inch">14"</option>
                <option value="16 inch">16"</option>
              </select>
            </label>
          </p>

          {/* ////////// CHECKBOXES ////////// */}
          {/* ////////// CHECKBOXES ////////// */}
          {/* ////////// CHECKBOXES ////////// */}
          <h2>Toppings</h2>
          <p>
            <input
              type="checkbox"
              name="pineapple"
              checked={values.toppings.pineapple}
              onChange={onCheckboxChange}
            />
            <label>Pineapple</label>
          </p>
          <p>
            <input
              type="checkbox"
              name="sausage"
              checked={values.toppings.sausage}
              onChange={onCheckboxChange}
            />
            <label>Sausage</label>
          </p>
          <p>
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.toppings.pepperoni}
              onChange={onCheckboxChange}
            />
            <label>Pepperoni</label>
          </p>
          <p>
            <input
              type="checkbox"
              name="cheese"
              checked={values.toppings.cheese}
              onChange={onCheckboxChange}
            />
            <label>Cheese</label>
          </p>

          <p>
            <label>
              Special Instructions:
              <input
                value={values.instructions}
                onChange={onInputChange}
                name="instructions"
                placeholder="Special Instructions"
                type="text"
              />
            </label>
          </p>
          <div className="errors">
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
            <div>{errors.name}</div>
           
          </div>
          <button disabled={disabled}>Submit Order</button>
        </div>
      </form>
    </>
  );
};
export default OrderForm;
