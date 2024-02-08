import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
function CustomerInfo() {
  const dispatch = useDispatch();
  
  let [customerToAdd, setCustomerToAdd] = useState({ name: '', address: '', city: '', zip: 0,})
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

  const addCustomer = () => {
    console.log(customerToAdd);
    dispatch({ type: "CUSTOMER_TO_ADD", payload: customerToAdd});
  };


  return (
    <div>
      <h1>Step 2 Customer Information</h1>
      <p>total</p>
      <form onSubmit={(event) => addCustomer(event)}>
        <input onChange={handleNameChange} placeholder="Name" id="name" />
        <input
          onChange={handleAddressChange}
          placeholder="Street Address"
          id="address"
        />
        <input onChange={handleCityChange} placeholder="City" id="city" />
        <input onChange={handleZipChange} placeholder="Zip" id="zip" />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
export default CustomerInfo;
