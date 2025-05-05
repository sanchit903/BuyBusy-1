import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
      <header>
          <nav className={styles.navbar}>
              <div className={styles.navbar_container}>
                  <NavLink to="/" className={styles.navbar_logo}>
                      BuyBusy
                  </NavLink>
                  <ul className={styles.navbar_menu}>
                    <li className={styles.nav_item}>
                        <NavLink to="/" className={styles.nav_links}>
                            Home
                        </NavLink>
                      </li>
                      <li className={styles.nav_item}>
                        <NavLink to="/" className={styles.nav_links}>
                            About
                        </NavLink>
                      </li>
                  </ul>
              </div>
          </nav>
    </header>
  )
}

export default Navbar