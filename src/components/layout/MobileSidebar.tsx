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
  HiX,
} from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems: MenuItem[] = [
  { name: 'Overview', icon: <HiHome className="w-5 h-5" />, path: '/' },
  { name: 'Projects', icon: <HiFolderOpen className="w-5 h-5" />, path: '/projects' },
];

const dashboards: MenuItem[] = [
  { name: 'Default', icon: <HiHome className="w-5 h-5" />, path: '/' },
  { name: 'eCommerce', icon: <HiShoppingCart className="w-5 h-5" />, path: '/' },
  { name: 'Projects', icon: <HiFolderOpen className="w-5 h-5" />, path: '/projects' },
  { name: 'Online Courses', icon: <HiAcademicCap className="w-5 h-5" />, path: '/courses' },
];

const pages: MenuItem[] = [
  { name: 'User Profile', icon: <HiUser className="w-5 h-5" />, path: '/profile/overview' },
  { name: 'Account', icon: <HiUser className="w-5 h-5" />, path: '/account' },
  { name: 'Corporate', icon: <HiOfficeBuilding className="w-5 h-5" />, path: '/corporate' },
  { name: 'Blog', icon: <HiNewspaper className="w-5 h-5" />, path: '/blog' },
  { name: 'Social', icon: <HiChatAlt className="w-5 h-5" />, path: '/social' },
];

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const [expandedMenus, setExpandedMenus] = React.useState<string[]>([]);

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
                  onClick={onClose}
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
        onClick={onClose}
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
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 w-64 h-screen
          bg-white dark:bg-dark-card
          border-r border-light-border dark:border-dark-border
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          overflow-y-auto custom-scrollbar
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-light-border dark:border-dark-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-gray-900 font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">ByeWind</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-theme"
          >
            <HiX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-6">
          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Favorites
            </h3>
            <div className="space-y-1">
              {menuItems.map((item) => renderMenuItem(item))}
            </div>
          </div>

          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Dashboards
            </h3>
            <div className="space-y-1">
              {dashboards.map((item) => renderMenuItem(item))}
            </div>
          </div>

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
    </>
  );
};

export default MobileSidebar;

