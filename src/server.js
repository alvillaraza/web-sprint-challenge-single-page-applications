const express = require("express");
const uuid = require("uuid").v4;
const cors = require("cors");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const pizzas = [
  {
    id: uuid(),
    name: "Michael",
    size: "14 inches",

    toppings: [pineapple, sausage, pepperoni, cheese],
    instructions: "none",
  },
];

app.get("/pizzas/:id", (req, res) => {
  const pizza = pizzas.find((pi) => pi.id === req.params.id);
  if (!pizza) {
    res.status(404).json({ message: "No such pizza!" });
  } else {
    res.json(pizza);
  }
});

app.get("/pizzas", (req, res) => {
  res.json(pizzas);
});

app.post("/pizzas", (req, res) => {
  const { name, size, toppings, instructions } = req.body;
  const requiredFields = { name, size, toppings };

  if (Object.values(requiredFields).some((field) => !field || !field.trim())) {
    res
      .status(400)
      .json({ message: "Some required fields are missing or invalid." });
  } else {
    const newPizza = { id: uuid(), ...req.body };
    pizzas.push(newPizza);
    res.status(200).json(newPizza);
  }
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
