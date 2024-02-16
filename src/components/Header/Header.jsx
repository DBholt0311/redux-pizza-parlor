import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header({ title }) {
  let totalCostReducer = useSelector((store) => store.totalCostReducer);

  return (
    <div>
      <h1 className="App-title">Prime Pizza</h1>
      <div className="totalCostHeader">
        Total Cost: {totalCostReducer.totalCost}
      </div>{' '}
      {/* Accessing the totalCostReducer defined in above variable line 9 and accessing totalCost property */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/customerInfo">Customer Info</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
