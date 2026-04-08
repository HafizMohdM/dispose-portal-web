export interface DashboardOverviewResponse {
    metrics: {
        energyGenerated: number;
        co2Offset: number | string;
        totalWasteCollected: number;
    };
    fleet: {
        activeDrivers: number;
    };
}
