import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const TokenHoldings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('最近盈亏');
  const tabs = ['最近盈亏', '持有代币', '活动', '部署代币'];
  
  const columns = ['币种', '总额', 'SOL', '数量', '市值', '利润', '时长', 'CA'];

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800">
      {/* Tab Navigation */}
      <div className="flex space-x-6 px-6 pt-6 border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'text-white border-b-2 border-green-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Table Header */}
      <div className="flex px-3 py-4 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center justify-between mr-3">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs">类型</span>
            <Filter size={12} className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        <div className="flex gap-4 text-xs text-gray-400 font-medium">
          {columns.map((column) => (
            <div key={column} className="text-center">
              {column}
            </div>
          ))}
        </div>
        
      </div>
      <div className="text-center py-12">
        <div className="text-gray-500 text-sm">暂无数据</div>
      </div>
    </div>
  );
};

export default TokenHoldings;