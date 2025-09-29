import React from 'react';
import { RestrictedDashboard } from '../components';

const RestrictedPage = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ filter: 'blur(10px)', pointerEvents: 'none' }}>
        <RestrictedDashboard />
      </div>

      <div className="fixed inset-0 bg-white/80 z-[1000] flex justify-center items-center">
        <div className="text-center dark-gray-text max-w-md px-6">
          <h2 className="text-2xl font-semibold mb-2">Access Unavailable</h2>
          <p>
            The internal dashboard and tools are temporarily unavailable. 
            Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestrictedPage;