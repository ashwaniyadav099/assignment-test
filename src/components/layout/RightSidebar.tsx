import React from 'react';
import { HiBell, HiUserGroup, HiSparkles } from 'react-icons/hi';
import Avatar from '../ui/Avatar';
import { notifications, activities, contacts } from '../../data/mockData';

const RightSidebar: React.FC = () => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'bug':
        return <HiBell className="w-4 h-4" />;
      case 'user':
        return <HiUserGroup className="w-4 h-4" />;
      case 'subscription':
        return <HiSparkles className="w-4 h-4" />;
      default:
        return <HiBell className="w-4 h-4" />;
    }
  };

  return (
    <aside className="hidden xl:block screen1440:w-[280px] w-80 h-screen bg-white dark:bg-dark-card border-l border-light-border dark:border-dark-border overflow-y-auto custom-scrollbar transition-theme">
      <div className="p-6 space-y-6">
        {/* Notifications */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Notifications
          </h3>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white font-medium truncate">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Activities
          </h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <Avatar src={activity.user.avatar} alt={activity.user.name} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white font-medium truncate">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Contacts
          </h3>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-center gap-3 group cursor-pointer">
                <Avatar src={contact.avatar} alt={contact.name} size="sm" />
                <span className="text-sm text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {contact.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;

