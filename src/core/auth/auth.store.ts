import { create } from "zustand";
import type { AuthState, User } from '../types/auth.types';
import { tokenManager } from '../api/tokenManager';



export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    setAuth: (user: User, token: string) => {
        tokenManager.setToken(token);
        set({ user, isAuthenticated: true, isLoading: false });
    },
    logout: () => {
        tokenManager.clearToken();
        set({ user: null, isAuthenticated: false, isLoading: false });
    },
}));