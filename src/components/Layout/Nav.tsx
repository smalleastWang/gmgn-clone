import React, { useState } from 'react';
import { Search } from 'lucide-react';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';
import './style.scss'
import logo from '@/assets/logo_small.svg'
import solana from '@/assets/solana.webp'
import ether from '@/assets/ether.webp'
import base from '@/assets/base.webp'
import bsc from '@/assets/bsc.svg'
import tron from '@/assets/tron.webp'
import Select from '@/components/Select';
import { userStore } from '@/store/user';
import DropDownMenu from './DropDownMenu';
import { useWallet } from '@/hooks/useWallet';

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

  const {isLogin, setLoginStatus, setToken} = userStore()
  const {disconnect} = useWallet();
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
        {
          isLogin ? (
            <DropDownMenu options={[
              {icon: <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.7 3.49988V11.5C1.7 11.9418 2.05818 12.3 2.5 12.3H11.5C11.9418 12.3 12.3 11.9418 12.3 11.5V6.49999C12.3 6.05816 11.9418 5.69999 11.5 5.69999H6V4.29999H11.5C12.715 4.29999 13.7 5.28496 13.7 6.49999V11.5C13.7 12.715 12.715 13.7 11.5 13.7H2.5C1.28498 13.7 0.300003 12.715 0.300003 11.5V3.49988H1.7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.300003 3.50005C0.300003 2.28502 1.28498 1.30005 2.5 1.30005H7.5C8.71503 1.30005 9.7 2.28502 9.7 3.50005V5.70005H2.5C1.28498 5.70005 0.300003 4.71508 0.300003 3.50005ZM2.5 2.70005C2.05818 2.70005 1.7 3.05822 1.7 3.50005C1.7 3.94188 2.05818 4.30005 2.5 4.30005H8.3V3.50005C8.3 3.05822 7.94183 2.70005 7.5 2.70005H2.5Z"></path></svg>, label: '我的钱包', path: 'address'},
              {icon: <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.300003 3.4998C0.300003 2.28478 1.28498 1.2998 2.5 1.2998H7.5C8.71503 1.2998 9.7 2.28478 9.7 3.4998V4.30011H11.5C12.715 4.30011 13.7 5.28508 13.7 6.50011V8H12.3V6.50011C12.3 6.05828 11.9418 5.70011 11.5 5.70011L2.5 5.6998C2.21777 5.6998 1.94795 5.64666 1.7 5.54983V11.5001C1.7 11.9419 2.05818 12.3001 2.5 12.3001H7.0211V13.7001H2.5C1.28498 13.7001 0.300003 12.7151 0.300003 11.5001V3.4998ZM2.5 4.2998C2.05824 4.2998 1.70011 3.94174 1.7 3.5C1.7 3.05817 2.05818 2.6998 2.5 2.6998H7.5C7.94183 2.6998 8.3 3.05798 8.3 3.4998V4.2998H2.5Z"></path><rect x="8.95779" y="9.52405" width="3.33929" height="1.40234"></rect><rect x="13.7" y="13.7002" width="4.74453" height="1.40234" transform="rotate(-180 13.7 13.7002)"></rect></svg>, label: '钱包管理'},
              {icon: <svg width="14" height="14" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.495 5.3033L6.49999 9.29828L4.00502 6.8033L4.99497 5.81335L6.49999 7.31838L9.50502 4.31335L10.495 5.3033Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.06662 1.43481C7.02307 1.42499 6.97787 1.42502 6.93433 1.43489L2.65208 2.40583C2.51542 2.43682 2.41842 2.55828 2.41842 2.6984V9.71985C2.41842 10.2179 2.70295 10.6721 3.15104 10.8895L6.43526 12.4826C6.79257 12.656 7.20951 12.6565 7.56724 12.484L10.8783 10.8875C11.3279 10.6708 11.6137 10.2157 11.6137 9.71654V2.69947C11.6137 2.5592 11.5165 2.43765 11.3797 2.40681L7.06662 1.43481ZM6.62476 0.0695478C6.87149 0.0136041 7.1276 0.0134368 7.37441 0.0690589L11.6875 1.04107C12.4629 1.21582 13.0137 1.90459 13.0137 2.69947V9.71654C13.0137 10.7532 12.4201 11.6984 11.4863 12.1486L8.17527 13.745C7.4323 14.1033 6.56634 14.1022 5.82423 13.7423L2.54001 12.1491C1.60936 11.6977 1.01842 10.7542 1.01842 9.71985V2.6984C1.01842 1.90435 1.56811 1.21607 2.34251 1.04049L6.62476 0.0695478Z"></path></svg>, label: '账户安全'},
              {icon: <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.70005C4.07289 1.70005 1.7 4.07294 1.7 7.00005C1.7 9.92716 4.07289 12.3 7 12.3C9.92711 12.3 12.3 9.92716 12.3 7.00005H13.7C13.7 10.7004 10.7003 13.7 7 13.7C3.2997 13.7 0.300003 10.7004 0.300003 7.00005C0.300003 3.29974 3.2997 0.300049 7 0.300049V1.70005Z"></path><path d="M11.053 6.38625L13.0203 4.41893C13.2723 4.16694 13.7031 4.34541 13.7031 4.70177V6.81846V7.06909H11.3358C10.9794 7.06909 10.801 6.63823 11.053 6.38625Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.34668 3.21875H7.7168V4.13965H9.30095V5.45415H6.21353C6.10371 5.45415 6.0147 5.54317 6.0147 5.65298C6.0147 5.72817 6.05711 5.79692 6.1243 5.83066L8.47073 7.00899C8.97969 7.26457 9.30095 7.78539 9.30095 8.35491C9.30095 9.18671 8.62664 9.86102 7.79484 9.86102H7.7168V10.7754H6.34668V9.86102H4.7002V8.54652H7.78997C7.89848 8.54652 7.98645 8.45855 7.98645 8.35004C7.98645 8.27509 7.9438 8.20666 7.87651 8.17365L5.55353 7.03392C5.03121 6.77766 4.7002 6.24654 4.7002 5.66474C4.7002 4.82246 5.383 4.13965 6.22529 4.13965H6.34668V3.21875Z"></path></svg>, label: '邀请返佣'},
              {icon: <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.72014 1.46917C2.72014 1.08257 3.03354 0.769165 3.42014 0.769165H10.5803C10.9669 0.769165 11.2803 1.08257 11.2803 1.46917V6.09856C11.2803 8.22399 9.73105 9.98758 7.70022 10.3217V12.0762H11.038V13.4762H3.00635V12.0762H6.30022V10.3217C4.26938 9.98758 2.72014 8.22399 2.72014 6.09856V1.46917ZM4.12014 2.16917V6.09856C4.12014 7.68918 5.40959 8.97864 7.00022 8.97864C8.59084 8.97864 9.88029 7.68918 9.88029 6.09856V2.16917H4.12014Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2316 3.63376H11.1132V2.23376H12.9316C13.3182 2.23376 13.6316 2.54717 13.6316 2.93376V4.72875C13.6316 6.31781 12.3435 7.60599 10.7544 7.60599V6.20599C11.5703 6.20599 12.2316 5.54461 12.2316 4.72875V3.63376ZM1.73711 3.63376H2.85551V2.23376H1.03711C.65051 2.23376.337109 2.54717.337109 2.93376V4.72875C.337109 6.31781 1.6253 7.60599 3.21436 7.60599V6.20599C2.39849 6.20599 1.73711 5.54461 1.73711 4.72875V3.63376Z"></path></svg>, label: '交易赛（S6）'},
              {icon: <svg width="14px" height="14px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.84615 9C1.84615 12.951 5.04904 16.1538 9 16.1538C12.951 16.1538 16.1538 12.951 16.1538 9C16.1538 8.47254 16.0969 7.95943 15.9892 7.46612C15.8805 6.96805 16.1961 6.47614 16.6942 6.3674C17.1922 6.25865 17.6841 6.57427 17.7929 7.07234C17.9286 7.69418 18 8.33929 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 -1.65773e-07 13.9706 -3.70263e-07 9C-5.74754e-07 4.02944 4.02944 -1.87139e-07 9 -4.17988e-07C9.66071 -4.48673e-07 10.3058 0.0713515 10.9277 0.207115C11.4257 0.315856 11.7413 0.807773 11.6326 1.30584C11.5239 1.80391 11.0319 2.11952 10.5339 2.01078C10.0406 1.90308 9.52746 1.84615 9 1.84615C5.04904 1.84615 1.84615 5.04904 1.84615 9Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7275 0.268283C17.9019 0.44156 17.9999 0.677243 17.9999 0.923082L17.9999 3.81201C17.9999 4.32181 17.5867 4.73509 17.0769 4.73509C16.5671 4.73509 16.1538 4.32182 16.1538 3.81201L16.1538 3.16294L13.0473 6.29181C12.6881 6.65358 12.1037 6.65568 11.7419 6.29649C11.3801 5.9373 11.378 5.35285 11.7372 4.99107L14.8543 1.85149C14.5777 1.85071 14.3239 1.84905 14.1291 1.84605C13.6193 1.8382 13.2124 1.41861 13.2203 0.908868C13.2281 0.399127 13.6477 -0.00773698 14.1575 0.000111671C14.5785 0.00659498 15.3037 0.00664127 15.9307 0.00498096C16.2426 0.00415477 16.5278 0.00291498 16.735 0.00188156L17.0709 2.48642e-05C17.3167 -0.0015484 17.5531 0.0950059 17.7275 0.268283Z"></path></svg>, label: '提取'},
              {icon: <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.70005C4.07289 1.70005 1.7 4.07294 1.7 7.00005C1.7 9.92716 4.07289 12.3 7 12.3V13.7C3.2997 13.7 0.300003 10.7004 0.300003 7.00005C0.300003 3.29974 3.2997 0.300049 7 0.300049C8.98439 0.300049 10.768 1.16362 11.9938 2.53321L10.9506 3.46689C9.97915 2.38148 8.56962 1.70005 7 1.70005Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.82417 6.86511 10.6905 6.08541 9.75395 5.0448 7.53173 7.0448C7.31629 7.23869 7.24263 7.54529 7.34647 7.81589 7.45031 8.08649 7.71017 8.26511 8 8.26511H13V6.86511H9.82417ZM10.5079 10.7908 9.64153 11.5705 10.5781 12.6111 12.8003 10.6111C13.0157 10.4172 13.0894 10.1106 12.9856 9.83999 12.8817 9.5694 12.6219 9.39078 12.332 9.39078L7.33203 9.39078 7.33203 10.7908 10.5079 10.7908Z"></path></svg>, label: '转换 WSOL → SOL'},
              {icon: <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9208 9.6V5.3208C10.9208 3.1554 9.1654 1.4 7 1.4 4.8346 1.4 3.0792 3.1554 3.0792 5.3208V9.6H10.9208ZM7 0C4.0614 0 1.6792 2.3822 1.6792 5.3208V11H12.3208V5.3208C12.3208 2.3822 9.9386 0 7 0ZM9.61621 13.1266 4.37842 13.1266 4.37842 11.7266 9.61621 11.7266 9.61621 13.1266Z"></path></svg>, label: 'TG 通知'},
              {icon: <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.6C10.0928 12.6 12.6 10.0928 12.6 7C12.6 3.90721 10.0928 1.4 7 1.4C3.90721 1.4 1.4 3.90721 1.4 7C1.4 10.0928 3.90721 12.6 7 12.6ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.70005H3V6.30005H11V7.70005Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.3 11L6.3 3L7.7 3L7.7 11L6.3 11Z"></path></svg>, label: '绑定Twitter'},
              {icon: <svg width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.3 3.00005C1.3 1.50888 2.50883 0.300049 4 0.300049H11V1.70005H4C3.28203 1.70005 2.7 2.28208 2.7 3.00005V11C2.7 11.718 3.28203 12.3 4 12.3H11V13.7H4C2.50883 13.7 1.3 12.4912 1.3 11V3.00005Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.495 3.505L13.495 6.505C13.7683 6.77837 13.7683 7.22159 13.495 7.49495L10.495 10.495L9.50503 9.505L11.3101 7.69998H6.5V6.29998H11.3101L9.50503 4.49495L10.495 3.505Z"></path></svg>, label: '断开连接', cb() {
                setToken('')
                  setLoginStatus(false)
                  disconnect()
              }},
            ]} />
          ) : (
            <>
              <button className="register-btn" onClick={() => {
                setAnimation(true)
                setIsRegisterModalOpen(true)
              }}>注册</button>
              <button className="login-btn" onClick={() => {
                setAnimation(true)
                setIsLoginModalOpen(true)
              }}>登录</button>
            </>
          )
        }
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
