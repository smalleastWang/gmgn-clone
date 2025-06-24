import { useState, useEffect, useCallback } from 'react';
import { BrowserProvider, Network } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWallet() {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<Network['chainId'] | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback(async () => {
    if (!window.ethereum) {
      alert('请安装 MetaMask');
      return;
    }
    try {
      const ethProvider = new BrowserProvider(window.ethereum);
      const accounts = await ethProvider.send('eth_requestAccounts', []);
      const network = await ethProvider.getNetwork();

      setProvider(ethProvider);
      setAccount(accounts[0]);
      setChainId(network.chainId);
      setIsConnected(true);
    } catch (err) {
      console.error('连接钱包失败', err);
    }
  }, []);

  const disconnect = () => {
    setProvider(null);
    setAccount(null);
    setChainId(null);
    setIsConnected(false);
  };

  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        setAccount(accounts[0] || null);
        setIsConnected(accounts.length > 0);
      };

      const handleChainChanged = (_chainId: Network['chainId']) => {
        setChainId(_chainId);
        // 重新加载页面以防止网络不一致
        window.location.reload();
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []);

  return {
    connect,
    disconnect,
    provider,
    account,
    chainId,
    isConnected,
  };
}