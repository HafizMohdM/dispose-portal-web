import { z } from 'zod';

export const loginSchema = z.object({
    identifier: z.string().min(1, 'Email or Phone is required').refine((val) => {
        const isEmail = z.string().email().safeParse(val).success;
        const isPhone = /^\+?[1-9]\d{1,14}$/.test(val); // Basic regex for international phone
        return isEmail || isPhone;
    }, {
        message: 'Please enter a valid email address or phone number',
    }),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginInput = z.infer<typeof loginSchema>;


export const otpSchema = z.object({
    otp: z.string().length(6, 'OTP must be exactly 6 digits').regex(/^\d+$/, 'OTP must contain only numbers'),
});

export type OtpInput = z.infer<typeof otpSchema>;