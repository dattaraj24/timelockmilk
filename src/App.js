 import logo from './logo.svg';
import './App.css';
import Card from './components/ui/card';
import Header from './components/ui/header';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, bsc} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Middle from './components/ui/middle';

const { chains, provider } = configureChains(
  [bsc],
  [
    
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {
  return (

<>
<WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div classname="space-y-10 "  >
        <Header/>
        <Middle/>
<Card/>
        </div>

</RainbowKitProvider>
    </WagmiConfig>
</>

  );
}

export default App;
