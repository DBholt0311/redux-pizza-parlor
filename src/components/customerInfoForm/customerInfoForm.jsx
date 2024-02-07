import React, { useState } from "react";
import { useDispatch } from "react-redux";

function CustomerInfo() {
  const [inputName, setInputName] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputZip, setInputZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchEvent({
      type: "CUSTOMER_INFO_ADD",
      payload: {
        name: inputName,
        address: inputAddress,
        city: inputCity,
        zip: inputZip,
      },
    });

    setInputName("");
    setInputAddress("");
    setInputCity("");
    setInputZip("");
  };

  return (
    <div>
      <h1>Step 2 Customer Information</h1>
      <p>total</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" id="name" value={inputName} />
        <input placeholder="Street Address" id="address" value={inputAddress} />
        <input placeholder="City" id="city" value={inputCity} />
        <input placeholder="Zip" id="zip" value={inputZip} />
        <button>Delivery</button>
        <button>Pick-Up</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default CustomerInfo;
