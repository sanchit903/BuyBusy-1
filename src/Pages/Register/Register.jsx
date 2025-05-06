import React, { useState } from 'react'
import styles from './Register.module.css'
import { showErrorToast } from '../../utils/toast';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showErrorToast('Please fill in all fields');
      return;
    }
    const user = {
      name,
      email,
      password
    }
    console.log(user);
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