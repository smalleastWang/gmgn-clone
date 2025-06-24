import React from 'react';
import UserProfile from './UserProfile';
import PnLSection from './PnLSection';
import FishingDetection from './FishingDetection';
import TokenHoldings from './TokenHoldings';

function App() {

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="px-4 py-6 space-y-6">
        <UserProfile />
        <PnLSection />
        <FishingDetection />
        <TokenHoldings />
      </div>
    </div>
  );
}

export default App;