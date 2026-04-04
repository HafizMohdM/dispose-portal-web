import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from './NavigationConfig';

export const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar-root">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    {/* Logo placeholder - styling handled in CSS later */}
                    <span className="logo-text">DISPOSE</span>
                </div>
            </div>

            <nav className="sidebar-nav-list">
                {navigationItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "sidebar-link-active" : "sidebar-link-default"
                        }
                    >
                        <item.icon className="sidebar-link-icon" />
                        <span className="sidebar-link-label">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                {/* Optional: System version or Help link */}
                <span className="version-tag">v1.0.0</span>
            </div>
        </aside>
    );
};