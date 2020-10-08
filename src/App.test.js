import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe('App', () => {
  it('Mounts to a simulated DOM', () => {
    // render the component
    const simulatedDOM = render(<App />);
    // query the simulated DOM for labels containing 'Name*'
    console.log(simulatedDOM);
  });
  it('User can fill out form properly.', () => {
    // Render the component
    render(<App />);
    // Query the virtual DOM for each input field, so we can work with them
    const firstName = screen.getByText(/First Name/i);
    const lastName = screen.getByText(/Last Name/i);
    const email = screen.getByText(/Email/i);
    const message = screen.getByText(/Message/i);
    // Fill out user form
    fireEvent.change(firstName, {target: {value: "Joshua"}});
    fireEvent.change(lastName, {target: {value: "Martinez"}});
    fireEvent.change(email, {target: {value: "mrjoshuamartinez@gmail.com"}});
    fireEvent.change(message, {target: {value: "Hello World"}});
    // Sanity check: assert that the form inputs contain the values we typed in
    expect(firstName).toHaveValue("Joshua");
    expect(lastName).toHaveValue("Martinez");
    expect(email).toHaveValue("mrjoshuamartinez@gmail.com");
    expect(message).toHaveValue("Hellow World");
  });
});