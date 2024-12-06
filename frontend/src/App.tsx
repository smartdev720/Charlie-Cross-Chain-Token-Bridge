import React, { useState } from 'react';
import './App.css';
import Container from './layout/Container';
import Navbar from './layout/Navbar';
import Bridge from './pages/Bridge';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import {TonWalletProvider} from "./context/TonWalletContext";

function App() {
  const [navIcon, setNavIcon] = useState<boolean>(false);
  return (
    <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
      <TonWalletProvider>
        <Container>
          <Navbar navIcon={navIcon} setNavIcon={setNavIcon} />
          <Bridge />
        </Container>
      </TonWalletProvider>
    </TonConnectUIProvider>
  );
}

export default App;
