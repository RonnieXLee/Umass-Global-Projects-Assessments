import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

function AddFoodItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");
  const [itemType, setItemType] = useState("snacks");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newItem = {
      name,
      description,
      recipe,
      serve,
    };

    if (itemType === "snacks") {
      await SnackOrBoozeApi.addSnack(newItem);
    } else if (itemType === "drinks") {
      await SnackOrBoozeApi.addDrink(newItem);
    }

    history.push(`/${itemType}`);
  };

  return (
    <section>
      <h2>Add Food Item</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input
            type="textarea"
            name="recipe"
            id="recipe"
            placeholder="Enter recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="serve">Serve</Label>
          <Input
            type="text"
            name="serve"
            id="serve"
            placeholder="Enter serve"
            value={serve}
            onChange={(e) => setServe(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="itemType">Item Type</Label>
          <Input
            type="select"
            name="itemType"
            id="itemType"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
          >
            <option value="snacks">Snacks</option>
            <option value="drinks">Drinks</option>
          </Input>
        </FormGroup>
        <Button color="primary" type="submit">
          Add
        </Button>
      </Form>
    </section>
  );
}

export default AddFoodItem;
