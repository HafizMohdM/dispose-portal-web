import httpClient from '../../core/api/httpClient';
import type { LoginInput, OtpInput } from './auth.schema';
import type { User } from '../../core/types/auth.types';

export interface AuthResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}

export const authApi = {
    // Logic: Send identifier (email or phone) to trigger the login flow
    login: async (data: LoginInput): Promise<{ sessionId: string; method: 'email' | 'phone' }> => {
        const response = await httpClient.post('/auth/login', data);
        return response.data;
    },

    verifyOtp: async (data: OtpInput & { sessionId: string }): Promise<any> => {
        const response = await httpClient.post('/auth/verify-otp', data);
        return response.data;
    },
};