import React from "react";
import Layout from "../components/layout/Layout";
import MetricCard from "../components/ui/MetricCard";
import RevenueChart from "../components/charts/RevenueChart";
import ProjectionChart from "../components/charts/ProjectionChart";
import SalesChart from "../components/charts/SalesChart";
import Card from "../components/ui/Card";
import {
  products,
  revenueData,
  projectionData,
  salesData,
  locationData,
} from "../data/mockData";

const Dashboard: React.FC = () => {
  return (
    <Layout showRightSidebar>
      <div className="bg-white dark:bg-dark-card p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Page Title */}
        <div>
          <h1
            className=" font-inter font-semibold text-[12px] leading-[16px] tracking-[0]
            sm:text-[13px] sm:leading-[18px]
            md:text-[13px] md:leading-[18px]
            xl:text-[14px] xl:leading-[20px]
            screen1440:text-[14px] screen1440:leading-[20px] text-[#1C1C1C] dark:text-white"
          >
            eCommerce
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 screen1440:gap-[28px] gap-4 md:gap-6">
            <MetricCard
              title="Customers"
              value="3,781"
              change={11.01}
              bgColor={"#E3F5FF"}
              isPositive={true}
            />
            <MetricCard
              title="Orders"
              value="1,219"
              change={-0.03}
              bgColor={"#F7F9FB"}
              isPositive={false}
            />
            <MetricCard
              title="Revenue"
              value="$695"
              change={15.03}
              bgColor={"#F7F9FB"}
              isPositive={true}
            />
            <MetricCard
              title="Growth"
              value="30.1%"
              change={6.08}
              bgColor={"#E5ECF6"}
              isPositive={true}
            />
          </div>
          <div className="xl:col-span-1">
            <ProjectionChart data={projectionData} />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6">
          {/* Revenue Chart */}
          <div className="xl:col-span-3">
            <RevenueChart data={revenueData} />
          </div>
          {/* Revenue by Location */}
          <div className="lg:col-span-1 xl:col-span-1">
            <Card className="animate-fade-in">
              <h3
                className="font-inter font-semibold tracking-[0]
            text-[12px] leading-[16px]
            sm:text-[13px] sm:leading-[18px]
            md:text-[13px] md:leading-[18px]
            lg:text-[14px] lg:leading-[20px]
            screen1440:text-[14px] screen1440:leading-[20px] text-[#1C1C1C] dark:text-white mb-6"
              >
                Revenue by Location
              </h3>

              {/* World Map */}
              <div className="mb-6 relative">
                <img
                  src="/images/world-map.png"
                  alt="World Map"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-4">
                {locationData.map((location) => (
                  <div key={location.name}>
                    <div
                      key={location.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1  dark:border-gray-700 pb-1">
                        <span
                          className="font-inter font-normal tracking-[0]
                        text-[10px] leading-[14px]
                        sm:text-[11px] sm:leading-[16px]
                        md:text-[11px] md:leading-[17px]
                        lg:text-[12px] lg:leading-[18px]
                        screen1440:text-[12px] screen1440:leading-[18px]
                        text-[#1C1C1C] dark:text-gray-300"
                        >
                          {location.name}
                        </span>
                      </div>
                      <span
                        className="ml-4 font-inter font-normal tracking-[0]
                      text-[10px] leading-[14px]
                      sm:text-[11px] sm:leading-[16px]
                      md:text-[11px] md:leading-[17px]
                      lg:text-[12px] lg:leading-[18px]
                      screen1440:text-[12px] screen1440:leading-[18px] 
                      text-[#1C1C1C] dark:text-white"
                      >
                        {location.value}K
                      </span>
                    </div>
                    <div className="w-full h-1 bg-gray-100">
                      <div
                        className={`w-[${location.value}%] h-1 rounded-full bg-[#A8C5DA]`}
                        style={{ width: `${location.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {/* Top Selling Products */}
          <div className="lg:col-span-1 xl:col-span-3">
            <Card padding="none" className="animate-fade-in overflow-hidden">
              <div className="p-6">
                <h3
                  className="font-inter font-semibold tracking-[0]
            text-[12px] leading-[16px]
            sm:text-[13px] sm:leading-[18px]
            md:text-[13px] md:leading-[18px]
            lg:text-[14px] lg:leading-[20px]
            screen1440:text-[14px] screen1440:leading-[20px] text-[#1C1C1C] dark:text-white mb-6"
                >
                  Top Selling Products
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th
                        className="px-6 py-3 text-left font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C66] dark:text-gray-400  tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        className="px-6 py-3 text-right font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C66] dark:text-gray-400  tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        className="px-6 py-3 text-right font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C66] dark:text-gray-400  tracking-wider"
                      >
                        Quantity
                      </th>
                      <th
                        className="px-6 py-3 text-right font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C66] dark:text-gray-400  tracking-wider"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {products.map((product, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <td
                          className="px-6 py-4 whitespace-nowrap font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-[#1C1C1C] dark:text-white"
                        >
                          {product.name}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-gray-600 dark:text-gray-400 text-right"
                        >
                          ${product.price.toFixed(2)}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] text-gray-600 dark:text-gray-400 text-right"
                        >
                          {product.quantity}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap font-inter font-normal tracking-[0]
          text-[10px] leading-[14px]
          sm:text-[11px] sm:leading-[16px]
          md:text-[11px] md:leading-[17px]
          lg:text-[12px] lg:leading-[18px]
          screen1440:text-[12px] screen1440:leading-[18px] font-medium text-gray-900 dark:text-white text-right"
                        >
                          ${product.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
          {/* Total Sales */}
          <div className="lg:col-span-1 xl:col-span-1">
            <SalesChart data={salesData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
