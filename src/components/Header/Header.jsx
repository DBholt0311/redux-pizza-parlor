import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import styles from './Header.module.css';

function Header({ title }) {
  let totalCostReducer = useSelector((store) => store.totalCostReducer);
  const dispatch = useDispatch();

  return (
    <div className={styles.appTopper}>
      <h1 className="App-title">Prime Pizza</h1>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
      </ul>
      <div className={styles.totalCostHeader}>
        Total Cost: {totalCostReducer.totalCost}
      </div>{" "}
    </div>
  );
}

export default Header;
