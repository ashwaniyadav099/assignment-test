import React from 'react';
import { HiSearch, HiStar, HiBell, HiClock, HiMoon, HiSun, HiMenu } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-dark-card border-b border-light-border dark:border-dark-border px-4 lg:px-6 flex items-center justify-between transition-theme">
      {/* Left side - Breadcrumb */}
      <div className="flex items-center gap-3">
        <Button variant="icon" className="lg:hidden" onClick={onMenuClick}>
          <HiMenu className="w-5 h-5" />
        </Button>
        <Button variant="icon">
          <MdDashboard className="w-5 h-5" />
        </Button>
        <Button variant="icon">
          <HiStar className="w-5 h-5" />
        </Button>
        <div className="flex items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">Dashboards</span>
          <span className="mx-2 text-gray-400 dark:text-gray-600">/</span>
          <span className="text-gray-900 dark:text-white font-medium">Default</span>
        </div>
      </div>

      {/* Right side - Search and actions */}
      <div className="flex items-center gap-3">
        <div className="w-80 hidden md:block">
          <Input
            type="search"
            placeholder="Search"
            icon={<HiSearch className="w-5 h-5" />}
          />
        </div>

        <Button variant="icon" onClick={toggleTheme}>
          {theme === 'light' ? (
            <HiMoon className="w-5 h-5" />
          ) : (
            <HiSun className="w-5 h-5" />
          )}
        </Button>

        <Button variant="icon">
          <HiClock className="w-5 h-5" />
        </Button>

        <Button variant="icon">
          <HiBell className="w-5 h-5" />
        </Button>

        <Button variant="icon">
          <MdDashboard className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

