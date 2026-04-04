import { useAuthStore } from "./auth.store";

export const useAuth = () => {
    const { user, isAuthenticated, isLoading, setAuth, logout } = useAuthStore();
    return { user, isAuthenticated, isLoading, setAuth, logout };
};