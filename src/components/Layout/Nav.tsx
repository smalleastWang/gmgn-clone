import React, { useState } from 'react';
import { Search } from 'lucide-react';
import LoginModal from '../LoginModal';
import RegisterModal from '../Register';
import './style.scss'
import { DropdownMenu, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

export default function Nav() {
  const [isAnimation, setAnimation] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  return (
    <div className="trading-header">
      <div className="header-left">
        <div className="logo">🐸</div>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="px-3 py-2 bg-blue-500 text-white rounded">
            Open
          </button>
        </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent
              sideOffset={5}
              className="rounded-md bg-gray-600 p-2"
            >
              <DropdownMenuItem >
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem >
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>

        </DropdownMenu>
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
