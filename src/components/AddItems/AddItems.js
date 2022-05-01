import React from "react";
import { Button, Form } from "react-bootstrap";

const AddItems = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const productName = event.target.pdName.value;
    const description = event.target.description.value;
    const supplierName = event.target.supplierName.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const image = event.target.image.value;

    console.log(productName, description, supplierName, price, image);
    fetch("http://localhost:5000/item", {
      method: "POST",
      body: JSON.stringify({
        productName,
        description,
        supplierName,
        quantity,
        price,
        image,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        event.target.reset();
      });
  };
  return (
    <Form
      onSubmit={handleAddItem}
      className="px-3 py-3 mt-5 container shadow-lg rounded-3"
      width={"350px"}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="pdName" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          maxLength="200"
          type="text"
          name="description"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Supplier Name</Form.Label>
        <Form.Control name="supplierName" type="text" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control name="quantity" type="number" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" type="number" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control name="image" type="text" required />
      </Form.Group>

      <Button className="w-100 mx-auto px-auto" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddItems;