import React, { useState } from 'react';
import Navbar from './Navbar';
import { ChevronRight, Palette, Star, Layers, Type, Feather, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandingPage: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const process = [
    { step: '01', title: 'Découverte', desc: 'Nous analysons votre marché, vos concurrents et vos ambitions pour poser des bases solides.' },
    { step: '02', title: 'Stratégie', desc: 'Définition du positionnement, du ton de voix et des valeurs qui guideront toute la création.' },
    { step: '03', title: 'Création', desc: 'Exploration visuelle, moodboards, puis design du logo et de la charte graphique complète.' },
    { step: '04', title: 'Livraison', desc: 'Fichiers sources, guide de marque détaillé et accompagnement pour le déploiement.' },
  ];

  const deliverables = [
    { icon: <Circle className="w-6 h-6" />, title: 'Logo & variantes', desc: 'Version principale, alternative, monochrome, favicon — tous formats (SVG, PNG, PDF).' },
    { icon: <Palette className="w-6 h-6" />, title: 'Palette de couleurs', desc: 'Couleurs primaires, secondaires et neutres avec codes HEX, RGB et CMJN.' },
    { icon: <Type className="w-6 h-6" />, title: 'Typographie', desc: "Sélection de polices, hiérarchie visuelle et règles d'utilisation." },
    { icon: <Layers className="w-6 h-6" />, title: 'Charte graphique', desc: 'Guide complet de 30+ pages pour une cohérence parfaite sur tous supports.' },
    { icon: <Feather className="w-6 h-6" />, title: 'Iconographie', desc: "Bibliothèque d'icônes sur mesure dans le style de votre marque." },
    { icon: <Star className="w-6 h-6" />, title: 'Templates', desc: 'Modèles pour cartes de visite, présentations, réseaux sociaux.' },
  ];

  const portfolioItems = [
    { name: 'Kora Finance', category: 'Fintech', color: 'bg-slate-900', textColor: 'text-white', accent: 'bg-lime-400' },
    { name: 'Bloom Studio', category: 'Beauté & Lifestyle', color: 'bg-rose-50', textColor: 'text-rose-900', accent: 'bg-rose-400' },
    { name: 'Atlas Logistics', category: 'Transport', color: 'bg-indigo-900', textColor: 'text-white', accent: 'bg-indigo-400' },
    { name: 'Verde Organic', category: 'Alimentation', color: 'bg-emerald-50', textColor: 'text-emerald-900', accent: 'bg-lime-400' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">
      <Navbar />

      {/* --- HERO --- */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>Accueil</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-indigo-600 font-medium">Branding & Identité</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Palette className="w-4 h-4" /> Branding & Identité Visuelle
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                Votre marque, <span className="text-indigo-600 underline decoration-lime-400">inoubliable</span>.
              </h1>
              <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
                Nous créons des identités visuelles qui racontent votre histoire, captivent votre audience et vous distinguent durablement de la concurrence.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition">
                  <Link to="/devis">Demander un devis</Link>
                </button>
                <button className="border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-indigo-600 transition">
                  <Link to="/realisations">Voir nos réalisations</Link>
                </button>
              </div>
            </div>

            {/* Visual showcase */}
            <div className="relative">
              <div className="bg-indigo-900 rounded-3xl p-10 shadow-2xl">
                <div className="flex gap-3 mb-8">
                  <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center font-black text-xl">F</div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center font-black text-xl text-white">T</div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl"></div>
                </div>
                <div className="flex gap-3 mb-8">
                  {['#1A1A1A', '#4F46E5', '#A3E635', '#F8FAFC', '#64748B'].map((color) => (
                    <div key={color} className="flex-1 h-10 rounded-lg" style={{ backgroundColor: color }}></div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-2 bg-white/10 rounded-full w-full"></div>
                  <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
                </div>
                <p className="text-lime-400 font-black text-3xl mt-6 tracking-tight">Brand Guide</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-lime-400 rounded-2xl p-5 shadow-xl">
                <p className="font-black text-2xl">50+</p>
                <p className="text-xs font-medium">Marques créées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="py-24 px-6 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre processus créatif</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveProcess(i)}
                className={`p-8 rounded-[2rem] cursor-pointer transition-all ${
                  activeProcess === i
                    ? 'bg-indigo-900 text-white shadow-xl -translate-y-2'
                    : 'bg-white border border-gray-100 hover:-translate-y-1'
                }`}
              >
                <p className={`text-4xl font-black mb-4 ${activeProcess === i ? 'text-lime-400' : 'text-indigo-600'}`}>
                  {item.step}
                </p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${activeProcess === i ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIVRABLES --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Ce que vous recevez</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deliverables.map((item, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="mb-5 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-lime-400 transition-colors text-indigo-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section className="py-24 px-6 bg-indigo-900 text-white rounded-[3rem] mx-4 my-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Quelques réalisations</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, i) => (
              <div key={i} className={`${item.color} ${item.textColor} rounded-3xl p-10 group hover:scale-[1.02] transition-all cursor-pointer`}>
                <div className={`w-10 h-10 ${item.accent} rounded-xl mb-8`}></div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">{item.category}</p>
                <h3 className="text-3xl font-black">{item.name}</h3>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold opacity-60 group-hover:opacity-100 transition">
                  Voir le projet <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Prêt à forger votre identité ?</h2>
          <p className="text-gray-500 text-lg mb-10">Chaque grande marque a commencé par une conversation. La vôtre aussi.</p>
          <button className="bg-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-200 transition">
            Lancer mon projet branding →
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2025 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default BrandingPage;