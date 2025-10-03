import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import Home from './HomePage';
import Ods from './projects/ods/Ods';
import Washryte from './projects/washryte/Washryte';
import Frutta from './projects/frutta/Frutta';
import Healthbanc from './projects/healthbanc/Healthbanc';
import LandGirl from './projects/landgirl/LandGirl';
import DelightVet from './projects/delightvet/DelightVet';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/one-drug-store" element={<Ods />} />
          <Route path="/projects/washryte" element={<Washryte />} />
          <Route path="/projects/frutta" element={<Frutta />} />
          <Route path="/projects/healthbanc" element={<Healthbanc />} />
          <Route path="/projects/landgirl" element={<LandGirl />} />
          <Route path="/projects/delight-vet" element={<DelightVet />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
