import React from 'react'
import styles from './Navbar.module.css'
import { NavLink, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
      <header>
          <nav className={styles.navbar}>
              <div className={styles.navbar_container}>
                  <NavLink to="/" className={styles.navbar_logo}>
                      Busy Buy
                  </NavLink>
                  <ul className={styles.navbar_menu}>
                    <li className={styles.nav_item}>
              <NavLink to="/" className={styles.nav_links}>
                <span>
                  <img className={styles.icon_styles} src="/public/home-icon.png" alt="home" />
                </span>
                            Home
                        </NavLink>
                      </li>
                      <li className={styles.nav_item}>
              <NavLink to="/signin" className={styles.nav_links}>
                <span>
                  <img className={styles.icon_styles} src="/public/sign-in.png" alt="signin" />
                </span>
                            Sign In
                        </NavLink>
                      </li>
                  </ul>
              </div>
      </nav>
      <Outlet />
    </header>
  )
}

export default Navbar