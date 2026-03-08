import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  ChevronRight, ChevronLeft, ArrowUpRight, Layout,
  Monitor, Tablet, Smartphone, X,
  Star, Clock, Users, TrendingUp, Eye,
} from 'lucide-react';

type FilterType = 'tous' | 'web' | 'app' | 'dashboard';

interface Maquette {
  id: number;
  title: string;
  client: string;
  type: 'web' | 'app' | 'dashboard';
  typeLabel: string;
  tags: string[];
  year: string;
  screens: number;
  bg: string;
  accent: string;
  accentText: string;
  textColor: string;
  mockupType: 'browser' | 'phone' | 'split';
  desc: string;
  tools: string[];
  result: string;
}

const maquettes: Maquette[] = [
  {
    id: 1,
    title: 'Plateforme SaaS',
    client: 'DataPulse Analytics',
    type: 'dashboard',
    typeLabel: 'Dashboard',
    tags: ['SaaS', 'Analytics', 'DataViz', 'Dark Mode'],
    year: '2024', screens: 24,
    bg: 'bg-violet-900', accent: 'bg-violet-400', accentText: 'text-violet-300', textColor: 'text-white',
    mockupType: 'browser',
    desc: 'Interface analytique complète avec graphiques temps réel, KPIs personnalisables et mode sombre.',
    tools: ['Figma', 'FigJam', 'Principle'],
    result: 'NPS passé de 31 à 72',
  },
  {
    id: 2,
    title: 'E-commerce Premium',
    client: 'Verde Organic',
    type: 'web',
    typeLabel: 'Site Web',
    tags: ['E-commerce', 'Shopify', 'Landing', 'Responsive'],
    year: '2024', screens: 18,
    bg: 'bg-emerald-800', accent: 'bg-lime-400', accentText: 'text-lime-400', textColor: 'text-white',
    mockupType: 'browser',
    desc: 'Site e-commerce bio avec tunnel d\'achat optimisé, animations produits et pages catégories.',
    tools: ['Figma', 'Prototype interactif'],
    result: '+220% de conversions',
  },
  {
    id: 3,
    title: 'App Téléconsultation',
    client: 'FreshMed Santé',
    type: 'app',
    typeLabel: 'Application',
    tags: ['Mobile', 'Santé', 'iOS/Android', 'Onboarding'],
    year: '2024', screens: 42,
    bg: 'bg-slate-900', accent: 'bg-emerald-400', accentText: 'text-emerald-400', textColor: 'text-white',
    mockupType: 'phone',
    desc: '42 écrans couvrant onboarding, consultation vidéo, prise de RDV et paiement Mobile Money.',
    tools: ['Figma', 'ProtoPie', 'Maze'],
    result: '4.8★ sur les stores',
  },
  {
    id: 4,
    title: 'Dashboard Logistique',
    client: 'Atlas Logistics',
    type: 'dashboard',
    typeLabel: 'Dashboard',
    tags: ['B2B', 'Dashboard', 'Design System', 'Maps'],
    year: '2023', screens: 31,
    bg: 'bg-indigo-900', accent: 'bg-indigo-300', accentText: 'text-indigo-200', textColor: 'text-white',
    mockupType: 'browser',
    desc: 'Refonte complète d\'une plateforme de gestion logistique pour 200 opérateurs terrain.',
    tools: ['Figma', 'FigJam', 'Storybook'],
    result: '-60% temps de dev',
  },
  {
    id: 5,
    title: 'Super App Mobilité',
    client: 'Rideek Transport',
    type: 'app',
    typeLabel: 'Application',
    tags: ['Flutter', 'Maps', 'Multi-service', 'Paiement'],
    year: '2023', screens: 56,
    bg: 'bg-amber-900', accent: 'bg-amber-400', accentText: 'text-amber-300', textColor: 'text-white',
    mockupType: 'split',
    desc: '56 écrans pour les apps passager et conducteur avec carte temps réel et matching dynamique.',
    tools: ['Figma', 'ProtoPie', 'UserTesting'],
    result: '25K+ utilisateurs actifs',
  },
  {
    id: 6,
    title: 'Site Corporate',
    client: 'Kora Finance',
    type: 'web',
    typeLabel: 'Site Web',
    tags: ['Corporate', 'Fintech', 'Animation', 'Multi-langue'],
    year: '2024', screens: 14,
    bg: 'bg-slate-800', accent: 'bg-lime-400', accentText: 'text-lime-400', textColor: 'text-white',
    mockupType: 'browser',
    desc: 'Site vitrine corporate avec animations scroll, calculateur de transfert et section blog.',
    tools: ['Figma', 'Framer', 'Lottie'],
    result: '+340% de notoriété',
  },
  {
    id: 7,
    title: 'App E-learning',
    client: 'EduAfrik',
    type: 'app',
    typeLabel: 'Application',
    tags: ['EdTech', 'Gamification', 'Offline', 'UX Research'],
    year: '2024', screens: 38,
    bg: 'bg-sky-900', accent: 'bg-sky-400', accentText: 'text-sky-300', textColor: 'text-white',
    mockupType: 'phone',
    desc: 'Parcours d\'apprentissage gamifié avec mode hors-ligne, quiz interactifs et suivi de progression.',
    tools: ['Figma', 'Maze', 'Hotjar'],
    result: '+85% rétention apprenants',
  },
  {
    id: 8,
    title: 'Landing Page SaaS',
    client: 'BuildStack',
    type: 'web',
    typeLabel: 'Site Web',
    tags: ['SaaS', 'Landing', 'Conversion', 'A/B Test'],
    year: '2024', screens: 8,
    bg: 'bg-rose-900', accent: 'bg-rose-400', accentText: 'text-rose-300', textColor: 'text-white',
    mockupType: 'browser',
    desc: 'Landing page haute conversion avec sections hero, pricing, témoignages et CTA optimisés.',
    tools: ['Figma', 'Webflow', 'Hotjar'],
    result: '3× taux de conversion',
  },
];

const filters: { id: FilterType; label: string; icon: React.ReactNode }[] = [
  { id: 'tous',      label: 'Toutes les maquettes', icon: <Layout className="w-4 h-4" /> },
  { id: 'web',       label: 'Sites Web',             icon: <Monitor className="w-4 h-4" /> },
  { id: 'app',       label: 'Applications',          icon: <Smartphone className="w-4 h-4" /> },
  { id: 'dashboard', label: 'Dashboards',            icon: <Tablet className="w-4 h-4" /> },
];

/* ── Composants de mockup simulés ── */
const BrowserMockup: React.FC<{ accent: string; bg: string }> = ({ accent, bg }) => (
  <div className="w-full bg-white/5 rounded-2xl overflow-hidden border border-white/10">
    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 border-b border-white/10">
      <div className="w-2 h-2 rounded-full bg-red-400/60"></div>
      <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
      <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
      <div className="flex-1 bg-white/10 rounded h-3 mx-2"></div>
    </div>
    <div className="p-3 space-y-2">
      <div className={`h-2 ${accent} rounded-full w-1/2 opacity-80`}></div>
      <div className="h-1.5 bg-white/10 rounded-full w-full"></div>
      <div className="h-1.5 bg-white/10 rounded-full w-3/4"></div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="h-12 bg-white/10 rounded-xl"></div>
        <div className={`h-12 ${accent} opacity-30 rounded-xl`}></div>
        <div className="h-12 bg-white/10 rounded-xl"></div>
      </div>
    </div>
  </div>
);

const PhoneMockup: React.FC<{ accent: string }> = ({ accent }) => (
  <div className="flex justify-center gap-3">
    <div className="w-20 bg-white/5 rounded-[1.2rem] border border-white/10 overflow-hidden p-2">
      <div className="w-8 h-1.5 bg-white/20 rounded-full mx-auto mb-3"></div>
      <div className={`h-8 ${accent} opacity-40 rounded-lg mb-2`}></div>
      <div className="space-y-1.5">
        <div className="h-1.5 bg-white/10 rounded-full"></div>
        <div className="h-1.5 bg-white/10 rounded-full w-3/4"></div>
      </div>
    </div>
    <div className="w-20 bg-white/5 rounded-[1.2rem] border border-white/10 overflow-hidden p-2 translate-y-4">
      <div className="w-8 h-1.5 bg-white/20 rounded-full mx-auto mb-3"></div>
      <div className="space-y-1.5 mb-2">
        <div className="h-1.5 bg-white/10 rounded-full"></div>
        <div className="h-1.5 bg-white/10 rounded-full"></div>
      </div>
      <div className={`h-6 ${accent} opacity-40 rounded-lg`}></div>
    </div>
  </div>
);

const SplitMockup: React.FC<{ accent: string }> = ({ accent }) => (
  <div className="flex gap-2">
    <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-2 space-y-1.5">
      <div className={`w-5 h-5 ${accent} opacity-60 rounded-lg`}></div>
      <div className="h-1.5 bg-white/10 rounded-full"></div>
      <div className="h-1.5 bg-white/10 rounded-full w-2/3"></div>
      <div className={`h-5 ${accent} opacity-30 rounded-lg mt-2`}></div>
    </div>
    <div className="flex-1 bg-white/10 rounded-xl border border-white/20 p-2 space-y-1.5">
      <div className="w-5 h-5 bg-white/20 rounded-lg"></div>
      <div className="h-1.5 bg-white/20 rounded-full"></div>
      <div className="h-1.5 bg-white/20 rounded-full w-3/4"></div>
      <div className={`h-5 ${accent} opacity-50 rounded-lg mt-2`}></div>
    </div>
  </div>
);

const VosMaquettes: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('tous');
  const [selected, setSelected]         = useState<Maquette | null>(null);

  const filtered = activeFilter === 'tous' ? maquettes : maquettes.filter(m => m.type === activeFilter);

  const goNext = () => {
    if (!selected) return;
    const idx = maquettes.findIndex(m => m.id === selected.id);
    setSelected(maquettes[(idx + 1) % maquettes.length]);
  };
  const goPrev = () => {
    if (!selected) return;
    const idx = maquettes.findIndex(m => m.id === selected.id);
    setSelected(maquettes[(idx - 1 + maquettes.length) % maquettes.length]);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-indigo-600 transition">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-indigo-600 font-medium">Voir nos maquettes</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Eye className="w-4 h-4" /> Maquettes UI/UX
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                Chaque pixel,<br />
                <span className="text-indigo-600 underline decoration-lime-400">intentionnel</span>.
              </h1>
            </div>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Nos maquettes ne sont pas de simples wireframes — ce sont des expériences interactives prêtes à développer, conçues pour convertir et enchanter.
              </p>
              <div className="flex gap-6 flex-wrap">
                {[
                  { value: '300+', label: 'Écrans conçus' },
                  { value: '40+', label: 'Projets UI/UX' },
                  { value: 'Figma', label: 'Outil principal' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-indigo-600">{s.value}</p>
                    <p className="text-sm text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap gap-3">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeFilter === f.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.icon} {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE ── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(m => (
            <div
              key={m.id}
              onClick={() => setSelected(m)}
              className={`group ${m.bg} rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="p-6 flex flex-col gap-5">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className={`w-8 h-8 ${m.accent} rounded-xl opacity-80`}></div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-white/10 ${m.textColor}`}>{m.screens} écrans</span>
                    <div className={`w-7 h-7 rounded-full bg-white/10 items-center justify-center hidden group-hover:flex transition-all ${m.textColor}`}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Mockup visuel */}
                <div className="min-h-[100px]">
                  {m.mockupType === 'browser'  && <BrowserMockup accent={m.accent} bg={m.bg} />}
                  {m.mockupType === 'phone'    && <PhoneMockup accent={m.accent} />}
                  {m.mockupType === 'split'    && <SplitMockup accent={m.accent} />}
                </div>

                {/* Info */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {m.tags.slice(0, 2).map(t => (
                      <span key={t} className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 ${m.textColor} opacity-60`}>{t}</span>
                    ))}
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-widest opacity-40 mb-1 ${m.textColor}`}>{m.client}</p>
                  <h3 className={`text-lg font-black ${m.textColor}`}>{m.title}</h3>
                  <p className={`text-xs mt-1.5 font-bold opacity-0 group-hover:opacity-100 transition-all ${m.accentText}`}>
                    {m.result} →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODAL ── */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto flex items-start justify-center p-4 py-8" onClick={() => setSelected(null)}>
          <div className="bg-[#FDFDFF] rounded-[2.5rem] w-full max-w-2xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            {/* Header coloré */}
            <div className={`${selected.bg} p-8`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${selected.accent} rounded-2xl`}></div>
                <div className="flex gap-2">
                  <button onClick={goPrev} title="Précédent" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"><ChevronLeft className="w-4 h-4 text-white" /></button>
                  <button onClick={goNext} title="Suivant" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"><ChevronRight className="w-4 h-4 text-white" /></button>
                  <button onClick={() => setSelected(null)} title="Fermer" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition text-white">✕</button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {selected.tags.map(t => (
                  <span key={t} className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/10 ${selected.textColor}`}>{t}</span>
                ))}
              </div>
              <p className={`text-xs font-bold uppercase tracking-widest opacity-50 mb-1 ${selected.textColor}`}>{selected.client} · {selected.year} · {selected.screens} écrans</p>
              <h2 className={`text-3xl font-black ${selected.textColor}`}>{selected.title}</h2>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-gray-600 leading-relaxed">{selected.desc}</p>

              {/* Outils */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Outils utilisés</p>
                <div className="flex flex-wrap gap-2">
                  {selected.tools.map(t => (
                    <span key={t} className="bg-indigo-50 text-indigo-700 font-semibold text-sm px-4 py-2 rounded-full">{t}</span>
                  ))}
                </div>
              </div>

              {/* Résultat */}
              <div className="bg-indigo-900 text-white rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-1">Résultat client</p>
                  <p className="text-2xl font-black text-lime-400">{selected.result}</p>
                </div>
                <TrendingUp className="w-10 h-10 text-indigo-600" />
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/devis" onClick={() => setSelected(null)} className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition text-sm">
                  Maquette similaire ? <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/demarrer" onClick={() => setSelected(null)} className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 px-6 py-4 rounded-full font-bold hover:border-indigo-400 transition text-sm">
                  Démarrer un projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── PROCESS ── */}
      <section className="py-24 px-6 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Comment on conçoit</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Découverte', desc: 'Interviews utilisateurs, analyse concurrentielle, définition des personas.' },
              { num: '02', title: 'Architecture', desc: 'Arborescence, user flows et wireframes basse fidélité pour valider la structure.' },
              { num: '03', title: 'Design UI', desc: 'Maquettes haute fidélité dans Figma avec animations et micro-interactions.' },
              { num: '04', title: 'Handoff', desc: 'Prototype interactif, design tokens et documentation développeur complète.' },
            ].map((step, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                <p className="text-4xl font-black text-indigo-600 mb-4">{step.num}</p>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Votre maquette,<br /><span className="text-indigo-600 underline decoration-lime-400">dès cette semaine</span>.</h2>
          <p className="text-gray-500 text-lg mb-10">Première maquette livrée en 5 jours ouvrés. Prototype interactif inclus.</p>
          <Link to="/devis" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-200 transition">
            Demander une maquette <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2025 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default VosMaquettes;