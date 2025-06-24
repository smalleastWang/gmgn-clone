import React from 'react';
import { Shield } from 'lucide-react';

const FishingDetection: React.FC = () => {
  const detectionItems = [
    { label: '黑名单', value: '0 (0%)', color: 'text-green-500' },
    { label: '未购买', value: '0 (0%)', color: 'text-green-500' },
    { label: '卖出量大于买入量', value: '0 (0%)', color: 'text-green-500' },
    { label: '五秒内完成买/卖', value: '0 (0%)', color: 'text-green-500' },
  ];

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center space-x-2 mb-6">
        <Shield className="w-5 h-5 text-white" />
        <h3 className="text-white font-medium">钓鱼检测</h3>
      </div>
      
      <div className="space-y-4">
        {detectionItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-300 text-sm">{item.label}:</span>
            </div>
            <span className={`text-sm ${item.color}`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishingDetection;