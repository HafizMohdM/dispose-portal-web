import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export const DashboardLayout: React.FC = () => {
    return (
        <div className="layout-root">
            {/* Persistent Navigation */}
            <Sidebar />

            <div className="layout-view-wrapper">
                {/* Top Header / Actions */}
                <Topbar />

                {/* Dynamic Page Content */}
                <main className="layout-main-content">
                    <div className="content-container">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};