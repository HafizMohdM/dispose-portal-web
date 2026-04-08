import httpClient from '../../core/api/httpClient';
import type { DashboardOverviewResponse } from './dashboard.types';

export const dashboardApi = {
    getOverview: async (): Promise<DashboardOverviewResponse> => {
        const response = await httpClient.get('/dashboard/overview');
        return response.data;
    },
};