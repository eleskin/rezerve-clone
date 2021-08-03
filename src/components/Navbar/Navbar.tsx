import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import status_icon from '../../assets/images/status-icon.png';
import swap_icon from '../../assets/images/swap-icon.png';
import arrow_icon from '../../assets/images/arrow-icon.svg';

import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.Navbar}>
      <Link to="/" className={styles.Navbar__logo}>
        <img src={logo} alt=""/>
        <span>REZERVE</span>
      </Link>

      <ul className={styles.Navbar__menu}>
        <li className={location.pathname === '/' ? styles.Navbar__item_active : styles.Navbar__item}>
          <Link to="/">
            <div>
              <div className={styles.Navbar__icon}>
                <img src={status_icon} alt=""/>
              </div>
              <span>Vault Status</span>
            </div>
            <img src={arrow_icon} alt=""/>
          </Link>
        </li>
        <li className={location.pathname === '/swap' ? styles.Navbar__item_active : styles.Navbar__item}>
          <Link to="/swap">
            <div>
              <div className={styles.Navbar__icon}>
                <img src={swap_icon} alt=""/>
              </div>
              <span>Swap - RZRV x DAI</span>
            </div>
            <img src={arrow_icon} alt=""/>
          </Link>
        </li>
        {/*<li>*/}
        {/*  <Link to="#">*/}
        {/*    <div className={styles.Navbar__icon}></div>*/}
        {/*    <span>Staking</span>*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;