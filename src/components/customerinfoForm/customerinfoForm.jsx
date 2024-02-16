import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from "@mui/material/FormGroup";

function CustomerInfo() {
  const dispatch = useDispatch();

  let [customerToAdd, setCustomerToAdd] = useState({
    name: "",
    address: "",
    city: "",
    zip: 0,
    type: "",
  });
  const handleNameChange = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      name: event.target.value,
    });
  };

  const handleAddressChange = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      address: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      city: event.target.value,
    });
  };
  const handleZipChange = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      zip: event.target.value,
    });
  };

  const handleTypeDelivery = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      type: "delivery",
    });
  };

  const handleTypePickup = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      type: "pickup",
    });
  };

  const addCustomer = () => {
    console.log(customerToAdd);
    dispatch({ type: "CUSTOMER_TO_ADD", payload: customerToAdd });
  };

  return (
    <div>
      <h1>Step 2 Customer Information</h1>
      <p>total</p>
      <FormGroup>
      <input onChange={handleNameChange} placeholder="Name" id="name" />
      <input
        onChange={handleAddressChange}
        placeholder="Street Address"
        id="address"
        />
      <input onChange={handleCityChange} placeholder="City" id="city" />
      <input onChange={handleZipChange} placeholder="Zip" id="zip" />
      <RadioGroup>
      <FormControlLabel value="female" control={<Radio onChange={handleTypeDelivery} />} label="Delivery" />
        <FormControlLabel value="male" control={<Radio onChange={handleTypePickup}/>} label="Pickup" />
      </RadioGroup>
      <Button type="submit" onClick={(event) => addCustomer(event)}>
        Next
      </Button>
      </FormGroup>
    </div>
  );
}
export default CustomerInfo;
