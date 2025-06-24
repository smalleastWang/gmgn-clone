import React, { useState } from 'react';
import { 
  Filter, 
  Edit, 
  Zap, 
  Menu, 
  ChevronDown, 
  Users, 
  TrendingUp,
  Copy,
  Flame,
  Settings,
  ChevronUp
} from 'lucide-react';

function Monitor() {
  const [activeTab, setActiveTab] = useState('KOL');
  const [activeTimeframe, setActiveTimeframe] = useState('24h');
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const tabs = ['追踪', '聪明钱', 'KOL'];
  const timeframes = ['1m', '5m', '15m', '1h', '6h', '24h'];

  const kolData = [
    {
      id: 1,
      name: 'WSB',
      address: 'BQ9LD...UMP',
      followers: 189,
      volume24h: '$75.4K',
      marketCap: '$27.7K',
      change: '+28.22%',
      kolInflow: '+$120',
      multiplier: '+< 1X',
      avatar: '🔥',
      verified: true,
      holdings: [
        { name: 'SNAKEBOARD', amount: '$4.62', trades: '4/4', inflow: '+$4.28', duration: '减仓' },
        { name: 'Aasdasd', amount: '$4.99', trades: '6/6', inflow: '+$2.52', duration: '减仓' },
        { name: 'Build On Sola...', amount: '$54.1', trades: '3/2', inflow: '+$53.92', duration: '加仓' }
      ]
    },
    {
      id: 2,
      name: 'Bulls...',
      address: 'GGZRH...ump',
      followers: 206,
      volume24h: '$12.6M',
      marketCap: '$140.5K',
      change: '+389.2%',
      kolInflow: '+$4K',
      multiplier: '+2X',
      avatar: '🐂',
      verified: true,
      holdings: [
        { name: 'Build On Sola...', amount: '$1K', trades: '96/102', inflow: '+$253', duration: '4s 加仓', icon: '🏗️' },
        { name: 'lorier', amount: '$152', trades: '108/109', inflow: '+$705', duration: '4s 减仓', icon: '🌟' },
        { name: 'Aasdasd', amount: '$877', trades: '101/103', inflow: '-$389', duration: '7s 加仓', icon: '👤' }
      ]
    },
    {
      id: 3,
      name: 'RICKY',
      address: '3AMsu...ump',
      followers: 3,
      volume24h: '$0',
      marketCap: '$0',
      change: '0%',
      kolInflow: '+$817',
      multiplier: '',
      avatar: '🎯',
      verified: false,
      holdings: []
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-4 pt-0">
        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-1 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-white border-b-2 border-green-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Time Filter */}
        <div className="flex space-x-2 mb-4">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setActiveTimeframe(timeframe)}
              className={`px-3 py-[5px] rounded-lg text-xs transition-colors ${
                activeTimeframe === timeframe
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-xs">筛选</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
              <span className="text-white text-xs">TP/SL</span>
              <Edit className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
              <Zap className="w-4 h-4 text-green-500" />
              <Menu className="w-4 h-4 text-purple-500" />
              <span className="text-white text-xs">0</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-white">P1</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
            <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* KOL Cards */}
      <div className="p-4 space-y-4">
        {kolData.map((kol) => (
          <div key={kol.id} className="bg-gray-900 rounded-xl border border-yellow-600 p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl">
                  {kol.avatar}
                </div>
                
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="text-white font-bold text-base">{kol.name}</span>
                    <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    {kol.verified && <Flame className="w-4 h-4 text-orange-500" />}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span>{kol.address.slice(0, 2)}</span>
                    <span>{kol.address}</span>
                    <Copy className="w-3 h-3 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-1">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-500 font-bold">{kol.followers}</span>
                  <span className="text-green-500 font-bold">{kol.kolInflow}</span>
                </div>
                <div className="text-sm text-gray-400">24h KOL净流入</div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-white font-bold">{kol.followers}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">24h V </span>
                  <span className="text-yellow-500 font-bold">{kol.volume24h}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">MC </span>
                  <span className="text-yellow-500 font-bold">{kol.marketCap}</span>
                </div>
                <div className="text-green-500 font-bold">{kol.change}</div>
              </div>
              
              {kol.multiplier && (
                <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-bold flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{kol.multiplier}</span>
                </div>
              )}
            </div>

            {/* Holdings Table */}
            {kol.holdings.length > 0 && (
              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-2 text-xs text-gray-400 font-medium pb-2 border-b border-gray-800">
                  <div>钱包</div>
                  <div className="text-center">金额</div>
                  <div className="text-center">24h交易数</div>
                  <div className="text-center">24h净流入</div>
                  <div className="text-center">时长</div>
                </div>
                
                {kol.holdings.slice(0, expandedCards.includes(kol.id) ? kol.holdings.length : 3).map((holding, index) => (
                  <div key={index} className="grid grid-cols-5 gap-2 py-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{holding.name}</span>
                    </div>
                    <div className="text-center text-yellow-500 font-medium">{holding.amount}</div>
                    <div className="text-center text-white">{holding.trades}</div>
                    <div className="text-center text-green-500 font-medium">{holding.inflow}</div>
                    <div className="text-center">
                      <span className={`text-sm ${
                        holding.duration.includes('加仓') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {holding.duration}
                      </span>
                    </div>
                  </div>
                ))}
                
                {kol.holdings.length > 3 && (
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => toggleExpanded(kol.id)}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {expandedCards.includes(kol.id) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Action Button */}
            <div className="flex justify-end mt-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Zap className="w-5 h-5 text-green-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Monitor