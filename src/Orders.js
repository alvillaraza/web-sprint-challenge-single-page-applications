  
import React from 'react'

function Orders({ details }) {
  if (!details) {
    return <h3>Working fetching your order details...</h3>
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>size: {details.size}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
      <p>Special Instructions: {details.instructions}</p>
    </div>
  )
}
export default Orders;