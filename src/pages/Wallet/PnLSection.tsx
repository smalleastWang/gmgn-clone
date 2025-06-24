import React, { useState } from 'react';

const PnLSection: React.FC = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('7d');
  const timeframes = ['1d', '7d', '30d', '全部'];

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      {/* Tab Navigation */}
      <div className="flex space-x-6 mb-6">
        <button className="text-white font-medium border-b-2 border-green-500 pb-2">
          7D PnL
        </button>
        <button className="text-gray-400 hover:text-white pb-2">
          利润
        </button>
        <button className="text-gray-400 hover:text-white pb-2">
          盈利分布
        </button>
      </div>
      
      {/* Time Filter */}
      <div className="flex justify-end mb-6">
        <div className="flex space-x-2 bg-gray-800 rounded-lg p-1">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setActiveTimeframe(timeframe)}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                activeTimeframe === timeframe
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>
      
      {/* PnL Stats */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-gray-400 text-sm">7D 已实现利润</h3>
            <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-400">SOL</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">0%</div>
            <div className="text-sm text-gray-400">0 SOL</div>
            <div className="space-y-1">
              <div className="text-sm text-gray-400">总盈亏</div>
              <div className="text-sm text-gray-400">未实现利润</div>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-gray-400 text-sm mb-2">胜率</div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">0%</div>
            <div className="text-sm text-red-500">0 SOL (-)</div>
            <div className="text-sm text-red-500">0 SOL</div>
          </div>
        </div>
      </div>
      
      {/* Chart Placeholder */}
      <div className="mt-8 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="flex space-x-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PnLSection;