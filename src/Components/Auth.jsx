import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const auth = getAuth();

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up successfully");
        } catch (error) {
            setError(error.message);
        }
    }

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
        } catch (error) {
            setError(error.message);
        }
    }
    
    return (
        <div>
            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Signup</button>
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Auth;