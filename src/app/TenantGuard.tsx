import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../core/auth/useAuth';

export const TenantGuard: React.FC = () => {
    // We will build useTenant later, for now we check if an Org ID exists
    const selectedOrgId = localStorage.getItem('selected_org_id');

    if (!selectedOrgId) {
        // Force them to select an organization first
        return <Navigate to="/select-organization" replace />;
    }

    return <Outlet />;
};