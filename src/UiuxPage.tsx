import React, { useState } from 'react';
import Navbar from './Navbar';
import { ChevronRight, Layout, Monitor, Tablet, Smartphone, Eye, Zap, Users, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const UIUXPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'app' | 'dashboard'>('web');

  const tabs = [
    { id: 'web' as const, label: 'Sites Web', icon: <Monitor className="w-4 h-4" /> },
    { id: 'app' as const, label: 'Applications', icon: <Tablet className="w-4 h-4" /> },
    { id: 'dashboard' as const, label: 'Dashboards', icon: <BarChart2 className="w-4 h-4" /> },
  ];

  const tabContent = {
    web: {
      title: 'Expériences web remarquables',
      desc: 'Maquettes haute-fidélité pour sites vitrines, e-commerce et plateformes SaaS. Chaque pixel est pensé pour convertir.',
      tags: ['Landing pages', 'E-commerce', 'SaaS', 'Portfolios', 'Blogs'],
    },
    app: {
      title: 'Applications intuitives',
      desc: 'Design centré utilisateur pour vos applications iOS et Android. Parcours fluides, interactions mémorables.',
      tags: ['Onboarding', 'Dashboards', 'Navigation', 'Formulaires', 'Notifications'],
    },
    dashboard: {
      title: 'Tableaux de bord clairs',
      desc: 'Visualisations de données et interfaces analytiques qui transforment la complexité en clarté décisionnelle.',
      tags: ['KPIs', 'Graphiques', 'Filtres', 'Exports', 'Temps réel'],
    },
  };

  const services = [
    {
      icon: <Eye className="w-7 h-7 text-indigo-600" />,
      title: 'Audit UX',
      desc: "Analyse complète de votre interface existante pour identifier les points de friction et opportunités d'amélioration.",
    },
    {
      icon: <Users className="w-7 h-7 text-indigo-600" />,
      title: 'Recherche utilisateur',
      desc: "Interviews, tests utilisateurs et analyses comportementales pour concevoir avec les vrais besoins en tête.",
    },
    {
      icon: <Layout className="w-7 h-7 text-indigo-600" />,
      title: 'Wireframing',
      desc: "Squelettes d'interface basse et moyenne fidélité pour valider l'architecture avant de partir en design.",
    },
    {
      icon: <Zap className="w-7 h-7 text-indigo-600" />,
      title: 'Prototypage',
      desc: "Prototypes interactifs haute fidélité sur Figma pour tester et valider avant le développement.",
    },
    {
      icon: <Monitor className="w-7 h-7 text-indigo-600" />,
      title: 'Design System',
      desc: "Bibliothèque de composants réutilisables pour garantir la cohérence à travers tous vos produits.",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-indigo-600" />,
      title: 'Responsive Design',
      desc: 'Interfaces parfaitement adaptées à tous les écrans — mobile, tablette, desktop et TV.',
    },
  ];

  const stats = [
    { value: '3×', label: 'Plus de conversions' },
    { value: '-60%', label: 'Taux d\'abandon' },
    { value: '98%', label: 'Satisfaction client' },
    { value: '5j', label: 'Délai moyen' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">
      <Navbar />

      {/* --- HERO --- */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>Accueil</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-indigo-600 font-medium">Conception UI/UX</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Layout className="w-4 h-4" /> Conception UI/UX
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                Des interfaces que les gens <span className="text-indigo-600 underline decoration-lime-400">adorent</span> utiliser.
              </h1>
              <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
                Nous concevons des expériences numériques fluides, intuitives et belles — de la recherche utilisateur au prototype interactif prêt à développer.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition">
                  <Link to="/devis">Demander un devis</Link>
                </button>
                <button className="border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-indigo-600 transition">
                  <Link to="/maquettes">Voir nos maquettes</Link>
                </button>
              </div>
            </div>

            {/* UI Mockup visuel */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">
                {/* Browser bar */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="flex-1 bg-white rounded-md ml-4 h-6 px-3 flex items-center">
                    <span className="text-xs text-gray-400">frametech.cm/projet</span>
                  </div>
                </div>
                {/* Page simulée */}
                <div className="p-6">
                  <div className="h-4 bg-indigo-600 rounded-full w-1/2 mb-3"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-2/3 mb-6"></div>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-gray-100 rounded-2xl h-24"></div>
                    <div className="bg-indigo-100 rounded-2xl h-24"></div>
                    <div className="bg-lime-100 rounded-2xl h-24"></div>
                  </div>
                  <div className="h-8 bg-indigo-600 rounded-full w-32"></div>
                </div>
              </div>
              {/* Floating device badge */}
              <div className="absolute -bottom-4 -left-4 bg-indigo-900 text-white p-5 rounded-2xl shadow-xl hidden lg:block">
                <p className="font-black text-2xl text-lime-400">Figma</p>
                <p className="text-xs text-indigo-300">Livraison en source</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="py-16 px-6 bg-indigo-900 rounded-[3rem] mx-4 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-5xl font-black text-lime-400 mb-2">{s.value}</p>
              <p className="text-indigo-200 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TABS --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos domaines d'expertise</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>

          {/* Tab selector */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-12 shadow-sm">
            <h3 className="text-3xl font-bold mb-4">{tabContent[activeTab].title}</h3>
            <p className="text-gray-500 text-lg mb-8 max-w-xl">{tabContent[activeTab].desc}</p>
            <div className="flex flex-wrap gap-3">
              {tabContent[activeTab].tags.map((tag) => (
                <span key={tag} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-24 px-6 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos prestations UI/UX</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="mb-5 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-lime-400 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Votre interface mérite mieux.</h2>
          <p className="text-gray-500 text-lg mb-10">Parlons de votre projet et transformons vos maquettes en expériences extraordinaires.</p>
          <button className="bg-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-200 transition">
            Lancer mon projet UI/UX →
          </button>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2025 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default UIUXPage;