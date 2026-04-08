import { createBrowserRouter, Navigate } from 'react-router-dom';

// Guards & Layout
import { ProtectedRoute } from './ProtectedRoute';
import { TenantGuard } from './TenantGuard';
import { PermissionGuard } from './PermissionGuard';
import { DashboardLayout } from '../layout/DashboardLayout';

// Feature Pages
import { LoginPage } from '../features/auth/pages/LoginPage';
import { VerifyOtpPage } from '../features/auth/pages/VerifyOtpPage';
import { DashboardHome } from '../features/dashboard/pages/DashboardHome';

export const router = createBrowserRouter([
    // 1. PUBLIC ROUTES
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/verify-otp',
        element: <VerifyOtpPage />
    },

    // 2. PROTECTED ROUTES (Authentication Check)
    {
        element: <ProtectedRoute />,
        children: [
            // Organizational Setup (Handled by Phase 9 team)
            {
                path: '/select-organization',
                element: <div className="org-wrapper">Select Org</div>
            },

            // 3. TENANT-LOCKED ROUTES (Company Context Check)
            {
                element: <TenantGuard />,
                children: [
                    {
                        element: <DashboardLayout />,
                        children: [
                            { path: '/', element: <Navigate to="/dashboard" replace /> },
                            {
                                path: '/dashboard', element: <DashboardHome />
                            },
                            {
                                path: '/drivers',
                                element: <div className="page-root">Drivers</div>
                            },

                            // 4. PERMISSION-LOCKED ROUTES (RBAC Check)
                            {
                                element: <PermissionGuard requiredPermission="admin.access" />,
                                children: [
                                    {
                                        path: '/admin',
                                        element: <div className="page-root">Admin Panel</div>
                                    },
                                    {
                                        path: '/settings',
                                        element: <div className="page-root">Settings</div>
                                    },
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
                <button
                    className="btn-primary"
                    onClick={() => window.location.href = '/'}
                >
                    Return Home
                </button>
            </div>
        ),
    },
]);