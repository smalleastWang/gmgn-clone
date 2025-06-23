import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';
import './style.scss'
import { DropdownMenu, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import logo from '@/assets/logo_small.svg'
import solana from '@/assets/solana.webp'
import ether from '@/assets/ether.webp'
import base from '@/assets/base.webp'
import bsc from '@/assets/bsc.svg'
import tron from '@/assets/tron.webp'
import Select from '@/components/Select';

export default function Nav() {
  const [isAnimation, setAnimation] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const chainOptions = [
    {icon: solana, label: 'SOL', value: 'solana'},
    {icon: ether, label: 'ETH', value: 'ether'},
    {icon: base, label: 'Base', value: 'base'},
    {icon: bsc, label: 'BSC', value: 'bsc'},
    {icon: tron, label: 'Tron', value: 'tron'},
  ]
  const [chainValue, setChainValue] = useState(chainOptions[0].value);
  return (
    <div className="trading-header">
      <div className="header-left">
        <img className="logo" src={logo} alt="logo" width={24} height={24} />
        <Select 
          options={chainOptions}
          value={chainValue}
          onChange={setChainValue}
        />
        
        {/* <div className="network-selector">
          <div className="network-icon">≡</div>
          <span>SOL</span>
          <span className="dropdown-arrow">▼</span>
        </div> */}
        <div className="search-icon">
          <Search size={20} />
        </div>
        <div className="settings-icon">⚙</div>
      </div>
      <div className="header-right">
        <button className="register-btn" onClick={() => {
          setAnimation(true)
          setIsRegisterModalOpen(true)
        }}>注册</button>
        <button className="login-btn" onClick={() => {
          setAnimation(true)
          setIsLoginModalOpen(true)
        }}>登录</button>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        isAnimation={isAnimation}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToRegister={() => {
          setAnimation(false)
          setIsLoginModalOpen(false)
          setIsRegisterModalOpen(true)
        }}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        isAnimation={isAnimation}
        onClose={() => setIsRegisterModalOpen(false)}
        onSwitchToLogin={() => {
          setAnimation(false)
          setIsRegisterModalOpen(false)
          setIsLoginModalOpen(true)
        }}
      ></RegisterModal>
    </div>
  );
}
