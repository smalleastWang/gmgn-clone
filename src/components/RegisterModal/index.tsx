import React, { useState } from 'react';
import { X, Eye, EyeOff, Send } from 'lucide-react';
import './style.scss';
import { cn } from '@/utils/utils';

interface RegisterModalProps {
  isOpen: boolean;
  isAnimation: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onSwitchToLogin, isAnimation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    inviteCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('注册:', formData);
  };

  if (!isOpen) return null;

  return (
    <div className={cn('register-modal-overlay', { 'not-animation': !isAnimation })} onClick={onClose}>
      <div className={cn('register-modal', { 'not-animation': !isAnimation })} onClick={(e) => e.stopPropagation()}>
        <div className="register-modal__header">
          <h2 className="register-modal__title">注册</h2>
          <button 
            className="register-modal__close-btn"
            onClick={onClose}
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="register-modal__content">
          <form onSubmit={handleSubmit} className="register-form">
            <div className="login-link">
              已有账号？
              <button type="button" className="link-btn" onClick={onSwitchToLogin}>
                去登录
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
              <label className="form-label">邀请码 (选填)</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="inviteCode"
                  placeholder="邀请码 (选填)"
                  value={formData.inviteCode}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="invite-note">
              邀请码绑定后不可修改，请保证输入正确的邀请码
            </div>

            <button type="submit" className="submit-btn">
              注册
            </button>
          </form>

          <div className="social-login">
            <div className="divider">
              <span>其它注册方式</span>
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
            </div>
          </div>

          <div className="bottom-links">
            <div className="footer-links">
              <a href="#" className="footer-link">服务条款</a>
              <span style={{color: '#666'}}>|</span>
              <a href="#" className="footer-link">隐私政策</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;