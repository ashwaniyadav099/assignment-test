import React from 'react';
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';
import Card from './Card';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  bgColor?: string;
  isPositive?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive = true,bgColor = '#F7F9FB' }) => {
  return (
    <Card hover className={`animate-scale-in bg-[${bgColor}]`}>
      <div className={`space-y-2 flex h-full justify-center flex-col bg-[${bgColor}]`}>
        <p className="font-inter font-semibold tracking-[0]
         text-[12px] leading-[16px]
         sm:text-[13px] sm:leading-[18px]
         md:text-[13px] md:leading-[18px]
         xl:text-[14px] xl:leading-[20px] screen1440:text-[14px] screen1440:leading-[20px] text-[#1C1C1C] dark:text-white">{title}</p>
        <div className="flex items-center justify-between">
          <h3 className=" font-inter font-semibold tracking-[0]
      text-[18px] leading-[26px]
      sm:text-[20px] sm:leading-[30px]
      md:text-[22px] md:leading-[33px]
      screen1440:text-[24px] screen1440:leading-[36px] text-[#1C1C1C] dark:text-white">{value}</h3>
          <div className={`flex items-center text-sm font-medium  font-inter font-normal tracking-[0]
      text-[10px] leading-[14px]
      sm:text-[11px] sm:leading-[16px]
      md:text-[11px] md:leading-[17px]
      screen1440:text-[12px] screen1440:leading-[18px]`}>
            <span>{isPositive ? '+' : ''}{change}%</span>
            {isPositive ? (
              <HiTrendingUp className="ml-1 w-4 h-4" />
            ) : (
              <HiTrendingDown className="ml-1 w-4 h-4" />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;

