"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const dummyData = [
    { day: "Mon", minutes: 30 },
    { day: "Tue", minutes: 45 },
    { day: "Wed", minutes: 20 },
    { day: "Thu", minutes: 60 },
    { day: "Fri", minutes: 15 },
    { day: "Sat", minutes: 50 },
    { day: "Sun", minutes: 40 },
];

export default function ProgressPage() {
    return (
        <main className="min-h-screen bg-[#EAE3D3] px-6 py-10">
            <h1 className="mb-6 text-xl font-bold text-slate-800">Reading Progress</h1>

            <div className="rounded-2xl bg-white p-4 shadow-sm" style={{ width: "100%", height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dummyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="minutes"
                            stroke="#6366f1"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorMinutes)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}