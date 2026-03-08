import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import BrandingPage from './brandingpage'
import Navbar from './navbar'
import DemarrerProjet from './demarerprojet'
import NosTravauxPage from './nostravaux'
import UIUXPage from './UiuxPage'
import MobilePage from './mobilepage'
import VisionPage from './visionpage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demarer-un-projet" element={<DemarrerProjet />} />
        <Route path="/nostravaux" element={<NosTravauxPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/uiux" element={<UIUXPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/mobile" element={<MobilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)