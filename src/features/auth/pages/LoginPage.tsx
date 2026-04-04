import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import { loginSchema, type LoginInput } from '../auth.schema';
import { useLoginMutation } from '../auth.query';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { mutate, isPending } = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginInput) => {
        mutate(data, {
            onSuccess: (response) => {
                // We move to OTP page and pass the sessionId via state
                navigate('/verify-otp', { state: { sessionId: response.sessionId } });
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] p-4 font-sans">
            <div className="w-full max-w-md bg-[#111112] border border-gray-800 rounded-2xl p-10 shadow-2xl">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Log in to manage operations
                    </p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <Input
                        label="Email or Phone"
                        placeholder="e.g. name@company.com"
                        error={errors.identifier?.message}
                        {...register('identifier')}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        error={errors.password?.message}
                        {...register('password')}
                    />

                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full py-4 text-base font-semibold"
                            isLoading={isPending}
                        >
                            Send OTP
                        </Button>
                    </div>
                </form>

                <footer className="mt-10 pt-8 border-t border-gray-800/50 text-center">
                    <p className="text-sm text-gray-500">
                        Trouble logging in? <span className="text-blue-500 hover:text-blue-400 cursor-pointer font-semibold transition-colors">Contact Support</span>
                    </p>
                </footer>
            </div>
        </div>
    );
};
