import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

function Header({ title }) {
  let totalCostReducer = useSelector((store) => store.totalCostReducer);

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
      </div>{' '}
      {/* Accessing the totalCostReducer defined in above variable line 9 and accessing totalCost property */}
    </div>
  );
}

export default Header;
