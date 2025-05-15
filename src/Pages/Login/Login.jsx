import React, { useState } from 'react'
import styles from './Login.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { showSuccessToast, showErrorToast } from '../../utils/toast';
import { useValue } from '../../Contexts/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { loginUser } = useValue();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example validation
        if (!email || !password) {
            showErrorToast('Please fill in all fields');
            return;
        }
        loginUser(email, password);
        navigate('/');
    };

    return (
        <div className={styles.Login_formContainer} >
            <div className={styles.Login_form}>
                <h3 className={styles.Login_Title}>Sign In</h3>
                <form className={styles.Login_formElements} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        className={styles.Login_loginInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={styles.Login_loginInput}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={styles.Login_loginBtn}>Sign In</button>
                </form>
                <NavLink className={styles.Login_registerLink} to="/signup">
                    <p>Don't have an account? Sign Up</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Login;