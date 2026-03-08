import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  ChevronRight, ChevronLeft, ArrowUpRight,
  Palette, Layout, Smartphone, Zap,
  Star, Clock, Users, TrendingUp,
} from 'lucide-react';

type Category = 'tous' | 'branding' | 'uiux' | 'mobile';

interface Project {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: 'branding' | 'uiux' | 'mobile';
  categoryLabel: string;
  tags: string[];
  year: string;
  duration: string;
  bg: string;
  accent: string;
  accentText: string;
  textColor: string;
  description: string;
  challenge: string;
  solution: string;
  results: { icon: React.ReactNode; value: string; label: string }[];
  deliverables: string[];
  testimonial?: { quote: string; author: string; role: string };
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'kora-finance',
    title: 'Identité Complète',
    client: 'Kora Finance',
    category: 'branding',
    categoryLabel: 'Branding',
    tags: ['Logo', 'Charte graphique', 'Motion Design', 'Social Media Kit'],
    year: '2024',
    duration: '3 semaines',
    bg: 'bg-slate-900',
    accent: 'bg-lime-400',
    accentText: 'text-lime-400',
    textColor: 'text-white',
    description: 'Kora Finance, fintech camerounaise spécialisée dans les transferts d\'argent et le crédit digital, avait besoin d\'une identité qui inspire confiance tout en restant moderne et accessible.',
    challenge: 'Créer une marque qui rassure les utilisateurs peu familiers avec la finance numérique, tout en étant suffisamment premium pour convaincre les partenaires institutionnels.',
    solution: 'Nous avons construit un univers visuel autour du concept de "solidité moderne" — une typographie géométrique bold associée à une palette sombre et des accents vert-lime symbolisant la croissance.',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, value: '+340%', label: 'Notoriété en 3 mois' },
      { icon: <Users className="w-5 h-5" />,     value: '50K+',  label: 'Nouveaux utilisateurs' },
      { icon: <Star className="w-5 h-5" />,       value: '4.9★',  label: 'Note App Store' },
      { icon: <Clock className="w-5 h-5" />,      value: '3 sem', label: 'Délai de livraison' },
    ],
    deliverables: ['Logo principal & variantes', 'Palette de couleurs complète', 'Guide typographique', 'Charte graphique 40 pages', 'Templates réseaux sociaux', 'Kit motion design'],
    testimonial: {
      quote: 'FrameTech a transformé notre image en quelques semaines. On ne ressemble plus à une startup — on ressemble à un leader du secteur.',
      author: 'Marie Essomba',
      role: 'CEO, Kora Finance',
    },
  },
  {
    id: 2,
    slug: 'freshmed',
    title: 'Application Médicale',
    client: 'FreshMed Santé',
    category: 'mobile',
    categoryLabel: 'App Mobile',
    tags: ['React Native', 'iOS', 'Android', 'Téléconsultation'],
    year: '2024',
    duration: '8 semaines',
    bg: 'bg-emerald-900',
    accent: 'bg-emerald-400',
    accentText: 'text-emerald-400',
    textColor: 'text-white',
    description: 'FreshMed est une plateforme de téléconsultation médicale mettant en relation patients et médecins au Cameroun. Un projet à fort impact social.',
    challenge: 'Concevoir une application intuitive pour un public très large, incluant des utilisateurs peu technophiles dans les zones semi-urbaines, tout en gérant la complexité des consultations vidéo en temps réel.',
    solution: 'Architecture React Native optimisée pour les connexions lentes. UX minimaliste avec des grands éléments tactiles, une navigation en 3 taps maximum et une intégration Mobile Money pour les paiements.',
    results: [
      { icon: <Users className="w-5 h-5" />,     value: '10K+',  label: 'Téléchargements (2 sem)' },
      { icon: <Star className="w-5 h-5" />,       value: '4.8★',  label: 'Note moyenne stores' },
      { icon: <TrendingUp className="w-5 h-5" />, value: '300+',  label: 'Médecins inscrits' },
      { icon: <Clock className="w-5 h-5" />,      value: '8 sem', label: 'Délai de livraison' },
    ],
    deliverables: ['Application iOS complète', 'Application Android complète', 'Dashboard médecin', 'Intégration MTN Mobile Money', 'Notifications push', 'Consultation vidéo temps réel'],
    testimonial: {
      quote: 'L\'application dépasse ce qu\'on imaginait. Design premium, performances excellentes et délai respecté. Une vraie réussite.',
      author: 'Pascal Nkengne',
      role: 'Fondateur, FreshMed Santé',
    },
  },
  {
    id: 3,
    slug: 'atlas-logistics',
    title: 'Design System & Refonte',
    client: 'Atlas Logistics',
    category: 'uiux',
    categoryLabel: 'UI/UX',
    tags: ['Figma', 'Design System', 'Web App', 'Dashboard'],
    year: '2023',
    duration: '6 semaines',
    bg: 'bg-indigo-900',
    accent: 'bg-indigo-300',
    accentText: 'text-indigo-300',
    textColor: 'text-white',
    description: 'Atlas Logistics gère le transport de marchandises dans 6 pays. Leur plateforme interne accumulait 5 ans de dette design, freinant la productivité des équipes.',
    challenge: 'Unifier une interface fragmentée utilisée par 200 opérateurs aux profils variés (bureaux, terrain, management) sans interrompre les opérations pendant la refonte.',
    solution: 'Audit UX complet, ateliers avec les équipes terrain, puis création d\'un design system de 80+ composants dans Figma. Refonte progressive par modules pour ne pas bloquer l\'activité.',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, value: '-60%',  label: 'Temps de dev new features' },
      { icon: <Users className="w-5 h-5" />,     value: '+42%',  label: 'Productivité opérateurs' },
      { icon: <Star className="w-5 h-5" />,       value: '72',    label: 'NPS interne (vs 31 avant)' },
      { icon: <Clock className="w-5 h-5" />,      value: '6 sem', label: 'Délai de livraison' },
    ],
    deliverables: ['Audit UX complet', 'Design system 80+ composants', 'Refonte des 5 modules principaux', 'Prototypes interactifs Figma', 'Documentation développeur', 'Handoff complet'],
  },
  {
    id: 4,
    slug: 'rideek',
    title: 'Super App Mobilité',
    client: 'Rideek Transport',
    category: 'mobile',
    categoryLabel: 'App Mobile',
    tags: ['Flutter', 'Maps', 'Paiement Mobile', 'Géolocalisation'],
    year: '2023',
    duration: '12 semaines',
    bg: 'bg-amber-900',
    accent: 'bg-amber-400',
    accentText: 'text-amber-400',
    textColor: 'text-white',
    description: 'Rideek est une super app de mobilité urbaine combinant VTC, livraison express et paiement mobile dans une seule application Flutter performante.',
    challenge: 'Unifier 3 services distincts (transport, livraison, paiement) dans une expérience fluide, avec une carte temps réel et un système de matching conducteur-passager fiable.',
    solution: 'Architecture Flutter modulaire avec une carte Mapbox optimisée, un système de matching custom, intégration Orange Money & MTN Money et des animations de transition premium entre les modes.',
    results: [
      { icon: <Users className="w-5 h-5" />,     value: '3 villes', label: 'Déploiement en 6 mois' },
      { icon: <TrendingUp className="w-5 h-5" />, value: '25K+',    label: 'Utilisateurs actifs' },
      { icon: <Star className="w-5 h-5" />,       value: '4.7★',    label: 'Note Play Store' },
      { icon: <Clock className="w-5 h-5" />,      value: '12 sem',  label: 'Délai de livraison' },
    ],
    deliverables: ['App passager iOS & Android', 'App conducteur iOS & Android', 'Dashboard opérateur web', 'Intégration paiement mobile', 'Système de notation', 'Notifications temps réel'],
    testimonial: {
      quote: 'Une équipe qui comprend vraiment les enjeux tech africains. L\'app gère parfaitement les connexions instables et les paiements locaux.',
      author: 'Eric Fouda',
      role: 'CTO, Rideek Transport',
    },
  },
  {
    id: 5,
    slug: 'verde-organic',
    title: 'Branding & E-commerce',
    client: 'Verde Organic',
    category: 'branding',
    categoryLabel: 'Branding',
    tags: ['Logo', 'Site Web', 'Packaging', 'E-commerce'],
    year: '2024',
    duration: '4 semaines',
    bg: 'bg-emerald-50',
    accent: 'bg-lime-500',
    accentText: 'text-lime-600',
    textColor: 'text-emerald-900',
    description: 'Verde Organic est une marque d\'alimentation biologique camerounaise. Elle avait besoin d\'une identité qui communique la naturalité, la qualité et la confiance auprès des consommateurs urbains.',
    challenge: 'Positionner une marque locale comme alternative premium aux produits importés, avec un budget limité mais une ambition internationale.',
    solution: 'Identité visuelle organique et apaisante — typographie manuscrite associée à une palette vert-crème, packaging éco-responsable et site e-commerce Shopify optimisé pour la conversion.',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, value: '+220%', label: 'Conversions en ligne' },
      { icon: <Users className="w-5 h-5" />,     value: '3 villes', label: 'Points de vente ouverts' },
      { icon: <Star className="w-5 h-5" />,       value: '×2',    label: 'Panier moyen après rebrand' },
      { icon: <Clock className="w-5 h-5" />,      value: '4 sem', label: 'Délai de livraison' },
    ],
    deliverables: ['Logo & identité visuelle', 'Packaging 6 produits', 'Site e-commerce Shopify', 'Guide de marque', 'Contenus réseaux sociaux', 'Étiquettes produit print'],
  },
  {
    id: 6,
    slug: 'datapulse',
    title: 'Dashboard Analytics',
    client: 'DataPulse',
    category: 'uiux',
    categoryLabel: 'UI/UX',
    tags: ['Dashboard', 'DataViz', 'SaaS', 'Figma'],
    year: '2024',
    duration: '5 semaines',
    bg: 'bg-violet-900',
    accent: 'bg-violet-400',
    accentText: 'text-violet-300',
    textColor: 'text-white',
    description: 'DataPulse est un outil SaaS d\'analytics marketing. Leur ancien dashboard affichait trop d\'informations, provoquant une surcharge cognitive qui faisait fuir les utilisateurs non-experts.',
    challenge: 'Simplifier une interface analytique dense sans sacrifier la puissance des données, pour un profil d\'utilisateur allant du growth hacker au dirigeant non-technique.',
    solution: 'Refonte UX centrée sur des "cards de décision" : chaque bloc répond à une question business précise. Navigation progressive permettant aux experts de plonger dans les détails sans noyer les autres.',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, value: 'NPS 72', label: 'Meilleur score catégorie' },
      { icon: <Users className="w-5 h-5" />,     value: '-45%',   label: 'Taux de churn' },
      { icon: <Star className="w-5 h-5" />,       value: '+90%',   label: 'Feature adoption' },
      { icon: <Clock className="w-5 h-5" />,      value: '5 sem',  label: 'Délai de livraison' },
    ],
    deliverables: ['Audit UX & heatmaps', 'Wireframes basse fidélité', 'Prototype Figma interactif', 'Design system dédié', 'Tests utilisateurs (8 sessions)', 'Handoff développeur complet'],
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  branding: <Palette className="w-4 h-4" />,
  uiux:     <Layout className="w-4 h-4" />,
  mobile:   <Smartphone className="w-4 h-4" />,
};

const VosRealisations: React.FC = () => {
  const [filter, setFilter]               = useState<Category>('tous');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = filter === 'tous' ? projects : projects.filter(p => p.category === filter);

  const categories: { id: Category; label: string }[] = [
    { id: 'tous',     label: 'Toutes les réalisations' },
    { id: 'branding', label: 'Branding' },
    { id: 'uiux',     label: 'UI/UX' },
    { id: 'mobile',   label: 'Mobile' },
  ];

  const goNext = () => {
    if (!activeProject) return;
    const idx = projects.findIndex(p => p.id === activeProject.id);
    setActiveProject(projects[(idx + 1) % projects.length]);
  };

  const goPrev = () => {
    if (!activeProject) return;
    const idx = projects.findIndex(p => p.id === activeProject.id);
    setActiveProject(projects[(idx - 1 + projects.length) % projects.length]);
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
            <span className="text-indigo-600 font-medium">Voir nos réalisations</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Zap className="w-4 h-4" /> Nos réalisations
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                Des projets qui <span className="text-indigo-600 underline decoration-lime-400">parlent</span>.
              </h1>
            </div>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Chaque réalisation ici est une histoire de collaboration, de créativité et de résultats concrets. Cliquez sur un projet pour découvrir les coulisses.
              </p>
              <div className="flex gap-6 flex-wrap">
                {[
                  { value: '80+', label: 'Projets livrés' },
                  { value: '5', label: 'Pays' },
                  { value: '100%', label: 'Satisfaction' },
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
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  filter === cat.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.id !== 'tous' && categoryIcons[cat.id]}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE ── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`group relative ${project.bg} rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="p-8 min-h-[300px] flex flex-col justify-between">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className={`w-10 h-10 ${project.accent} rounded-xl`}></div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/10 ${project.textColor}`}>
                      {project.year}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all ${project.textColor}`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Visuel */}
                <div className="my-6">
                  {project.category === 'mobile' && (
                    <div className="flex gap-2">
                      <div className="w-16 h-28 bg-white/10 rounded-2xl"></div>
                      <div className="w-16 h-28 bg-white/5 rounded-2xl translate-y-3"></div>
                    </div>
                  )}
                  {project.category === 'uiux' && (
                    <div className="w-full h-20 bg-white/10 rounded-xl p-3 flex flex-col gap-2">
                      <div className="h-2 bg-white/20 rounded-full w-2/3"></div>
                      <div className="h-2 bg-white/10 rounded-full w-full"></div>
                      <div className={`h-5 ${project.accent} rounded-lg w-20 mt-1`}></div>
                    </div>
                  )}
                  {project.category === 'branding' && (
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 ${project.accent} rounded-2xl flex items-center justify-center font-black text-2xl opacity-80`}>
                        {project.client.charAt(0)}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {[80, 120, 60].map((w, i) => (
                          <div key={i} className={`h-2 ${i === 0 ? 'bg-white/20' : 'bg-white/10'} rounded-full`} style={{ width: `${w}px` }}></div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 ${project.textColor} opacity-60`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-widest opacity-50 mb-1 ${project.textColor}`}>
                    {project.client}
                  </p>
                  <h3 className={`text-xl font-black ${project.textColor}`}>{project.title}</h3>
                  <p className={`text-sm mt-2 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ${project.accentText}`}>
                    {project.results[0].value} {project.results[0].label} →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODAL DÉTAIL ── */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div className="min-h-screen flex items-start justify-center p-4 py-8">
            <div
              className="bg-[#FDFDFF] rounded-[2.5rem] w-full max-w-3xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Header coloré */}
              <div className={`${activeProject.bg} p-8 md:p-10`}>
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-12 h-12 ${activeProject.accent} rounded-2xl`}></div>
                  <div className="flex items-center gap-3">
                    {/* Navigation entre projets */}
                    <button onClick={goPrev} className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition" aria-label="Projet précédent">
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button onClick={goNext} className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition" aria-label="Projet suivant">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                    <button onClick={() => setActiveProject(null)} className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition text-white font-bold" aria-label="Fermer">
                      ✕
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/10 ${activeProject.textColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={`text-xs font-bold uppercase tracking-widest opacity-50 mb-1 ${activeProject.textColor}`}>
                  {activeProject.client} · {activeProject.year} · {activeProject.duration}
                </p>
                <h2 className={`text-3xl md:text-4xl font-black ${activeProject.textColor}`}>{activeProject.title}</h2>
              </div>

              {/* Corps */}
              <div className="p-8 md:p-10 space-y-8">

                {/* Description */}
                <div>
                  <p className="text-gray-600 leading-relaxed">{activeProject.description}</p>
                </div>

                {/* Challenge / Solution */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Le défi</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{activeProject.challenge}</p>
                  </div>
                  <div className="bg-indigo-50 rounded-2xl p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Notre approche</p>
                    <p className="text-sm text-indigo-700 leading-relaxed">{activeProject.solution}</p>
                  </div>
                </div>

                {/* Résultats */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Résultats obtenus</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {activeProject.results.map((r, i) => (
                      <div key={i} className="bg-indigo-900 text-white rounded-2xl p-5 text-center">
                        <div className={`flex justify-center mb-2 ${activeProject.accentText}`}>{r.icon}</div>
                        <p className={`text-2xl font-black ${activeProject.accentText}`}>{r.value}</p>
                        <p className="text-indigo-300 text-xs mt-1 leading-tight">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Livrables */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Ce qui a été livré</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.deliverables.map(d => (
                      <span key={d} className="flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
                        <span className="text-lime-500">✓</span> {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Témoignage */}
                {activeProject.testimonial && (
                  <div className="bg-slate-900 text-white rounded-2xl p-7">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-5 text-sm">
                      "{activeProject.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 ${activeProject.accent} rounded-full flex items-center justify-center font-black text-slate-900 text-sm`}>
                        {activeProject.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{activeProject.testimonial.author}</p>
                        <p className="text-gray-400 text-xs">{activeProject.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    to="/devis"
                    onClick={() => setActiveProject(null)}
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition text-sm"
                  >
                    Projet similaire ? Demander un devis <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/demarrer"
                    onClick={() => setActiveProject(null)}
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 px-6 py-4 rounded-full font-bold hover:border-indigo-400 transition text-sm"
                  >
                    Démarrer un projet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre projet ici,<br />
            <span className="text-indigo-600 underline decoration-lime-400">bientôt</span>.
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Rejoignez les entreprises qui nous ont fait confiance pour leur transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/devis"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition"
            >
              Demander un devis gratuit <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demarrer"
              className="inline-flex items-center gap-2 border-2 border-gray-200 px-10 py-4 rounded-full font-bold hover:border-indigo-400 transition"
            >
              Démarrer un projet
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2026 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default VosRealisations;