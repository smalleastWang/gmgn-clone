import React, { useState } from 'react';
import { 
  Search, 
  Target, 
  RotateCcw, 
  Folder, 
  Menu, 
  ChevronDown, 
  Copy, 
  Star,
  AlertTriangle,
  CheckCircle,
  Zap,
  Filter,
  Flame,
  TrendingUp,
  User
} from 'lucide-react';

function Trend() {
  const [activeTimeframe, setActiveTimeframe] = useState('1h');
  const [activeTab, setActiveTab] = useState('热门');

  const timeframes = ['1m', '5m', '1h', '6h', '24h'];
  const tabs = ['热门', '下个蓝筹'];

  const hotTokens = [
    {
      name: 'TRUMPE',
      address: 'EMA2C...ump',
      volume: '298.7K',
      marketCap: '$1.7M',
      avatar: '🇺🇸',
      verified: true,
      hasFlame: false,
      time: '15h'
    },
    {
      name: 'STOPWA',
      address: 'BgjBE...ump',
      volume: '261K',
      marketCap: '$261.3K',
      avatar: '🛑',
      verified: true,
      hasFlame: false,
      time: '1h'
    },
    {
      name: 'PTS',
      address: 'GLXRF...UMP',
      volume: '134.3K',
      marketCap: '$87.6K',
      avatar: '🎯',
      verified: true,
      hasFlame: false,
      time: '29m'
    },
    {
      name: 'Peace',
      address: '3Ypvd...UMP',
      volume: '168.1K',
      marketCap: '$134.6K',
      avatar: '☮️',
      verified: true,
      hasFlame: false,
      time: '36m'
    },
    {
      name: 'FOMO',
      address: '2DbDY...ump',
      volume: '94.2K',
      marketCap: '$248.4K',
      avatar: '😱',
      verified: true,
      hasFlame: true,
      time: '33m'
    },
    {
      name: 'VERNUS',
      address: '9wk5J...BLV',
      volume: '274.7K',
      marketCap: '$472.2K',
      avatar: '🌟',
      verified: true,
      hasFlame: true,
      time: '51m'
    },
    {
      name: 'CEASEF',
      address: 'AVFyX...ump',
      volume: '6.4K',
      marketCap: '$3.7K',
      avatar: '👑',
      verified: true,
      hasFlame: true,
      time: '2h'
    },
    {
      name: 'PEPESO',
      address: 'BgKPZ...ump',
      volume: '221.5K',
      marketCap: '$1M',
      avatar: '🐸',
      verified: true,
      hasFlame: false,
      time: '4h'
    },
    {
      name: 'tablec',
      address: '7j6ZV...ump',
      volume: '126.6K',
      marketCap: '$115K',
      avatar: '📊',
      verified: true,
      hasFlame: false,
      time: '26m'
    },
    {
      name: 'TIT',
      address: '6Cu7R...ump',
      volume: '151.8K',
      marketCap: '$107.4K',
      avatar: '🔥',
      verified: true,
      hasFlame: false,
      time: '15m'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto">
        <div className="bg-gray-900 pl-4 py-3 border-b border-gray-800">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div className="bg-gray-900 px-2 py-3 border-b border-gray-800">
          <div className="flex justify-end">
            <div className="flex">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setActiveTimeframe(timeframe)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTimeframe === timeframe
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      {/* Filter Section */}
      <div className="bg-gray-900 px-4 py-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* 过滤Devs */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                <User className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-gray-300 text-sm">过滤Devs</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* 筛选 */}
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
              <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                <Filter className="w-3 h-3 text-gray-300" />
              </div>
              <span className="text-gray-300 text-sm">筛选</span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-green-500" />
              <div className="flex items-center space-x-1">
                <div className="w-4 h-1 bg-purple-500 rounded"></div>
                <div className="w-4 h-1 bg-blue-500 rounded"></div>
                <div className="w-4 h-1 bg-green-500 rounded"></div>
              </div>
              <span className="text-white font-medium">0</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">P1</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Headers */}
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 px-3 py-1 rounded text-sm text-white">
              <span>币种</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <Filter className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1 rounded text-sm text-white">
                <span>池子</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <Filter className="w-4 h-4 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1 rounded text-sm text-white">
                <span>市值</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <Filter className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Hot Tokens List */}
      <div className="px-4 py-2">
        {hotTokens.map((token, index) => (
          <div key={index} className="flex items-center justify-between py-4 border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
            {/* Left Section - Token Info */}
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-gray-600 hover:text-yellow-500 cursor-pointer" />
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-lg">
                  {token.avatar}
                </div>
              </div>

              <div className="">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-white font-medium text-sm">{token.name}</span>
                  {token.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                  {/* <div className="w-3 h-3 bg-purple-500 rounded-sm"></div> */}
                  {token.verified && <div className="w-3 h-3 bg-green-500 rounded-sm"></div>}
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <span>{token.time}</span>
                  <span>{token.address}</span>
                  <Copy className="w-3 h-3 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Middle Section - Volume */}
            <div className="flex items-center px-3 gap-1">
              <div className="text-white font-medium text-sm">{token.volume}</div>
              {token.hasFlame && <Flame className="w-4 h-4 text-orange-500 mx-auto mt-1" />}
            </div>

            {/* Right Section - Market Cap & Action */}
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <div className="text-yellow-500 font-medium text-sm">{token.marketCap}</div>
              </div>
              
              <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <Zap className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trend;