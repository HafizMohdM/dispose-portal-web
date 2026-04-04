import React from 'react';
import { useAuth } from '../core/auth/useAuth';
import { LogOut, User as UserIcon } from 'lucide-react';

export const Topbar: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <header className="topbar-root">
            <div className="topbar-left">
                {/* Placeholder for Breadcrumbs or Search */}
                <div className="breadcrumb-placeholder">Portal / Dashboard</div>
            </div>

            <div className="topbar-right">
                <div className="user-profile-section">
                    <div className="user-info">
                        <span className="user-name">{user?.fullName || 'User'}</span>
                        <span className="user-role">{user?.role || 'Staff'}</span>
                    </div>

                    <div className="user-avatar">
                        <UserIcon size={20} className="avatar-icon" />
                    </div>

                    <button
                        className="btn-logout-icon"
                        onClick={logout}
                        title="Logout"
                    >
                        <LogOut size={18} />
                    </button>
                </div>
            </div>
        </header>
    );
};