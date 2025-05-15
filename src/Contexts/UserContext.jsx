import { createContext, useContext, useState } from "react";

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

    const registerUser = (name, email, password) => {
        // We will move the registration logic here
        // For now, let's keep the console.log from the original component
        const newUser = {
            name,
            email,
            password
        };
        console.log("Registering user from context:", newUser);
        // In a real application, you would typically make an API call here
        // and then update the user state, e.g., setUser(newUser);
    };

    return (
        <UserContext.Provider value={{ user, setUser, registerUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { useValue };
export default CustomUserContext;