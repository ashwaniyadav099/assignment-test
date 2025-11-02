import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiHome,
  HiShoppingCart,
  HiFolderOpen,
  HiAcademicCap,
  HiUser,
  HiOfficeBuilding,
  HiNewspaper,
  HiChatAlt,
} from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: 'Overview', icon: <HiHome className="w-5 h-5" />, path: '/' },
  { name: 'Projects', icon: <HiFolderOpen className="w-5 h-5" />, path: '/projects' },
];

const dashboards: MenuItem[] = [
  { name: 'Default', icon: <HiHome className="w-5 h-5" />, path: '/' },
  { name: 'eCommerce', icon: <HiShoppingCart className="w-5 h-5" />, path: '/ecommerce' },
  { name: 'Projects', icon: <HiFolderOpen className="w-5 h-5" />, path: '/projects' },
  { name: 'Online Courses', icon: <HiAcademicCap className="w-5 h-5" />, path: '/courses' },
];

const pages: MenuItem[] = [
  {
    name: 'User Profile',
    icon: <HiUser className="w-5 h-5" />,
    children: [
      { name: 'Overview', icon: <></>, path: '/profile/overview' },
      { name: 'Projects', icon: <></>, path: '/profile/projects' },
      { name: 'Campaigns', icon: <></>, path: '/profile/campaigns' },
      { name: 'Documents', icon: <></>, path: '/profile/documents' },
      { name: 'Followers', icon: <></>, path: '/profile/followers' },
    ],
  },
  { name: 'Account', icon: <HiUser className="w-5 h-5" />, path: '/account' },
  { name: 'Corporate', icon: <HiOfficeBuilding className="w-5 h-5" />, path: '/corporate' },
  { name: 'Blog', icon: <HiNewspaper className="w-5 h-5" />, path: '/blog' },
  { name: 'Social', icon: <HiChatAlt className="w-5 h-5" />, path: '/social' },
];

const Sidebar: React.FC = () => {
  const [expandedMenus, setExpandedMenus] = React.useState<string[]>(['User Profile']);

  const toggleMenu = (name: string) => {
    setExpandedMenus((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    const isExpanded = expandedMenus.includes(item.name);

    if (item.children) {
      return (
        <div key={item.name} className="space-y-1">
          <button
            onClick={() => toggleMenu(item.name)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-theme"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.name}</span>
            </div>
            <FiChevronRight
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            />
          </button>
          {isExpanded && (
            <div className="ml-8 space-y-1">
              {item.children.map((child) => (
                <NavLink
                  key={child.name}
                  to={child.path || '#'}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm font-medium rounded-lg transition-theme ${
                      isActive
                        ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`
                  }
                >
                  {child.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={item.name}
        to={item.path || '#'}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-theme ${
            isActive
              ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`
        }
      >
        {item.icon}
        <span>{item.name}</span>
      </NavLink>
    );
  };

  return (
    <aside className="hidden lg:flex w-64 h-screen bg-white dark:bg-dark-card border-r border-light-border dark:border-dark-border flex-col transition-theme custom-scrollbar overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-light-border dark:border-dark-border">
        <div className="flex items-center gap-2">
           <img src='./images/ByeWind.png' className='w-8 h-auto'/>
          <span className="text-xl font-semibold text-gray-900 dark:text-white">ByeWind</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-6">
        {/* Favorites */}
        <div>
          <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Favorites
          </h3>
          <div className="space-y-1">
            {menuItems.map((item) => renderMenuItem(item))}
          </div>
        </div>

        {/* Recently (placeholder, can be expanded) */}
        <div>
          <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Recently
          </h3>
        </div>

        {/* Dashboards */}
        <div>
          <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Dashboards
          </h3>
          <div className="space-y-1">
            {dashboards.map((item) => renderMenuItem(item))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Pages
          </h3>
          <div className="space-y-1">
            {pages.map((item) => renderMenuItem(item))}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

