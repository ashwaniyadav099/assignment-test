import type { Order, Product, Activity, Notification, Contact, RevenueData, ProjectionData, LocationData, SalesData } from '../types';

export const orders: Order[] = [
  {
    id: '1',
    orderId: '#CM9801',
    user: {
      id: '1',
      name: 'Natali Craig',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress',
  },
  {
    id: '2',
    orderId: '#CM9802',
    user: {
      id: '2',
      name: 'Kate Morrison',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
  },
  {
    id: '3',
    orderId: '#CM9803',
    user: {
      id: '3',
      name: 'Drew Cano',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
  },
  {
    id: '4',
    orderId: '#CM9804',
    user: {
      id: '4',
      name: 'Orlando Diggs',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
  },
  {
    id: '5',
    orderId: '#CM9805',
    user: {
      id: '5',
      name: 'Andi Lane',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
  },
  {
    id: '6',
    orderId: '#CM9806',
    user: {
      id: '1',
      name: 'Natali Craig',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress',
  },
  {
    id: '7',
    orderId: '#CM9807',
    user: {
      id: '2',
      name: 'Kate Morrison',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
  },
  {
    id: '8',
    orderId: '#CM9808',
    user: {
      id: '3',
      name: 'Drew Cano',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
  },
  {
    id: '9',
    orderId: '#CM9809',
    user: {
      id: '4',
      name: 'Orlando Diggs',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
  },
  {
    id: '10',
    orderId: '#CM9810',
    user: {
      id: '5',
      name: 'Andi Lane',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
  },
];

export const products: Product[] = [
  { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
  { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
  { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
  { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
  { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
];

export const activities: Activity[] = [
  {
    id: '1',
    user: { id: '1', name: 'User', avatar: 'https://i.pravatar.cc/150?img=1' },
    action: 'You have a bug that needs...',
    time: 'Just now',
  },
  {
    id: '2',
    user: { id: '2', name: 'User', avatar: 'https://i.pravatar.cc/150?img=2' },
    action: 'Released a new version',
    time: '59 minutes ago',
  },
  {
    id: '3',
    user: { id: '3', name: 'User', avatar: 'https://i.pravatar.cc/150?img=3' },
    action: 'Submitted a bug',
    time: '12 hours ago',
  },
  {
    id: '4',
    user: { id: '4', name: 'User', avatar: 'https://i.pravatar.cc/150?img=4' },
    action: 'Modified A data in Page X',
    time: 'Today, 11:59 AM',
  },
  {
    id: '5',
    user: { id: '5', name: 'User', avatar: 'https://i.pravatar.cc/150?img=5' },
    action: 'Deleted a page in Project X',
    time: 'Feb 2, 2023',
  },
];

export const notifications: Notification[] = [
  {
    id: '1',
    icon: 'bug',
    message: 'You have a bug that needs...',
    time: 'Just now',
    type: 'bug',
  },
  {
    id: '2',
    icon: 'user',
    message: 'New user registered',
    time: '59 minutes ago',
    type: 'user',
  },
  {
    id: '3',
    icon: 'bug',
    message: 'You have a bug that needs...',
    time: '12 hours ago',
    type: 'bug',
  },
  {
    id: '4',
    icon: 'subscription',
    message: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
    type: 'subscription',
  },
];

export const contacts: Contact[] = [
  { id: '1', name: 'Natali Craig', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Drew Cano', avatar: 'https://i.pravatar.cc/150?img=33' },
  { id: '3', name: 'Orlando Diggs', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '4', name: 'Andi Lane', avatar: 'https://i.pravatar.cc/150?img=32' },
  { id: '5', name: 'Kate Morrison', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '6', name: 'Koray Okumus', avatar: 'https://i.pravatar.cc/150?img=8' },
];

export const revenueData: RevenueData[] = [
  { month: 'Jan', current: 10000000, previous: 15000000 },
  { month: 'Feb', current: 15000000, previous: 12000000 },
  { month: 'Mar', current: 12000000, previous: 18000000 },
  { month: 'Apr', current: 18000000, previous: 14000000 },
  { month: 'May', current: 14000000, previous: 20000000 },
  { month: 'Jun', current: 22000000, previous: 23000000 },
];

export const projectionData: ProjectionData[] = [
  { month: 'Jan', value: 20100000},
  { month: 'Feb', value: 25000000 },
  { month: 'Mar', value: 20100000 },
  { month: 'Apr', value: 28000000 },
  { month: 'May', value: 19000000 },
  { month: 'Jun', value: 26000000 },
];

export const locationData: LocationData[] = [
  { name: 'New York', value: 72 },
  { name: 'San Francisco', value: 39 },
  { name: 'Sydney', value: 25 },
  { name: 'Singapore', value: 61 },
];

export const salesData: SalesData[] = [
  { name: 'Direct', value: 300.56, percentage: 38.6 },
  { name: 'Affiliate', value: 135.18, percentage: 22.5 },
  { name: 'Sponsored', value: 154.02, percentage: 29.8 },
  { name: 'E-mail', value: 48.96, percentage: 9.1 },
];

