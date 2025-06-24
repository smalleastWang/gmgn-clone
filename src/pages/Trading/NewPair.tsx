import React, { useState } from 'react';
import { 
  Search, 
  Target, 
  RotateCcw, 
  Folder, 
  Menu, 
  ChevronDown, 
  Copy, 
  Share, 
  User,
  Filter,
  Star,
  AlertTriangle,
  CheckCircle,
  Zap,
  Settings
} from 'lucide-react';

function NewPair() {
  const [activeTimeframe, setActiveTimeframe] = useState('1m');
  const [activeFilter, setActiveFilter] = useState('币种');
  const [activePool, setActivePool] = useState('池子');

  const timeframes = ['1m', '5m', '1h', '6h', '24h'];

  const tokens = [
    {
      name: 'TSLA',
      symbol: 'TSLA',
      address: '2s 3sRMp...ump',
      price: 'WSOL 0.015/0.015',
      change: '0%',
      avatar: '🚗',
      verified: true,
      hasWarning: false
    },
    {
      name: 'sad',
      symbol: 'sad',
      address: '6s 6zPg7...ray',
      price: 'SOL 0/0',
      change: '',
      avatar: '😢',
      verified: false,
      hasWarning: true
    },
    {
      name: 'blu',
      symbol: 'blu',
      address: '6s 85ydB...ump',
      price: 'SOL 0.015/0.015',
      change: '0%',
      avatar: '🔵',
      verified: true,
      hasWarning: false
    },
    {
      name: 'Vernus',
      symbol: 'Vernus',
      address: '15s CiqvK...ray',
      price: 'SOL 0/0',
      change: '',
      avatar: '🌟',
      verified: false,
      hasWarning: true
    },
    {
      name: 'USDP',
      symbol: 'USDP',
      address: '27s FlbVr...ump',
      price: 'SOL 0.002/0.015',
      change: '-80.7%',
      avatar: '💵',
      verified: true,
      hasWarning: true,
      changeColor: 'text-red-500'
    },
    {
      name: 'BOMBGU',
      symbol: 'BOMBGU',
      address: '27s DFqAx...ump',
      price: 'SOL 812.4M/150',
      change: '+>99K%',
      avatar: '💣',
      verified: false,
      hasWarning: false,
      changeColor: 'text-green-500'
    },
    {
      name: 'LIED',
      symbol: 'LIED',
      address: '29s B9FJP...x5Z',
      price: 'SOL 96.7/94.8',
      change: '+1.9%',
      avatar: '🤥',
      verified: false,
      hasWarning: false,
      changeColor: 'text-green-500'
    },
    {
      name: 'CF',
      symbol: 'CF',
      address: '31s EB9Fw...ump',
      price: 'SOL 0.106/0.015',
      change: '+604.4%',
      avatar: '☕',
      verified: true,
      hasWarning: true,
      changeColor: 'text-green-500'
    },
    {
      name: 'KaitoA',
      symbol: 'KaitoA',
      address: '36s 5A9B4...nwW',
      price: 'SOL 80.5/80.5',
      change: '0%',
      avatar: '🤖',
      verified: false,
      hasWarning: false
    },
    {
      name: 'fish',
      symbol: 'fish',
      address: '50s AE5Xg...ray',
      price: 'SOL 0.099/5',
      change: '-98%',
      avatar: '🐟',
      verified: false,
      hasWarning: true,
      changeColor: 'text-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* Time Filter */}
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-800">
        <div className="flex space-x-1">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setActiveTimeframe(timeframe)}
              className={`px-4 py-[6px] rounded-md text-xs font-medium transition-colors ${
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

      {/* Filter Section */}
      <div className="bg-gray-900 px-4 py-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* 过滤Devs */}
            <div className="flex items-center space-x-0">
              <User className="w-4 h-4 text-gray-400 mr-1" />
              <span className="text-gray-300 text-xs">过滤Devs</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* 筛选 */}
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
              <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                <Filter className="w-3 h-3 text-gray-300" />
              </div>
              <span className="text-gray-300 text-xs">筛选</span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-green-500" />
              <div className="flex flex-col" style={{gap: '1px'}}>
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
              <Settings className="w-4 h-4 bg-gray-600"></Settings>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveFilter('币种')}
              className={`flex items-center space-x-1 px-3 py-1 rounded text-sm ${
                activeFilter === '币种' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>币种</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <Filter className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActivePool('池子')}
              className={`flex items-center space-x-1 px-3 py-1 rounded text-sm ${
                activePool === '池子' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>池子</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">初始</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <Filter className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Token List */}
      <div className="px-4 py-2">
        {tokens.map((token, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
            {/* Left Section - Token Info */}
            <div className="flex items-center space-x-3 flex-1">
              <Star className="w-4 h-4 text-gray-600 hover:text-yellow-500 cursor-pointer" />
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-sm">
                  {token.avatar}
                </div>
                <div className="w-3 h-3 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">{token.name}</span>
                  {token.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                  {token.hasWarning && <AlertTriangle className="w-4 h-4 text-red-500" />}
                  {token.verified && <div className="w-3 h-3 bg-green-500 rounded-sm"></div>}
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>{token.address}</span>
                  <Copy className="w-3 h-3 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Right Section - Price & Change */}
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-white font-medium">{token.price}</div>
                {token.change && (
                  <div className={`text-sm ${token.changeColor || 'text-gray-400'}`}>
                    {token.change}
                  </div>
                )}
              </div>
              
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewPair;