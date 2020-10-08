import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test(" form renders without errors", () => {
  render(<ContactForm />);
})

test("all input fields are working", async () => {
  const { getByLabelText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/first name*/i);
  const message = getByLabelText(/message*/i);
  const lastNameInput = getByLabelText(/last name*/i);
  const emailInput = getByLabelText(/Email/i);
  expect(lastName).toBeTruthy();
  expect(firstName).toBeTruthy();
  expect(email).toBeTruthy();
  expect(message).toBeTruthy();
  fireEvent.change(firstNameInput,{target: {name:'firstName', value:'Joshua'}});
  fireEvent.change(lastNameInput,{target: {name:'lastName', value:'Martinez'}});
  fireEvent.change(emailInput,{target: {name:'email', value:'mrjoshuamartinez@gmail.com'}});
}) 

test("renders App without crashing", () => {
  render(<App />);
});