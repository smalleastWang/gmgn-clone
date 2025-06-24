import React, { useState } from 'react';
import { 
  Wallet, 
  Bell, 
  Filter, 
  ChevronDown, 
  Copy,
  Leaf,
  TrendingUp
} from 'lucide-react';

function Discover() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [sortBy, setSortBy] = useState('7D PnL');

  const categories = ['全部', 'Pump聪明钱', '聪明钱', 'KOL/VC', '新钱包', '狙击者'];

  const leaderboardData = [
    {
      rank: 1,
      address: 'A4aVi...KBA',
      balance: '0.1',
      oneDayPnL: '--',
      oneDaySOL: '--',
      sevenDayPnL: '+16.6K%',
      sevenDaySOL: '+44.4 SOL',
      avatar: '🐸',
      verified: true,
      badge: '1st'
    },
    {
      rank: 2,
      address: '7Ep1w...BcQ',
      balance: '0',
      oneDayPnL: '+13.5K%',
      oneDaySOL: '+39.9 SOL',
      sevenDayPnL: '+13.5K%',
      sevenDaySOL: '+39.9 SOL',
      avatar: '🦊',
      verified: true,
      badge: '2nd'
    },
    {
      rank: 3,
      address: '9CZab...Tv2',
      balance: '0',
      oneDayPnL: '--',
      oneDaySOL: '--',
      sevenDayPnL: '+13K%',
      sevenDaySOL: '+38.1 SOL',
      avatar: '🐱',
      verified: true,
      badge: '3rd'
    },
    {
      rank: 4,
      address: 'EcFA2...byZ',
      balance: '0',
      oneDayPnL: '--',
      oneDaySOL: '--',
      sevenDayPnL: '+12.5K%',
      sevenDaySOL: '+39 SOL',
      avatar: '🐰',
      verified: true,
      badge: null
    },
    {
      rank: 5,
      address: '7xsHz...2aw',
      balance: '0',
      oneDayPnL: '+12.5K%',
      oneDaySOL: '+35.5 SOL',
      sevenDayPnL: '+12.5K%',
      sevenDaySOL: '+35.5 SOL',
      avatar: '🐻',
      verified: true,
      badge: null
    },
    {
      rank: 6,
      address: '9D67L...GKC',
      balance: '0',
      oneDayPnL: '--',
      oneDaySOL: '--',
      sevenDayPnL: '+10.9K%',
      sevenDaySOL: '+31.7 SOL',
      avatar: '🐼',
      verified: true,
      badge: null
    },
    {
      rank: 7,
      address: 'H8FBY...Vsq',
      balance: '0',
      oneDayPnL: '--',
      oneDaySOL: '--',
      sevenDayPnL: '+10.1K%',
      sevenDaySOL: '+34.2 SOL',
      avatar: '🐨',
      verified: true,
      badge: null
    },
    {
      rank: 8,
      address: '8UxhM...JZU',
      balance: '0.13',
      oneDayPnL: '--',
      oneDaySOL: '--',
      sevenDayPnL: '+7.9K%',
      sevenDaySOL: '+42.4 SOL',
      avatar: '🐯',
      verified: true,
      badge: null
    },
    {
      rank: 9,
      address: 'DUWf1...6qm',
      balance: '0.02',
      oneDayPnL: '+7.6K%',
      oneDaySOL: '+116.1 SOL',
      sevenDayPnL: '+7.6K%',
      sevenDaySOL: '+116.1 SOL',
      avatar: '🦁',
      verified: true,
      badge: null
    },
    {
      rank: 10,
      address: '82qx2...tv9',
      balance: '0.101',
      oneDayPnL: '--',
      oneDaySOL: '--',
      sevenDayPnL: '+7.4K%',
      sevenDaySOL: '+15.5 SOL',
      avatar: '🐸',
      verified: true,
      badge: null
    }
  ];

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case '1st':
        return 'bg-yellow-500 text-yellow-900';
      case '2nd':
        return 'bg-gray-400 text-gray-900';
      case '3rd':
        return 'bg-orange-600 text-orange-100';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-4 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-0">
            <h1 className="text-base font-bold text-white">牛人榜</h1>
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
              <Wallet className="w-4 h-4 text-gray-400" />
              <span className="text-white text-sm">钱包跟单</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
              <Bell className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm">0</span>
              <span className="text-gray-400 text-sm">延时通知</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-gray-900 px-4 py-4 pt-1 border-b border-gray-800">
        <div className="flex space-x-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-1 text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'text-white border-b-2 border-green-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-gray-900 px-4 py-1  border-b border-gray-800">
        <div className="grid grid-cols-12 gap-4 text-sm text-gray-400">
          <div className="col-span-6 flex items-center space-x-2">
            <span>钱包 / SOL 余额</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="col-span-6 flex items-center space-x-2">
            <span>1D PnL</span>
            <ChevronDown className="w-4 h-4" />
            <span className="text-xs bg-gray-700 rounded px-1">SOL</span>
            <Filter className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="px-4">
        {leaderboardData.map((trader) => (
          <div key={trader.rank} className="flex items-center py-4 border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
            <div className="grid grid-cols-12 gap-4 w-full items-center">
              {/* Wallet Info */}
              <div className="col-span-7 flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-lg">
                    {trader.avatar}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">{trader.address}</span>
                    <Copy className="w-3 h-3 text-gray-400 hover:text-white cursor-pointer" />
                    {trader.verified && <Leaf className="w-3 h-3 text-green-500" />}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <div className="w-3 h-3 bg-gray-600 rounded flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    <span>{trader.balance}</span>
                  </div>
                </div>
              </div>

              {/* 7D PnL */}
              <div className="col-span-3 text-center">
                <div className={`font-medium ${
                  trader.sevenDayPnL === '--' ? 'text-gray-500' : 
                  trader.sevenDayPnL.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {trader.sevenDayPnL}
                </div>
                <div className={`text-sm ${
                  trader.sevenDaySOL === '--' ? 'text-gray-500' : 
                  trader.sevenDaySOL.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {trader.sevenDaySOL}
                </div>
              </div>

              {/* Action Button */}
              <div className="col-span-2 flex justify-end">
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="px-4 py-6">
        <button className="w-full py-3 text-gray-400 hover:text-white font-medium transition-colors border border-gray-800 rounded-lg hover:border-gray-700">
          加载更多
        </button>
      </div>
    </div>
  );
}

export default Discover;