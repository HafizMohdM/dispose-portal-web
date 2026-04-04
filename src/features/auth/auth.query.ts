import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from './auth.api';
import { useAuthStore } from '../../core/auth/auth.store';
import type { LoginInput, OtpInput } from './auth.schema';
import { handleApiError } from '../../core/api/apiErrorHandler';

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (data: LoginInput) => authApi.login(data),
        onError: (error) => {
            const message = handleApiError(error);
            console.error(message);
        },
    });
};

export const useVerifyOtpMutation = () => {
    const setAuth = useAuthStore((state) => state.setAuth);
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: OtpInput & { sessionId: string }) => authApi.verifyOtp(data),
        onSuccess: (data) => {

            setAuth(data.user, data.token);

            navigate('/select-organization');
        },
        onError: (error) => {
            const message = handleApiError(error);
            console.error(message);
        },
    });
};


