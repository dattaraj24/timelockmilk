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
import { mainnet, polygon, optimism, arbitrum, bscTestnet,bsc} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Middle from './components/ui/middle';
import Vaniila from './components/ui/cards/vaniila';
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Index from './components/ui';
import Strawberry from './components/ui/cards/strawberry';
import Belgium from './components/ui/cards/belgium';

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
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/vanilla" element={<Vaniila />} />
        <Route exact path="/strawberry" element={<Strawberry />} />
        <Route exact path="/belgium" element={<Belgium />} />
      </Routes>
    </Router>
  </RainbowKitProvider>
</WagmiConfig>
</>

  );
}

export default App;
