import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-50 dark:opacity-30 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 animate-gradient-xy"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-300 to-secondary-300 dark:from-primary-700 dark:to-secondary-700 blur-3xl opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
      
      <div className="absolute top-3/4 left-2/3 w-96 h-96 rounded-full bg-gradient-to-r from-secondary-300 to-primary-300 dark:from-secondary-700 dark:to-primary-700 blur-3xl opacity-30 animate-float" style={{ animationDelay: '-2s' }}></div>
      
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700 blur-3xl opacity-20 animate-float" style={{ animationDelay: '-4s' }}></div>
    </div>
  );
};

export default AnimatedBackground;