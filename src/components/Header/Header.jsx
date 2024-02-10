import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <div>
      <h1 className="App-title">Prime Pizza</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/customerInfo">Customer Info</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
