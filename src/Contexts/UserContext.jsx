import { updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { showSuccessToast, showErrorToast, showToast } from "../utils/toast";

const UserContext = createContext();

function useValue() {
    const value = useContext(UserContext);
    if (!value) {
        throw new Error('useValue must be used within a UserProvider');
    }
    return value;
}

function CustomUserContext({ children }) {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoggedIn(!!user);
        });
        return () => unsubscribe();
    }, [auth]);

    const registerUser = async (name, email, password) => {
        // In a real application, you would typically make an API call here
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Optionally update user profile with name
            await updateProfile(user, {
                displayName: name
            });
            showSuccessToast("User registered successfully");
            setUser(user);
            setLoggedIn(true);
        } catch (error) {
            console.error("Error registering user:", error);
            showErrorToast('Error registering user');
        }
    };

    const loginUser = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setUser(user);
            setLoggedIn(true);
            showSuccessToast(`Welcome back ${user.displayName}`);
        } catch (error) {
            console.error("Error logging in:", error);
            showErrorToast('Error logging in');
        }
    };

    const logoutUser = async () => {
        try {
            await signOut(auth);
            showToast(`See you soon ${user.displayName}`);
            setUser(null);
            setLoggedIn(false);
        } catch (error) {
            console.error("Error logging out:", error);
            showErrorToast('Error logging out');
        }
    };

    return (
        <UserContext.Provider value={{ user, loggedIn, setUser, registerUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, useValue };
export default CustomUserContext;