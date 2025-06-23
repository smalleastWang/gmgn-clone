import React, { useState } from 'react';
import { Eye, EyeOff, Send, QrCode } from 'lucide-react';
import './style.scss';
import { cn } from '@/utils/utils';

interface LoginModalProps {
  isOpen: boolean;
  isAnimation: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToRegister, isAnimation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('登录:', formData);
  };

  if (!isOpen) return null;

  return (
    <div className={cn('login-modal-overlay', { 'not-animation': !isAnimation })}  onClick={onClose}>
      <div className={cn('login-modal', { 'not-animation': !isAnimation })} onClick={(e) => e.stopPropagation()}>
        <div className="login-modal__header">
          <h2 className="login-modal__title">登录</h2>
          <button 
            className="login-modal__close-btn"
            onClick={onClose}
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="login-modal__content">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="register-link">
              还没有账号？
              <button type="button" className="link-btn" onClick={onSwitchToRegister}>
                立即注册
              </button>
            </div>

            <div className="form-group">
              <label className="form-label">邮箱</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="输入邮箱"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">密码</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="输入密码"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="forgot-password">
              <button type="button" className="forgot-btn">
                忘记密码？
              </button>
            </div>

            <button type="submit" className="submit-btn">
              登录
            </button>
          </form>

          <div className="social-login">
            <div className="divider">
              <span>或者</span>
            </div>
            
            <div className="social-buttons">
              <button className="social-btn">
                <div className="social-icon telegram">
                  <Send size={20} />
                </div>
                <span className="social-label">Telegram</span>
              </button>
              
              <button className="social-btn">
                <div className="social-icon phantom">
                  👻
                </div>
                <span className="social-label">Phantom</span>
              </button>
              
              <button className="social-btn">
                <div className="social-icon qrcode">
                  <QrCode size={20} />
                </div>
                <span className="social-label">APP扫码</span>
              </button>
            </div>
          </div>

          <div className="bottom-links">
            <a className="wallet-link">
              连接插件钱包交易 <span className="arrow">→</span>
            </a>
            
            <div className="footer-links">
              <a   href="#" className="footer-link">服务条款</a>
              <span style={{color: '#333'}}>|</span>
              <a href="#" className="footer-link">隐私政策</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;