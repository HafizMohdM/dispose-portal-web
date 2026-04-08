import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';

import { otpSchema, type OtpInput } from '../auth.schema';
import { useVerifyOtpMutation } from '../auth.query';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

export const VerifyOtpPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { mutate, isPending } = useVerifyOtpMutation();

    /**
     * Production Security: 
     * Retrieve sessionId passed via React Router state from LoginPage.
     */
    const sessionId = location.state?.sessionId;

    /**
     * Guard Clause: 
     * If a user navigates here directly (no sessionId), redirect to login.
     */
    useEffect(() => {
        if (!sessionId) {
            navigate('/login', { replace: true });
        }
    }, [sessionId, navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OtpInput>({
        resolver: zodResolver(otpSchema),
    });

    const onSubmit = (data: OtpInput) => {
        if (!sessionId) return;

        // Execute the mutation from auth.query.ts
        mutate({ ...data, sessionId });
    };

    return (
        <div className="auth-page-root">
            <div className="auth-card">
                <header className="auth-header">
                    <h1 className="auth-title">Verify Your Identity</h1>
                    <p className="auth-subtitle">
                        Please enter the 6-digit code sent to your registered device.
                    </p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                    <div className="form-group">
                        <Input
                            label="One-Time Password"
                            placeholder="000000"
                            maxLength={6}
                            error={errors.otp?.message}
                            {...register('otp')}
                        />
                    </div>

                    <div className="form-actions">
                        <Button
                            type="submit"
                            className="btn-full"
                            isLoading={isPending}
                        >
                            Confirm & Login
                        </Button>
                    </div>
                </form>

                <footer className="auth-footer">
                    <p className="footer-text">
                        Didn't receive a code? <span className="link-text">Resend OTP</span>
                    </p>
                    <button
                        type="button"
                        className="btn-back"
                        onClick={() => navigate('/login')}
                    >
                        Back to Login
                    </button>
                </footer>
            </div>
        </div>
    );
};