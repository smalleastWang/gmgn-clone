import React, { useState } from 'react';
import { Search, Filter, Zap, Crown, Copy } from 'lucide-react';
import './trading.scss';

const Trading = () => {
  const [selectedSort, setSelectedSort] = useState('新创建');
  const [selectedFilter] = useState('0');

  const tokens = [
    {
      id: 1,
      name: 'CORNH...',
      fullName: 'cornholio',
      avatar: '/lovable-uploads/5b919619-751a-4bcb-913e-9d1d8ace9d71.png',
      time: '4s',
      address: '8b4vt...ump',
      holders: 81,
      replies: 0,
      transactions: 0,
      percentages: { pink: '100%', green: '21%', orange: '100%' },
      volume: '$0',
      marketCap: '$0',
      hasLightning: true
    },
    {
      id: 2,
      name: 'SATOS...',
      fullName: 'cornholio',
      avatar: '/lovable-uploads/5b919619-751a-4bcb-913e-9d1d8ace9d71.png',
      time: '8s',
      address: '2ULVX...ump',
      holders: 6,
      replies: 0.0020,
      transactions: 5,
      percentages: { main: '36.7%', green: '10%', orange: '10%' },
      volume: '$1.5K',
      marketCap: '$7K',
      hasLightning: true,
      timer: 5
    },
    {
      id: 3,
      name: 'MPI69...',
      fullName: 'Medicine Price Index',
      tag: 'Medicine',
      avatar: 'MP',
      time: '9s',
      address: 'dKyfA...ump',
      holders: 1,
      replies: 0,
      transactions: 0,
      percentages: { main: '0%', green: '7%', orange: '7%' },
      volume: '$0',
      marketCap: '$29.8',
      hasLightning: true,
      timer: 1
    },
    {
      id: 4,
      name: 'BTCOR...',
      fullName: 'btcornholio',
      avatar: 'BT',
      time: '11s',
      address: 'G3dEq...Zpm',
      holders: 1,
      replies: 0.00011,
      transactions: 0,
      percentages: { main: '14.9%', green: '10%', orange: '10%' },
      volume: '$0',
      marketCap: '$30.96',
      hasLightning: true,
      timer: 1
    },
    {
      id: 5,
      name: 'CORNH...',
      fullName: 'NEED BTC FOR MY POR...',
      avatar: '/lovable-uploads/5b919619-751a-4bcb-913e-9d1d8ace9d71.png',
      time: '14s',
      address: 'AC5Ww...88x',
      holders: 4,
      replies: 0.0061,
      transactions: 3,
      percentages: { main: '4.3%', green: '3%', orange: '3%' },
      volume: '$334.1',
      marketCap: '$4.3K',
      hasLightning: true,
      timer: 1,
      hasKing: true,
      kingCount: 7
    },
    {
      id: 6,
      name: 'FUCKE...',
      fullName: 'LIVE ON KICK',
      avatar: '/lovable-uploads/5b919619-751a-4bcb-913e-9d1d8ace9d71.png',
      time: '17s',
      address: 'HbNEa...3Qx',
      holders: 28,
      replies: 0.016,
      transactions: 9,
      percentages: { main: '27.8%', green: '17%', orange: '17%' },
      volume: '$2.8K',
      marketCap: '$17.4K',
      hasLightning: true,
      timer: 2
    }
  ];

  return (
    <React.Fragment>
      {/* Warning Banner */}
      <div className="warning-banner">
        <span className="warning-icon">⚠</span>
        <span className="warning-text">推特监控和刮刀正在升级暂不可用，敬请期待</span>
        <button className="close-btn">×</button>
      </div>

      {/* Battle Section */}
      <div className="battle-section">
        <div className="battle-header">
          <span className="battle-icon">🎯</span>
          <span className="battle-text">战壕</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        
        <div className="battle-controls">
          <div className="view-controls">
            <div className="grid-icon">▦</div>
            <div className="list-icon">☰</div>
          </div>
          <div className="settings-icon">⚙</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filter-group">
          <span className="filter-icon">🚀</span>
          <select 
            value={selectedSort} 
            onChange={(e) => setSelectedSort(e.target.value)}
            className="filter-select"
          >
            <option>新创建</option>
            <option>热门</option>
            <option>成交量</option>
          </select>
          <span className="dropdown-arrow">▼</span>
        </div>

        <div className="filter-badge">
          <span className="filter-icon">≡</span>
          <span>{selectedFilter}</span>
        </div>

        <div className="page-selector">
          <span>P1</span>
          <span className="dropdown-arrow">▼</span>
        </div>

        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="搜索" />
        </div>

        <div className="filter-icon-btn">
          <Filter size={16} />
        </div>
      </div>

      {/* Token List */}
      <div className="token-list">
        {tokens.map((token) => (
          <div key={token.id} className="token-item">
            <div className="token-left">
              <div className="token-avatar">
                {token.avatar.startsWith('/') ? (
                  <img src={token.avatar} alt="" />
                ) : (
                  <span className="avatar-text">{token.avatar}</span>
                )}
                <div className="verified-badge">✓</div>
              </div>
              
              <div className="token-info">
                <div className="token-header">
                  <span className="token-name">{token.name}</span>
                  {token.tag && (
                    <span className="token-tag">{token.tag}</span>
                  )}
                  <span className="token-fullname">{token.fullName}</span>
                </div>
                
                <div className="token-details">
                  <span className="time">{token.time}</span>
                  <span className="address">{token.address}</span>
                  <Copy size={12} className="copy-icon" />
                  <Search size={12} className="search-icon" />
                  {token.hasKing && (
                    <div className="king-badge">
                      <Crown size={12} />
                      <span>{token.kingCount}</span>
                    </div>
                  )}
                </div>

                <div className="token-stats">
                  <div className="stat-item">
                    <span className="stat-icon">👥</span>
                    <span>{token.holders}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-icon">💬</span>
                    <span>{token.replies}</span>
                  </div>
                  <div className="stat-item">
                    <span>TX</span>
                    <span>{token.transactions}</span>
                  </div>
                </div>

                <div className="percentages">
                  {token.percentages.pink && (
                    <span className="percentage pink">💗 {token.percentages.pink}</span>
                  )}
                  {token.percentages.green && (
                    <span className="percentage green">🏠 {token.percentages.green}</span>
                  )}
                  {token.percentages.orange && (
                    <span className="percentage orange">🦋 {token.percentages.orange}</span>
                  )}
                  {token.percentages.main && (
                    <span className="percentage main">{token.percentages.main}</span>
                  )}
                  {token.timer && (
                    <div className="timer">
                      <span className="timer-icon">⏱</span>
                      <span>{token.timer}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="token-right">
              <div className="market-data">
                <div className="volume">
                  <span className="label">V</span>
                  <span className="value">{token.volume}</span>
                </div>
                <div className="market-cap">
                  <span className="label">MC</span>
                  <span className="value">{token.marketCap}</span>
                </div>
              </div>
              
              {token.hasLightning && (
                <div className="lightning-icon">
                  <Zap size={20} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>

      
  );
};

export default Trading;