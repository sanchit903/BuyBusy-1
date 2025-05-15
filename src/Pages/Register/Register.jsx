import React, { useState } from 'react'
import styles from './Register.module.css'
import { showErrorToast } from '../../utils/toast';
import { useValue } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useValue();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showErrorToast('Please fill in all fields');
      return;
    }
    if (password.length < 6) {
      showErrorToast('Password must be at least 6 characters long');
      console.log(password);
      return;
    }
    // Updated regex to properly validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(!emailRegex.test(email));
    if (!emailRegex.test(email)) {
      showErrorToast('Please enter a valid email address (e.g. example@domain.com)');
      console.log(email);
      return;
    }
    registerUser(name, email, password);
    navigate('/');
  }

  return (
    <div className={styles.Register_formContainer}>
      <div className={styles.Register_form}>
        <h3 className={styles.Register_Title}>Sign Up</h3>
        <form className={styles.Register_formElements} onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" className={styles.Register_formInput} value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Enter Email" className={styles.Register_formInput} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Enter Password" className={styles.Register_formInput} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className={styles.Register_loginBtn}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Register;