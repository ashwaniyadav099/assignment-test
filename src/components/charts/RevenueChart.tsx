import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import Card from '../ui/Card';

interface RevenueChartProps {
  data: Array<{ month: string; current: number; previous: number }>;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Split previous data into solid and dashed portions
  const dataWithSplit = data.map((item, index) => ({
    ...item,
    previousSolid: index < data.length - 2 ? item.previous : null,
    previousDashed: index >= data.length - 3 ? item.previous : null,
  }));

  return (
    <Card className="animate-fade-in">
      <div className="mb-6 flex items-start gap-6">
         <h3 className="font-inter font-semibold tracking-[0]
          text-[12px] leading-[16px]
          sm:text-[13px] sm:leading-[18px]
          md:text-[13px] md:leading-[18px]
          lg:text-[14px] lg:leading-[20px]
          screen1440:text-[14px] screen1440:leading-[20px] text-[#1C1C1C] dark:text-white">Revenue</h3>
        <div className="border-l-2 border-[#1C1C1C33] dark:border-[#272B30] pl-4 flex items-center gap-4 text-[11px] sm:text-[12px]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C] dark:bg-[#C6C7F8]"></span>
            <span className="font-inter font-normal tracking-[0]
                  text-[10px] leading-[14px]
                  sm:text-[11px] sm:leading-[16px]
                  md:text-[11px] md:leading-[17px]
                  lg:text-[12px] lg:leading-[18px]
                  screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C] dark:white">Current Week</span>
            <span className="font-inter font-semibold tracking-[0]
                  text-[10px] leading-[14px]
                  sm:text-[11px] sm:leading-[16px]
                  md:text-[11px] md:leading-[17px]
                  lg:text-[12px] lg:leading-[18px]
                  screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C] dark:text-white">$58,211</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8C5DA] dark:bg-[#A8C5DA]"></span>
            <span className="font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C] dark:white">Previous Week</span>
            <span className="font-inter font-semibold tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C] dark:text-white">$68,768</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={dataWithSplit} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#272B30' : '#E4E4E7'} vertical={false} />
          <XAxis
            dataKey="month"
            stroke={isDark ? '#9A9FA5' : '#6F767E'}
            tick={{ fill: isDark ? '#9A9FA5' : '#6F767E', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke={isDark ? '#9A9FA5' : '#6F767E'}
            tick={{ fill: isDark ? '#9A9FA5' : '#6F767E', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 30000000]}
            ticks={[0, 10000000, 20000000, 30000000]}
            tickFormatter={(value) => {
              if (value === 0) return '0';
              return `${value / 1000000}M`;
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1A1D1F' : '#FFFFFF',
              border: `1px solid ${isDark ? '#272B30' : '#E4E4E7'}`,
              borderRadius: '8px',
              color: isDark ? '#FCFCFC' : '#1A1D1F',
              fontSize: '12px',
            }}
            formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, '']}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke={isDark ? '#F5F6FA' : '#1A1D1F'}
            strokeWidth={2.5}
            dot={false}
            strokeLinecap="round"
          />
          <Line
            type="monotone"
            dataKey="previousSolid"
            stroke="#A8C5DA"
            strokeWidth={2.5}
            dot={false}
            strokeLinecap="round"
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="previousDashed"
            stroke="#A8C5DA"
            strokeWidth={2.5}
            strokeDasharray="5 5"
            dot={false}
            strokeLinecap="round"
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
export default RevenueChart;