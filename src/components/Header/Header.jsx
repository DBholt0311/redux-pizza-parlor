import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ title }) {

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
    </div>
  );
}

export default Header;
