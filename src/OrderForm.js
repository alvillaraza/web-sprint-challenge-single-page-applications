import React from "react";

const OrderForm = () => {
  const onCheckBox = (evt) => {
    const { name, checked } = evt.target;
    // dataCheckBox(name, checked);
  };
  return (
    <>
      <form>
        <h1>Order your Pizza Today!</h1>
        <div>
          <label>
            Name:
            {/* value={values.name}
              onChange={onChange} */}
            <input name="name" placeholder="type name" type="text" />
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
              // checked={data.tos}
              onChange={onCheckBox}
            />
            <label>Pineapple</label>
          </p>
          <p>
            <input
              type="checkbox"
              name="sausage"
              // checked={data.tos}
              onChange={onCheckBox}
            />
            <label>Sausage</label>
          </p>
          <p>
            <input
              type="checkbox"
              name="pepperoni"
              // checked={data.tos}
              onChange={onCheckBox}
            />
            <label>Pepperoni</label>
          </p>
          <p>
            <input
              type="checkbox"
              name="cheese"
              // checked={data.tos}
              onChange={onCheckBox}
            />
            <label>Cheese</label>
          </p>

          <p>
            <label>
              Special Instructions:
              {/* value={values.name}
              onChange={onChange} */}
              <input
                name="instructions"
                placeholder="Special Instructions"
                type="text"
              />
            </label>
          </p>
          <button>Submit Order</button>

          {/* 


 An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions */}
        </div>
      </form>
    </>
  );
};
export default OrderForm;
