import React from 'react';
import { useHistory } from 'react-router-dom';

function Checkout() {
  const history = useHistory();
  const handleCompleteOrder = () => {
    history.push('/');
  };

  return (
    <div className="Checkout">
      <header className="Checkout-header">
        <h1 className="Checkout-title">Prime Pizza</h1>
      </header>
      <h2>Step 3: Checkout</h2>

      <button onClick={handleCompleteOrder}>Checkout</button>
    </div>
  );
}

export default Checkout;
