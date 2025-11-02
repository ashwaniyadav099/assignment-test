export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Order {
  id: string;
  orderId: string;
  user: User;
  project: string;
  address: string;
  date: string;
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
}

export interface Product {
  name: string;
  price: number;
  quantity: number;
  amount: number;
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  isPositive?: boolean;
}

export interface Activity {
  id: string;
  user: User;
  action: string;
  time: string;
}

export interface Notification {
  id: string;
  icon: string;
  message: string;
  time: string;
  type: 'bug' | 'user' | 'subscription';
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
}

export interface RevenueData {
  month: string;
  current: number;
  previous: number;
}

export interface ProjectionData {
  month: string;
  value: number;
}

export interface LocationData {
  name: string;
  value: number;
}

export interface SalesData {
  name: string;
  value: number;
  percentage: number;
}

