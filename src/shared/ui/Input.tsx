import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = '', ...props }, ref) => {
        return (
            <div className="w-full space-y-1.5 text-left mb-6">
                {label && (
                    <label className="block text-sm font-medium text-gray-300">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`
                        flex h-11 w-full rounded-lg border border-gray-700 bg-[#0A0A0B] px-4 py-2 text-white 
                        ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                        placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 
                        focus-visible:ring-blue-600 focus-visible:ring-offset-0 disabled:cursor-not-allowed 
                        disabled:opacity-50 transition-all duration-200
                        ${error ? 'border-red-500 focus-visible:ring-red-500' : 'hover:border-gray-500'}
                        ${className}
                    `}
                    {...props}
                />
                {error && (
                    <p className="text-xs font-medium text-red-500 mt-1">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
