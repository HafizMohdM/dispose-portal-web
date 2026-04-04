import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../core/auth/useAuth';

interface PermissionGuardProps {
    requiredPermission: string;
}

export const PermissionGuard: React.FC<PermissionGuardProps> = ({ requiredPermission }) => {
    const { user } = useAuth();

    const hasPermission = user?.role === 'admin' || user?.role === 'super_admin';

    if (!hasPermission) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
};