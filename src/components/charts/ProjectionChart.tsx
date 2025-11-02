import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import Card from '../ui/Card';

interface ProjectionChartProps {
  data: Array<{ month: string; value: number }>;
}

const ProjectionChart: React.FC<ProjectionChartProps> = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Card className="animate-fade-in bg-[#F7F9FB]">
      <div className="mb-4">
        <h3 className="font-inter font-semibold tracking-[0]
          text-[12px] leading-[16px]
          sm:text-[13px] sm:leading-[18px]
          md:text-[13px] md:leading-[18px]
          lg:text-[14px] lg:leading-[20px]
          screen1440:text-[14px] screen1440:leading-[20px] text-[#1C1C1C] dark:text-white">Projections vs Actuals</h3>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
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
          <Bar
            dataKey="value"
            fill="url(#colorGradient)"
            radius={[8, 8, 0, 0]}
            maxBarSize={40}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A8C5DA" stopOpacity={1} />
              <stop offset="100%" stopColor="#A8C5DA" stopOpacity={0.6} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ProjectionChart;


