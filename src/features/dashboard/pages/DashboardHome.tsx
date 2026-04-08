import React from 'react';
import { Zap, Leaf, Truck, Activity, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useDashboardOverview } from '../dashboard.query';
import { PageLoader } from '../../../shared/loaders/PageLoader';

export const DashboardHome: React.FC = () => {
    // Accessing the auto-refreshing production data
    const { data, isLoading, error } = useDashboardOverview();

    if (isLoading) return <PageLoader />;
    if (error) return (
        <div className="flex items-center justify-center min-h-[60vh] text-emerald-900">
            <div className="text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
                <Activity className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <h3 className="font-bold">Sync Interrupted</h3>
                <p className="text-sm opacity-70">Unable to reach the Environmental Data Grid.</p>
            </div>
        </div>
    );

    const { metrics, fleet } = data!;

    return (
        <div className="p-8 bg-[#f8faf9] min-h-screen">
            {/* Top Navigation / Breadcrumb Context */}
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-emerald-950 tracking-tight">
                        Sustainability Command
                    </h1>
                    <p className="text-emerald-700 font-medium flex items-center gap-2 mt-1">
                        <ShieldCheck className="w-4 h-4" />
                        Live Waste-to-Energy Orchestration
                    </p>
                </div>
                <div className="hidden md:block text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-900/40">Current Status</span>
                    <p className="text-emerald-600 font-mono text-sm">System Nominal • 99.9% Uptime</p>
                </div>
            </div>

            {/* High-Impact Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

                {/* Primary Energy Metric - High Emphasis */}
                <div className="group bg-emerald-600 p-7 rounded-[2rem] shadow-xl shadow-emerald-900/10 hover:translate-y-[-4px] transition-all duration-300">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-emerald-500 rounded-2xl shadow-inner">
                            <Zap className="w-7 h-7 text-emerald-50" />
                        </div>
                        <div className="text-emerald-300 group-hover:text-white transition-colors">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-emerald-100/80 font-semibold text-sm uppercase tracking-wider">Clean Energy Generated</p>
                    <div className="flex items-baseline gap-2 mt-2">
                        <h2 className="text-4xl font-black text-white">{metrics.energyGenerated.toLocaleString()}</h2>
                        <span className="text-emerald-200 font-bold">kWh</span>
                    </div>
                </div>

                {/* CO2 Offset */}
                <div className="bg-white p-7 rounded-[2rem] border border-emerald-100 shadow-sm hover:border-emerald-300 transition-colors">
                    <div className="p-3 bg-emerald-50 w-fit rounded-2xl mb-6">
                        <Leaf className="w-7 h-7 text-emerald-600" />
                    </div>
                    <p className="text-emerald-900/50 font-bold text-sm uppercase tracking-wider">CO2 Saved</p>
                    <div className="flex items-baseline gap-2 mt-2">
                        <h2 className="text-4xl font-black text-emerald-950">{metrics.co2Offset}</h2>
                        <span className="text-emerald-600 font-bold">Tons</span>
                    </div>
                </div>

                {/* Waste Tonnage */}
                <div className="bg-white p-7 rounded-[2rem] border border-emerald-100 shadow-sm">
                    <div className="p-3 bg-emerald-50 w-fit rounded-2xl mb-6">
                        <Activity className="w-7 h-7 text-emerald-600" />
                    </div>
                    <p className="text-emerald-900/50 font-bold text-sm uppercase tracking-wider">Waste Collected</p>
                    <div className="flex items-baseline gap-2 mt-2">
                        <h2 className="text-4xl font-black text-emerald-950">{metrics.totalWasteCollected.toLocaleString()}</h2>
                        <span className="text-emerald-600 font-bold">kg</span>
                    </div>
                </div>

                {/* Efficiency Rate */}
                <div className="bg-white p-7 rounded-[2rem] border border-emerald-100 shadow-sm">
                    <div className="p-3 bg-emerald-50 w-fit rounded-2xl mb-6">
                        <Truck className="w-7 h-7 text-emerald-600" />
                    </div>
                    <p className="text-emerald-900/50 font-bold text-sm uppercase tracking-wider">Active Fleet</p>
                    <div className="flex items-baseline gap-2 mt-2">
                        <h2 className="text-4xl font-black text-emerald-950">{fleet.activeDrivers}</h2>
                        <span className="text-emerald-600 font-bold">Units</span>
                    </div>
                </div>
            </div>

            {/* Second Row: Live Map Integration Context */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* The "Rapido" Style Tracking Engine */}
                <div className="lg:col-span-8 bg-emerald-950 rounded-[2.5rem] min-h-[500px] shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/20 via-transparent to-transparent"></div>

                    <div className="absolute top-8 left-8 z-20">
                        <h3 className="text-emerald-50 font-bold text-lg">Logistics Network</h3>
                        <p className="text-emerald-400/60 text-xs font-mono">LIVE_FEED: ACTIVE_NODES</p>
                    </div>

                    {/* Placeholder for the Map Canvas Component */}
                    <div className="absolute inset-0 flex items-center justify-center border-2 border-emerald-800/30 rounded-[2.5rem] m-4 border-dashed">
                        <div className="text-center">
                            <div className="inline-block p-4 bg-emerald-900/50 rounded-full mb-4 animate-pulse">
                                <Truck className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h4 className="text-emerald-200 font-semibold text-lg">Initializing Live Tracking...</h4>
                            <p className="text-emerald-500/50 text-sm max-w-xs mx-auto">Connecting to telemetry servers for real-time vehicle positioning.</p>
                        </div>
                    </div>
                </div>

                {/* Performance & Logistics Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white p-6 rounded-[2rem] border border-emerald-100 shadow-sm">
                        <h3 className="font-black text-emerald-950 mb-6 flex justify-between items-center">
                            Today's Performance
                            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full uppercase">Real-time</span>
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-emerald-900/60 uppercase text-[10px] tracking-widest">Conversion Rate</span>
                                    <span className="text-emerald-600">84%</span>
                                </div>
                                <div className="h-2 w-full bg-emerald-50 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '84%' }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-emerald-900/60 uppercase text-[10px] tracking-widest">Fleet Capacity</span>
                                    <span className="text-emerald-600">62%</span>
                                </div>
                                <div className="h-2 w-full bg-emerald-50 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: '62%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-900 p-8 rounded-[2rem] text-white overflow-hidden relative">
                        <Leaf className="absolute -right-4 -bottom-4 w-32 h-32 text-emerald-800 opacity-50 rotate-12" />
                        <h4 className="text-xl font-bold mb-2 relative z-10">Eco-Goal</h4>
                        <p className="text-emerald-300 text-sm leading-relaxed relative z-10">
                            You are 1,200 kg away from reaching this week's sustainability target.
                        </p>
                        <button className="mt-6 text-sm font-bold bg-white text-emerald-950 px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors relative z-10">
                            View Full Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};