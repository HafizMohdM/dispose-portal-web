import type { InternalAxiosRequestConfig } from 'axios';
import { tokenManager } from './tokenManager';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = tokenManager.getToken();

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }


    // 2. Add Organization ID for Phase 10 (Multi-tenancy)
    // We pull this from localStorage where it was saved during the Tenant phase
    const selectedOrgId = localStorage.getItem('selected_org_id');
    if (selectedOrgId && config.headers) {
        config.headers['X-Organization-ID'] = selectedOrgId;
    }

    return config;
};

export const requestErrorHandler = (error: any) => {
    return Promise.reject(error);
};