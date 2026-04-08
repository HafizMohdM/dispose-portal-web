import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from './dashboard.api';

export const useDashboardOverview = () => {
    return useQuery({
        queryKey: ['dashboard', 'overview'],
        queryFn: () => dashboardApi.getOverview(),
        // Standard stale time and retry logic for a dashboard
        staleTime: 5 * 60 * 1000,
        retry: 2,
    });
};