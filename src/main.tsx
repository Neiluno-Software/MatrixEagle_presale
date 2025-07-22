import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { WagmiProvider } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { getDefaultConfig, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RefreshContextProvider } from './context/RefreshContext';
import {
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';

const config = getDefaultConfig({
  appName: 'ETATA',
  projectId: '04b3ded0b193d3c155deb2624eebf41d',
  wallets: [
    {
      groupName: 'BSC wallets',
      wallets: [metaMaskWallet, trustWallet, coinbaseWallet, walletConnectWallet],
    },
  ],
  chains: [
    /*bsc,*/
    bscTestnet
  ],
  ssr: true,
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          showRecentTransactions={true}
          modalSize="compact"
          initialChain={bscTestnet}
          theme={darkTheme({
            accentColor: '#7b3fe4',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          <RefreshContextProvider>
            <App />
          </RefreshContextProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
