import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  ChevronRight, ChevronLeft, Smartphone, ArrowUpRight,
  Apple, Star, Download, Users, TrendingUp, Clock, Zap,
} from 'lucide-react';

type FilterType = 'toutes' | 'rn' | 'flutter' | 'ios' | 'android';

interface AppProject {
  id: number;
  name: string;
  client: string;
  category: string;
  framework: 'rn' | 'flutter' | 'ios' | 'android';
  frameworkLabel: string;
  tags: string[];
  year: string;
  bg: string;
  screenBg: string;
  accent: string;
  accentText: string;
  textColor: string;
  desc: string;
  challenge: string;
  features: string[];
  stats: { icon: React.ReactNode; value: string; label: string }[];
  platforms: ('ios' | 'android')[];
  testimonial?: { quote: string; author: string; role: string };
}

const apps: AppProject[] = [
  {
    id: 1,
    name: 'FreshMed',
    client: 'FreshMed Santé',
    category: 'Santé & Médical',
    framework: 'rn',
    frameworkLabel: 'React Native',
    tags: ['Téléconsultation', 'Mobile Money', 'Vidéo', 'Géolocalisation'],
    year: '2024',
    bg: 'bg-emerald-900',
    screenBg: 'bg-emerald-700',
    accent: 'bg-emerald-400',
    accentText: 'text-emerald-400',
    textColor: 'text-white',
    desc: 'Application de téléconsultation médicale mettant en relation patients et médecins au Cameroun. Consultation vidéo, prise de RDV et paiement Mobile Money intégré.',
    challenge: 'Fonctionner sur des connexions internet instables tout en offrant une consultation vidéo fluide.',
    features: ['Consultation vidéo temps réel', 'Prise de rendez-vous', 'Paiement MTN & Orange Money', 'Dossier médical digital', 'Notifications push', 'Mode hors-ligne partiel'],
    stats: [
      { icon: <Download className="w-4 h-4" />, value: '10K+', label: 'Téléchargements' },
      { icon: <Star className="w-4 h-4" />,     value: '4.8★', label: 'Note moyenne' },
      { icon: <Users className="w-4 h-4" />,    value: '300+', label: 'Médecins inscrits' },
      { icon: <Clock className="w-4 h-4" />,    value: '8 sem', label: 'Délai livraison' },
    ],
    platforms: ['ios', 'android'],
    testimonial: {
      quote: "L'app gère parfaitement les connexions instables. Nos patients en zone semi-urbaine peuvent consulter sans problème.",
      author: 'Pascal Nkengne',
      role: 'Fondateur, FreshMed Santé',
    },
  },
  {
    id: 2,
    name: 'Rideek',
    client: 'Rideek Transport',
    category: 'Transport & Mobilité',
    framework: 'flutter',
    frameworkLabel: 'Flutter',
    tags: ['VTC', 'Livraison', 'Maps', 'Real-time'],
    year: '2023',
    bg: 'bg-amber-900',
    screenBg: 'bg-amber-700',
    accent: 'bg-amber-400',
    accentText: 'text-amber-400',
    textColor: 'text-white',
    desc: 'Super app de mobilité urbaine combinant VTC, livraison express et paiement mobile. Deux applications distinctes : passager et conducteur.',
    challenge: 'Unifier 3 services en une expérience fluide avec un système de matching conducteur-passager en temps réel.',
    features: ['Carte Mapbox temps réel', 'Matching passager-conducteur', 'Double app (passager & chauffeur)', 'Paiement multi-opérateurs', 'Système de notation', 'Historique des courses'],
    stats: [
      { icon: <Users className="w-4 h-4" />,       value: '25K+',    label: 'Utilisateurs actifs' },
      { icon: <Star className="w-4 h-4" />,         value: '4.7★',    label: 'Note Play Store' },
      { icon: <TrendingUp className="w-4 h-4" />,   value: '3 villes', label: 'Déploiement' },
      { icon: <Clock className="w-4 h-4" />,        value: '12 sem',  label: 'Délai livraison' },
    ],
    platforms: ['ios', 'android'],
    testimonial: {
      quote: "FrameTech comprend vraiment les enjeux tech africains. L'app gère parfaitement les spécificités locales.",
      author: 'Eric Fouda',
      role: 'CTO, Rideek Transport',
    },
  },
  {
    id: 3,
    name: 'EduAfrik',
    client: 'EduAfrik Platform',
    category: 'Éducation & EdTech',
    framework: 'rn',
    frameworkLabel: 'React Native',
    tags: ['E-learning', 'Gamification', 'Offline', 'Quiz'],
    year: '2024',
    bg: 'bg-sky-900',
    screenBg: 'bg-sky-700',
    accent: 'bg-sky-400',
    accentText: 'text-sky-300',
    textColor: 'text-white',
    desc: 'Plateforme d\'apprentissage gamifiée pour 50 000 étudiants avec cours téléchargeables, quiz interactifs et suivi de progression.',
    challenge: 'Rendre les contenus accessibles sans connexion permanente pour les étudiants en zones rurales.',
    features: ['Téléchargement cours hors-ligne', 'Quiz gamifiés avec badges', 'Suivi de progression', 'Live sessions', 'Classements & récompenses', 'Certificats numériques'],
    stats: [
      { icon: <Users className="w-4 h-4" />,       value: '50K',  label: 'Étudiants inscrits' },
      { icon: <TrendingUp className="w-4 h-4" />,   value: '+85%', label: 'Rétention apprenants' },
      { icon: <Star className="w-4 h-4" />,         value: '4.9★', label: 'Note App Store' },
      { icon: <Clock className="w-4 h-4" />,        value: '10 sem', label: 'Délai livraison' },
    ],
    platforms: ['ios', 'android'],
  },
  {
    id: 4,
    name: 'KoraPay',
    client: 'Kora Finance',
    category: 'Fintech & Paiement',
    framework: 'flutter',
    frameworkLabel: 'Flutter',
    tags: ['Fintech', 'Transfert', 'Biométrie', 'Crypto-light'],
    year: '2024',
    bg: 'bg-slate-900',
    screenBg: 'bg-slate-700',
    accent: 'bg-lime-400',
    accentText: 'text-lime-400',
    textColor: 'text-white',
    desc: 'Application de transfert d\'argent et de crédit digital avec authentification biométrique et interface premium pour 100 000+ utilisateurs.',
    challenge: 'Garantir la sécurité maximale des transactions tout en offrant une expérience aussi simple que WhatsApp.',
    features: ['Transfert instantané', 'Authentification biométrique', 'Historique des transactions', 'Micro-crédit digital', 'QR Code paiement', 'Dashboard finances personnelles'],
    stats: [
      { icon: <Users className="w-4 h-4" />,       value: '100K+', label: 'Utilisateurs' },
      { icon: <Star className="w-4 h-4" />,         value: '4.9★',  label: 'Note moyenne' },
      { icon: <TrendingUp className="w-4 h-4" />,   value: '+340%', label: 'Croissance YoY' },
      { icon: <Clock className="w-4 h-4" />,        value: '14 sem', label: 'Délai livraison' },
    ],
    platforms: ['ios', 'android'],
    testimonial: {
      quote: "Notre app est maintenant aussi belle que les meilleures fintechs mondiales. Nos partenaires étrangers sont impressionnés.",
      author: 'Marie Essomba',
      role: 'CEO, Kora Finance',
    },
  },
  {
    id: 5,
    name: 'BuildTrack',
    client: 'BuildStack BTP',
    category: 'BTP & Chantier',
    framework: 'rn',
    frameworkLabel: 'React Native',
    tags: ['BTP', 'Gestion chantier', 'Photos', 'Rapports'],
    year: '2023',
    bg: 'bg-orange-900',
    screenBg: 'bg-orange-700',
    accent: 'bg-orange-400',
    accentText: 'text-orange-300',
    textColor: 'text-white',
    desc: 'Application de gestion de chantier pour chefs de projet BTP. Suivi d\'avancement, rapports photo automatiques et coordination d\'équipes terrain.',
    challenge: 'Utilisable par des chefs de chantier peu technophiles, même sans connexion sur site.',
    features: ['Suivi d\'avancement en temps réel', 'Rapports photo automatiques', 'Planning de chantier', 'Mode hors-ligne complet', 'Signature électronique', 'Exports PDF'],
    stats: [
      { icon: <Users className="w-4 h-4" />,     value: '200+',  label: 'Chantiers actifs' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '-40%',  label: 'Temps de reporting' },
      { icon: <Star className="w-4 h-4" />,       value: '4.6★',  label: 'Note utilisateurs' },
      { icon: <Clock className="w-4 h-4" />,      value: '9 sem', label: 'Délai livraison' },
    ],
    platforms: ['android'],
  },
  {
    id: 6,
    name: 'VerdeScan',
    client: 'Verde Organic',
    category: 'Retail & Commerce',
    framework: 'rn',
    frameworkLabel: 'React Native',
    tags: ['Scan produit', 'Fidélité', 'E-commerce', 'NFC'],
    year: '2024',
    bg: 'bg-green-900',
    screenBg: 'bg-green-700',
    accent: 'bg-lime-400',
    accentText: 'text-lime-400',
    textColor: 'text-white',
    desc: 'Application de fidélité et de scan produit pour la marque Verde Organic. Les clients scannent les produits, accumulent des points et passent commande.',
    challenge: 'Créer un parcours d\'achat en magasin augmenté qui fidélise sans être intrusif.',
    features: ['Scan code-barres & QR', 'Programme de fidélité', 'Commander en avance', 'Traçabilité produit', 'Push notifications', 'Carte des points de vente'],
    stats: [
      { icon: <Users className="w-4 h-4" />,     value: '8K+',  label: 'Clients fidèles' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '×2',   label: 'Fréquence d\'achat' },
      { icon: <Star className="w-4 h-4" />,       value: '4.7★', label: 'Note App Store' },
      { icon: <Clock className="w-4 h-4" />,      value: '6 sem', label: 'Délai livraison' },
    ],
    platforms: ['ios', 'android'],
  },
];

const filterOptions: { id: FilterType; label: string }[] = [
  { id: 'toutes',  label: 'Toutes les apps' },
  { id: 'rn',      label: 'React Native' },
  { id: 'flutter', label: 'Flutter' },
  { id: 'ios',     label: 'iOS uniquement' },
  { id: 'android', label: 'Android uniquement' },
];

/* ── Mockup téléphone simulé ── */
const PhonePreview: React.FC<{ app: AppProject }> = ({ app }) => (
  <div className="flex justify-center gap-4 py-2">
    <div className={`w-24 ${app.bg} rounded-[2rem] border border-white/10 overflow-hidden p-2 shadow-lg`}>
      <div className="w-10 h-1.5 bg-white/20 rounded-full mx-auto mb-2"></div>
      <div className={`${app.screenBg} rounded-xl h-32 flex flex-col items-center justify-center gap-2 p-2`}>
        <div className={`w-8 h-8 ${app.accent} rounded-xl opacity-80`}></div>
        <div className="space-y-1 w-full">
          <div className="h-1 bg-white/30 rounded-full"></div>
          <div className="h-1 bg-white/20 rounded-full w-3/4 mx-auto"></div>
        </div>
      </div>
      <div className="mt-2 space-y-1.5 px-1">
        <div className="h-1 bg-white/20 rounded-full"></div>
        <div className="h-1 bg-white/10 rounded-full w-3/4"></div>
        <div className={`h-4 ${app.accent} opacity-40 rounded-lg mt-2`}></div>
      </div>
    </div>
    <div className={`w-20 ${app.bg} rounded-[1.75rem] border border-white/10 overflow-hidden p-2 shadow-lg translate-y-6 opacity-70`}>
      <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-2"></div>
      <div className={`${app.screenBg} rounded-xl h-24 p-2`}>
        <div className="space-y-1.5">
          <div className="h-1 bg-white/30 rounded-full"></div>
          <div className="h-1 bg-white/20 rounded-full"></div>
        </div>
        <div className={`h-1 ${app.accent} rounded-full w-1/2 mt-3 opacity-60`}></div>
      </div>
    </div>
  </div>
);

const VosApps: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('toutes');
  const [selected, setSelected]         = useState<AppProject | null>(null);

  const filtered = activeFilter === 'toutes'
    ? apps
    : activeFilter === 'ios' || activeFilter === 'android'
    ? apps.filter(a => a.platforms.includes(activeFilter as 'ios' | 'android'))
    : apps.filter(a => a.framework === activeFilter);

  const goNext = () => {
    if (!selected) return;
    const idx = apps.findIndex(a => a.id === selected.id);
    setSelected(apps[(idx + 1) % apps.length]);
  };
  const goPrev = () => {
    if (!selected) return;
    const idx = apps.findIndex(a => a.id === selected.id);
    setSelected(apps[(idx - 1 + apps.length) % apps.length]);
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
            <span className="text-indigo-600 font-medium">Voir nos apps</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Smartphone className="w-4 h-4" /> Applications mobiles
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                Des apps qui<br />
                <span className="text-indigo-600 underline decoration-lime-400">restent</span>.
              </h1>
            </div>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Chaque application ici a été construite pour durer — performances natives, design soigné, et une attention particulière aux usages africains (Mobile Money, connexions lentes, multilangue).
              </p>
              <div className="flex gap-6 flex-wrap">
                {[
                  { value: '30+', label: 'Apps livrées' },
                  { value: '200K+', label: 'Utilisateurs actifs' },
                  { value: '4.8★', label: 'Note moyenne stores' },
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
            {filterOptions.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeFilter === f.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE ── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(app => (
            <div
              key={app.id}
              onClick={() => setSelected(app)}
              className={`group ${app.bg} rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="p-8 flex flex-col gap-5">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/10 ${app.textColor}`}>{app.frameworkLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white/10 ${app.textColor}`}>{app.year}</span>
                    <div className={`w-7 h-7 rounded-full bg-white/10 items-center justify-center hidden group-hover:flex ${app.textColor}`}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Phone mockup */}
                <PhonePreview app={app} />

                {/* Platforms */}
                <div className="flex gap-2">
                  {app.platforms.includes('ios') && (
                    <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full">
                      <Apple className="w-3 h-3 text-white opacity-70" />
                      <span className={`text-xs font-semibold ${app.textColor} opacity-70`}>iOS</span>
                    </div>
                  )}
                  {app.platforms.includes('android') && (
                    <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full">
                      <Smartphone className="w-3 h-3 text-white opacity-70" />
                      <span className={`text-xs font-semibold ${app.textColor} opacity-70`}>Android</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest opacity-40 mb-1 ${app.textColor}`}>{app.client}</p>
                  <h3 className={`text-2xl font-black ${app.textColor}`}>{app.name}</h3>
                  <p className={`text-sm opacity-60 mt-1 ${app.textColor}`}>{app.category}</p>
                  <p className={`text-sm mt-2 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ${app.accentText}`}>
                    {app.stats[0].value} {app.stats[0].label} →
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
            {/* Header */}
            <div className={`${selected.bg} p-8`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${selected.accent} rounded-2xl`}></div>
                  <div className="flex gap-2" role="group" aria-label="Navigation du projet">
                    <button onClick={goPrev} title="Projet précédent" aria-label="Projet précédent" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"><ChevronLeft className="w-4 h-4 text-white" /></button>
                    <button onClick={goNext} title="Projet suivant" aria-label="Projet suivant" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"><ChevronRight className="w-4 h-4 text-white" /></button>
                    <button onClick={() => setSelected(null)} title="Fermer" aria-label="Fermer la modal" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition text-white">✕</button>
                </div>
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                {selected.tags.map(t => (
                  <span key={t} className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/10 ${selected.textColor}`}>{t}</span>
                ))}
              </div>
              <p className={`text-xs font-bold uppercase tracking-widest opacity-50 mb-1 ${selected.textColor}`}>
                {selected.client} · {selected.year} · {selected.frameworkLabel}
              </p>
              <h2 className={`text-3xl font-black ${selected.textColor}`}>{selected.name}</h2>
              <p className={`opacity-60 mt-1 text-sm ${selected.textColor}`}>{selected.category}</p>
            </div>

            <div className="p-8 space-y-7">
              <p className="text-gray-600 leading-relaxed">{selected.desc}</p>

              {/* Défi */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Défi technique</p>
                <p className="text-amber-900 text-sm leading-relaxed">{selected.challenge}</p>
              </div>

              {/* Fonctionnalités */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Fonctionnalités clés</p>
                <div className="grid grid-cols-2 gap-2">
                  {selected.features.map(f => (
                    <div key={f} className="flex items-start gap-2 bg-gray-50 rounded-xl p-3">
                      <span className="text-lime-500 font-bold text-sm mt-0.5">✓</span>
                      <span className="text-gray-700 text-xs font-medium leading-tight">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Résultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selected.stats.map((s, i) => (
                    <div key={i} className="bg-indigo-900 text-white rounded-2xl p-4 text-center">
                      <div className={`flex justify-center mb-1 ${selected.accentText}`}>{s.icon}</div>
                      <p className={`text-xl font-black ${selected.accentText}`}>{s.value}</p>
                      <p className="text-indigo-300 text-xs mt-0.5 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plateformes */}
              <div className="flex gap-3">
                {selected.platforms.includes('ios') && (
                  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-full">
                    <Apple className="w-4 h-4" />
                    <span className="text-sm font-bold">Disponible sur iOS</span>
                  </div>
                )}
                {selected.platforms.includes('android') && (
                  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-full">
                    <Smartphone className="w-4 h-4" />
                    <span className="text-sm font-bold">Disponible sur Android</span>
                  </div>
                )}
              </div>

              {/* Témoignage */}
              {selected.testimonial && (
                <div className="bg-slate-900 text-white rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">"{selected.testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${selected.accent} rounded-full flex items-center justify-center font-black text-slate-900 text-sm`}>
                      {selected.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{selected.testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{selected.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/devis" onClick={() => setSelected(null)} className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition text-sm">
                  App similaire ? Devis gratuit <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/demarrer" onClick={() => setSelected(null)} className="flex-1 flex items-center justify-center border-2 border-gray-200 px-6 py-4 rounded-full font-bold hover:border-indigo-400 transition text-sm">
                  Démarrer mon app
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TECHNO ── */}
      <section className="py-24 px-6 bg-indigo-900 text-white rounded-[3rem] mx-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos technologies</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'React Native', badge: '⚛', desc: 'Notre stack principal pour les apps multiplateformes. Une base de code, iOS et Android natifs.', pros: ['Partage de code iOS/Android', 'Performances proches du natif', 'Écosystème JS/TS', 'Hot reload'] },
              { name: 'Flutter', badge: '🎯', desc: 'Idéal pour des UIs très personnalisées ou des performances maximales sur les deux plateformes.', pros: ['Performances 60fps garanties', 'UI pixel-perfect', 'Dart moderne', 'Excellent sur Android'] },
              { name: 'Swift / Kotlin', badge: '🔧', desc: 'Pour les projets nécessitant un accès profond aux APIs système iOS ou Android.', pros: ['Accès APIs système natif', 'Meilleures performances possibles', 'ARKit, CoreML (iOS)', 'Jetpack Compose (Android)'] },
            ].map((tech, i) => (
              <div key={i} className="bg-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all">
                <p className="text-4xl mb-4">{tech.badge}</p>
                <h3 className="text-xl font-black mb-3">{tech.name}</h3>
                <p className="text-indigo-200 text-sm leading-relaxed mb-5">{tech.desc}</p>
                <div className="space-y-2">
                  {tech.pros.map(p => (
                    <div key={p} className="flex items-center gap-2 text-sm">
                      <span className="text-lime-400">✓</span>
                      <span className="text-indigo-100">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Votre app,<br /><span className="text-indigo-600 underline decoration-lime-400">prochainement sur les stores</span>.</h2>
          <p className="text-gray-500 text-lg mb-10">De l'idée à la publication — on gère tout.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition">
              Demander un devis <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link to="/estimer" className="inline-flex items-center gap-2 border-2 border-gray-200 px-10 py-4 rounded-full font-bold hover:border-indigo-400 transition">
              Estimer mon projet
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2025 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default VosApps;