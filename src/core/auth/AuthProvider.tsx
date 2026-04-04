import React, { createContext, useEffect } from 'react';
import { useAuthStore } from './auth.store';

export const AuthContext = createContext(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { logout } = useAuthStore();

    useEffect(() => {
        // This is where you'd call a /me or /profile endpoint 
        // to check if the user is still logged in on refresh.
        // For now, we'll just initialize the loading state.
        const initAuth = async () => {
            try {
                // Future: Fetch user profile logic here
            } catch (error) {
                logout();
            }
        };

        initAuth();
    }, [logout]);

    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    );
};