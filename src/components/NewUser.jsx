import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const NewUser = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (evt) => {
    setFirstName(evt.target.value);
  };
  const handleLastNameChange = (evt) => {
    setLastName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>{" "}
        <Input
          required
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>{" "}
        <Input
          required
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUser;
