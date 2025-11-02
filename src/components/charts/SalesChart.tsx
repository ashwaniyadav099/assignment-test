import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

interface SalesChartProps {
  data: Array<{ name: string; value: number; percentage: number }>;
}

// Colors matching the design image
const COLORS = ['#1C1C1C', '#C6C7F8', '#BAEDBD', '#B1E3FF'];

const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  return (
    <Card className="animate-fade-in">
      <h3 className="font-inter font-semibold tracking-[0]
            text-[12px] leading-[16px]
            sm:text-[13px] sm:leading-[18px]
            md:text-[13px] md:leading-[18px]
            lg:text-[14px] lg:leading-[20px]
            screen1440:text-[14px] screen1440:leading-[20px] text-[#1C1C1C] dark:text-white mb-6">
        Total Sales
      </h3>
              
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <ResponsiveContainer width={180} height={180}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={0}
                dataKey="percentage"
                startAngle={90}
                endAngle={450}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#626262] dark:bg-gray-700 rounded-lg px-3 py-1">
              <span className="font-inter font-medium text-[14px] leading-[20px] text-white">
                38.6%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="font-inter font-normal tracking-[0]
                text-[10px] leading-[14px]
                sm:text-[11px] sm:leading-[16px]
                md:text-[11px] md:leading-[17px]
                lg:text-[12px] lg:leading-[18px]
                screen1440:text-[12px] screen1440:leading-[18px] 
                text-[#1C1C1C] dark:text-gray-300">
                {item.name}
              </span>
            </div>
            <span className="font-inter font-normal tracking-[0]
              text-[10px] leading-[14px]
              sm:text-[11px] sm:leading-[16px]
              md:text-[11px] md:leading-[17px]
              lg:text-[12px] lg:leading-[18px]
              screen1440:text-[12px] screen1440:leading-[18px] 
              text-[#1C1C1C] dark:text-white">
              ${item.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SalesChart;

