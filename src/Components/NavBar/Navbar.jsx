import React from 'react'
import styles from './Navbar.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import { useValue } from '../../Contexts/UserContext';

const Navbar = () => {
  const { loggedIn, logoutUser } = useValue();
  return (
    <>
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
              {loggedIn && (
                <>
                  <li className={styles.nav_item}>
                    <NavLink to="/" className={styles.nav_links}>
                      <span>
                        <img className={styles.icon_styles} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2YPUsjQRjHx8NvIAdnY2WjsM9j8K1TLjFeNCCm8WWFHTERtE1xxcl6cM1B5ODwA/gNFFsrG2vBmf0Aop2NRRaVKK7MYq443GRf4u2TY37wLxaW4f/jmd1ZljGNRqN5i8XtrztfrK0nlYXN6g7rJiy7VipYW895s+KpzJqV5/xapcS6pTy3a42Cte2X/5PVcoO8hPVaft3e81aq371Zc7N7JLi9V+R27UGVb2a5uvuYN8sN8hL8jfJqEmoiMysbxRmz/EBWgrco37yHrAQPUZ6sBI9QnpwEj1GejARPUD51Cd6B8u8q4X6enK/nxq/d3IRHMXXVLTs2FyhAubzblMhOXAVPgEBBN0T+X4F612+h7NicuoFyeTc3XmDtkIg/JKJHKQJgl4VFIJbICSAWQws4o6MDYRa1+/r8dOpatogzPPwptIC/jQBuCAlcRyrvbyOAEzICAMeRBSTiTyoCAsCOPgHEJSoCF4YR/P0ThJPJDFIRcKI+wAqPsR4JcJu2gEAMPnnbIQBO0xaQAEexBSTir9QFEOP/VxWIa2kLOACF+BPIZIbSFjgfGfkYW8Bj7INArAct/ru/30+nruXfDzDAJUuKADhrs0ffLQLxMLGARNxPS0AaxrfkAgDLaQlcGMZUYoHT6eleCXAgEO//WXmAO/UKV4dpYgGNRqPRsBa8AHqucwJBwaHkAAAAAElFTkSuQmCC" alt="home" />
                      </span>
                      My Orders
                    </NavLink>
                  </li>
                  <li className={styles.nav_item}>
                    <NavLink to="/" className={styles.nav_links}>
                      <span>
                        <img className={styles.icon_styles} src="data:image/png;base64,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" alt="home" />
                      </span>
                      Cart
                    </NavLink>
                  </li>
                </>
              )}
              {loggedIn ? (
                <li className={styles.nav_item} onClick={logoutUser}>
                  <NavLink to="/" className={styles.nav_links}>
                    <span>
                      <img className={styles.icon_styles} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAAIWCAYAAAALR8TTAAAACXBIWXMAAC4jAAAuIwF4pT92AAATFklEQVR4nO3dzY9d513A8Wfex3FjHEuQpCixk5oKJwQnFaILkBqJBSAWpUKIHSQSCxZIILGALioZqQhWlD2qEtblH2DXSogWFnmhpW6htWxHgQyB1PXreOa+oDuZMePxzNxzz/3dc895ns9HuvIiiXLvc0f21+d37/ktDIfDBAAQYdEpAgBRhAUAEEZYAABhhAU07Mr1jXPOHMiVsIAGXLm+8ZtXrm+8eeX6xo2U0mvOHMjVsncWZmMUEymlvcdPOGagBMICAokJoHTCAqZ05frGy7vjjVFMnHWeQMmEBdQgJgAOJyygIjEBMJ6wgGPsfjV0FBJ/LCYAxhMWcMC+mBhdnbjofACqExYgJgDCCAuKdeX6xul9Yw4xARBAWFCUfTExenzeuw8QS1iQPTEB0BxhQbauXN94TUwANEtYkBW31AaYL2FB54kJgPYQFnSSmABoJ2FBZ7ilNkD7CQtaTUwAdIuwoHXEBEB3CQtawbIvgDwIC+bGfg6A/AgLGiUmAPImLJg5y74AyiEsmAn7OQDKJCwIIyYAEBZMzbIvAPYIC2pxS20ADiMsqExMADCOsOBYYgKASQgLHuGW2gDUJSzYISYAiCAsCiYmAIgmLApj2RcAsyQsCmA/BwBNERaZEhMAzIOwyIhlXwDMm7DoOPs5AGgTYdFBYgKAthIWHWLZFwBtJyxazi21AegSYdFCYgKArhIWLSEmAMiBsJgjt9QGIDfComFiAoCcCYsGiAkASiEsZsSyLwBKJCwC2c8BQOmExZTEBAD8P2FRg2VfAHA4YVGR/RwAMJ6wOIaYAIDJCItDWPYFAPUIi11uqQ0A0ys6LMQEAMRaGA6HxR7plesb5b545uaDH3zn2hM/+o6bpvGQC7/1RwtOhBwsehcBgCjCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIIywAgDDCAgAIs+wooVnv3xxevfTGO2cdezv9+itPpV97+anSjwFqc8UCAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLACAMMICAAgjLADY8d7rl9557/VLp50G0xAWAOy5mFL6urhgGsICgP3EBVMRFgAcJC6oTVgAcBhxQS3CAoCjiAsmJiwAOI64YCLCAoBxxAWVCQsAqhAXVCIsAKhKXDCWsABgEuKCYwkLACYlLjiSsACgDnHBoYQFAHWJCx4hLACYhrjgIcICgGmJCx4QFgBEEBfsEBYARBEXCAsAQomLwgkLAKKJi4IJCwBmQVwUSlgAMCviokDCAoBZEheFERYAzJq4KIiwAKAJ4qIQwgKApoiLAggLAJokLjInLABomrjImLAAYB7ERaaEBQDzIi4yJCwAmCdxkRlhAcC8iYuMCAsA2kBcZEJYANAW4iIDwgKANhEXHScsAGgbcdFhwgKANhIXHSUsAGgrcdFBwgKANhMXHSMsAGg7cdEhwgKALhAXHbFc+gFA057Y7p/+/Em/N7bV+ZvLafXf7zX+7N57/dKlrpzRHO3FxavPvHHpRrGn0HILw+Gw2Bd/5fpGuS+eufmff3r72tP/8K2z3gGo7d2UkrhoKaMQALrGWKTFhAUAXSQuWkpYANBV4qKFhAUAXSYuWkZYANB14qJFhAUAORAXLSEsAMiFuGgBYQFATsTFnAkLAHIjLuZIWACQI3ExJ8ICgFyJizkQFgDkTFw0TFgA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" alt="signout" />
                    </span>
                    Sign Out
                  </NavLink>
                </li>
              ) : (
                <li className={styles.nav_item}>
                  <NavLink to="/signin" className={styles.nav_links}>
                    <span>
                      <img className={styles.icon_styles} src="/public/sign-in.png" alt="signin" />
                    </span>
                    Sign In
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Navbar