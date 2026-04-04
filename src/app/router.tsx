import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { TenantGuard } from './TenantGuard';
import { PermissionGuard } from './PermissionGuard';
import { DashboardLayout } from '../layout/DashboardLayout';
import { LoginPage } from '../features/auth/pages/LoginPage';


export const router = createBrowserRouter([
    // 1. PUBLIC ROUTES
    { path: '/login', element: <LoginPage /> },
    { path: '/verify-otp', element: <div className="auth-wrapper">OTP Page</div> },

    // 2. PROTECTED ROUTES (Logged in only)
    {
        element: <ProtectedRoute />,
        children: [
            // Post-login setup
            { path: '/select-organization', element: <div className="org-wrapper">Select Org</div> },

            // 3. TENANT-LOCKED ROUTES (Logged in + Org Selected)
            {
                element: <TenantGuard />,
                children: [
                    {
                        element: <DashboardLayout />,
                        children: [
                            { path: '/', element: <Navigate to="/dashboard" replace /> },
                            { path: '/dashboard', element: <div className="page-root">Dashboard</div> },
                            { path: '/drivers', element: <div className="page-root">Drivers</div> },

                            // 4. PERMISSION-LOCKED ROUTES (Admin Only)
                            {
                                element: <PermissionGuard requiredPermission="admin.access" />,
                                children: [
                                    { path: '/admin', element: <div className="page-root">Admin Panel</div> },
                                    { path: '/settings', element: <div className="page-root">Settings</div> },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },

    // --- 404 CATCH-ALL ---
    {
        path: '*',
        element: (
            <div className="error-page-container">
                <h1>404 - Not Found</h1>
                <button className="btn-primary" onClick={() => window.location.href = '/'}>
                    Return Home
                </button>
            </div>
        ),
    },
]);