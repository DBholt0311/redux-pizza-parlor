import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <header className="App-header">
      <h1 className="App-title">{title}</h1>
      <div>
            <Link to="/Home">Home</Link>
            <Link to="/customerInfo">CustomerInfo</Link>
      </div>
    </header>
  );
}

export default Header;
