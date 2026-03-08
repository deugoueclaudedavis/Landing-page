import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App            from './App'
import DemanderDevis   from './demanderdevis'
import VosRealisations from './Vosrealisations'
import Navbar         from './Navbar'
import BrandingPage   from './BrandingPage'
import UiuxPage       from './UiuxPage'
import MobilePage     from './MobilePage'
import VisionPage     from './VisionPage'
import DemarrerProjet from './DemarrerProjet'
import NosTravauxPage from './NosTravauxPage'
import VosMaquettes  from './Vosmaquettes'
import EstimerProjet from './Estimerprojet'
import VosApps       from './VosApps'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"                 element={<App />} />
        <Route path="/devis"            element={<DemanderDevis />} />
        <Route path="/maquettes"        element={<VosMaquettes />} />
        <Route path="/apps"             element={<VosApps />} />
        <Route path="/estimer"          element={<EstimerProjet />} />
        <Route path="/branding"         element={<BrandingPage />} />
        <Route path="/realisations"     element={<VosRealisations />} />
        <Route path="/uiux"             element={<UiuxPage />} />
        <Route path="/mobile"           element={<MobilePage />} />
        <Route path="/vision"           element={<VisionPage />} />
        <Route path="/demarrer"         element={<DemarrerProjet />} />
        <Route path="/travaux"          element={<NosTravauxPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)