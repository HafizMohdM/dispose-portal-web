import {
    LayoutDashboard,
    Users,
    Package,
    BarChart3,
    Settings,
    CreditCard,
    ShieldCheck,
    Bell
} from 'lucide-react';

/**
 * Defines the structure of a single navigation item.
 * This can be extended later for 'permissions' or 'roles'.
 */
export interface NavItem {
    label: string;
    path: string;
    icon: React.ElementType;
    permission?: string; // For future RBAC (Role Based Access Control)
}

export const navigationItems: NavItem[] = [
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        label: 'Drivers',
        path: '/drivers',
        icon: Users,
    },
    {
        label: 'Pickups',
        path: '/pickups',
        icon: Package,
    },
    {
        label: 'Subscription',
        path: '/subscription',
        icon: CreditCard,
    },
    {
        label: 'Analytics',
        path: '/analytics',
        icon: BarChart3,
    },
    {
        label: 'Notifications',
        path: '/notifications',
        icon: Bell,
    },
    {
        label: 'Admin Control',
        path: '/admin',
        icon: ShieldCheck,
    },
    {
        label: 'Settings',
        path: '/settings',
        icon: Settings,
    },
];