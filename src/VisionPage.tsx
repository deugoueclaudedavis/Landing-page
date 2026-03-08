import React, { useState } from 'react';
import Navbar from './Navbar';
import { ChevronRight, Eye, Heart, Globe, Lightbulb, TrendingUp, Award, Users, Target, Sparkles, ArrowRight } from 'lucide-react';

const VisionPage: React.FC = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion',
      color: 'bg-rose-500',
      desc: 'Chaque projet est une œuvre. Nous mettons tout notre cœur dans chaque trait, chaque ligne de code, chaque pixel — parce que la médiocrité ne fait pas partie de notre vocabulaire.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      color: 'bg-amber-400',
      desc: "Nous ne faisons pas ce qui se fait — nous faisons ce qui n'a pas encore été fait. Curiosité permanente, veille constante, audace créative à chaque projet.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      color: 'bg-indigo-500',
      desc: "Votre succès est le nôtre. Nous travaillons avec vous, pas pour vous — en transparence totale, avec un dialogue ouvert du premier jour au dernier.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      color: 'bg-lime-500',
      desc: "Les détails font la différence entre bon et exceptionnel. Nous n'approuvons rien qui ne nous rendrait pas fiers — pas de raccourcis, pas de demi-mesures.",
    },
  ];

  const milestones = [
    { year: '2020', title: 'Naissance de FrameTech', desc: 'Fondée à Douala avec une mission claire : élever le design numérique en Afrique.' },
    { year: '2021', title: 'Premiers grands projets', desc: 'Partenariats avec des startups tech et des entreprises de la sous-région.' },
    { year: '2022', title: 'Expansion mobile', desc: 'Lancement de notre pôle développement mobile React Native & Flutter.' },
    { year: '2023', title: 'Reconnaissance régionale', desc: "50+ clients satisfaits, présence dans 5 pays d'Afrique centrale et de l'Ouest." },
    { year: '2024', title: 'Studio complet', desc: 'Équipe de 12 experts couvrant branding, UX, développement et stratégie digitale.' },
    { year: '2025', title: 'Vers l\'international', desc: 'Ouverture vers les marchés européens et nord-américains avec des clients à distance.' },
  ];

  const stats = [
    { value: '5+', label: 'Années d\'expérience' },
    { value: '80+', label: 'Projets livrés' },
    { value: '12', label: 'Experts créatifs' },
    { value: '5', label: 'Pays couverts' },
  ];

  const team = [
    { initiale: 'D', name: 'Daurian Deugoue', role: 'CEO & Design Director', color: 'bg-indigo-600' },
    { initiale: 'A', name: 'Arielle Mbock', role: 'Lead UX Designer', color: 'bg-rose-500' },
    { initiale: 'J', name: 'Jean-Paul Nkoa', role: 'Lead Developer', color: 'bg-emerald-600' },
    { initiale: 'S', name: 'Sara Kamga', role: 'Brand Strategist', color: 'bg-amber-500' },
    { initiale: 'M', name: 'Marc Eboulé', role: 'Mobile Developer', color: 'bg-violet-600' },
    { initiale: 'L', name: 'Linda Talla', role: 'Motion Designer', color: 'bg-indigo-400' },
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
            <span className="text-indigo-600 font-medium">Notre Vision</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Eye className="w-4 h-4" /> Notre Vision
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                Bâtir l'Afrique numérique de <span className="text-indigo-600 underline decoration-lime-400">demain</span>.
              </h1>
              <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
                Chez FrameTech, nous croyons que le design de qualité mondiale n'est pas un luxe réservé aux grandes capitales — il est né ici, à Douala, et rayonne à travers le continent.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition">
                  Rejoindre l'aventure
                </button>
                <button className="border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-indigo-600 transition">
                  Notre équipe
                </button>
              </div>
            </div>

            {/* Visual manifeste */}
            <div className="relative">
              <div className="bg-indigo-900 rounded-3xl p-10 shadow-2xl text-white">
                <Globe className="w-10 h-10 text-lime-400 mb-6" />
                <blockquote className="text-2xl font-bold leading-relaxed mb-6">
                  "Le design n'est pas de l'art pour l'art — c'est l'art au service de la croissance."
                </blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center font-black text-slate-900">D</div>
                  <div>
                    <p className="font-bold text-sm">Daurian Deugoue</p>
                    <p className="text-indigo-300 text-xs">Fondateur & CEO, FrameTech</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-lime-400 rounded-2xl p-5 shadow-xl hidden lg:block">
                <p className="font-black text-2xl">2020</p>
                <p className="text-xs font-medium">Fondée à Douala</p>
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

      {/* --- MISSION & VISION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition-all group">
            <div className="p-4 bg-gray-50 rounded-2xl inline-block mb-6 group-hover:bg-lime-400 transition-colors">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-gray-500 leading-relaxed">
              Rendre accessible à chaque entrepreneur, startup et entreprise africaine un design de calibre international — pour qu'aucune grande idée ne soit freinée par une mauvaise exécution visuelle.
            </p>
          </div>

          <div className="bg-indigo-900 text-white rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl transition-all group">
            <div className="p-4 bg-white/10 rounded-2xl inline-block mb-6 group-hover:bg-lime-400 group-hover:text-slate-900 transition-colors">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Notre Vision</h2>
            <p className="text-indigo-200 leading-relaxed">
              Devenir le studio de référence en Afrique subsaharienne — le nom que l'on cite quand on parle d'excellence numérique, d'identité forte et d'innovation sans frontières.
            </p>
          </div>
        </div>
      </section>

      {/* --- VALEURS --- */}
      <section className="py-24 px-6 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Ce en quoi nous croyons</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {values.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveValue(i)}
                className={`p-6 rounded-[2rem] text-left transition-all ${
                  activeValue === i
                    ? 'bg-indigo-900 text-white shadow-xl -translate-y-2'
                    : 'bg-white border border-gray-100 hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                <div className={`w-10 h-10 ${activeValue === i ? 'bg-lime-400 text-slate-900' : `${v.color} text-white`} rounded-xl flex items-center justify-center mb-4 transition-colors`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm">
            <p className="text-2xl font-bold text-indigo-600 mb-4">{values[activeValue].title}</p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">{values[activeValue].desc}</p>
          </div>
        </div>
      </section>

      {/* --- TIMELINE --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre parcours</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                <p className="text-indigo-600 font-black text-3xl mb-3">{m.year}</p>
                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                <div className="mt-4 w-8 h-1 bg-lime-400 group-hover:w-16 transition-all rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ÉQUIPE --- */}
      <section className="py-24 px-6 bg-indigo-900 text-white rounded-[3rem] mx-4 my-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Les visages derrière FrameTech</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group bg-white/10 rounded-3xl p-6 hover:bg-white/20 transition-all hover:-translate-y-2 cursor-pointer">
                <div className={`${member.color} w-full h-48 rounded-2xl mb-5 flex items-center justify-center`}>
                  <span className="text-6xl font-black text-white/80">{member.initiale}</span>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-indigo-300 text-sm mt-1">{member.role}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-white/40 group-hover:text-lime-400 transition">
                  Voir le profil <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ENGAGEMENTS --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos engagements envers vous</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="w-7 h-7 text-indigo-600" />, title: 'Résultats mesurables', desc: "Chaque livrable est accompagné de métriques et d'objectifs clairs. Pas de design sans stratégie." },
              { icon: <Globe className="w-7 h-7 text-indigo-600" />, title: 'Ancrage local, regard global', desc: "Nous connaissons le contexte africain — et nous l'associons aux meilleures pratiques mondiales." },
              { icon: <Heart className="w-7 h-7 text-indigo-600" />, title: 'Relation long terme', desc: 'Nous ne cherchons pas des clients ponctuels, mais des partenaires durables qui grandissent avec nous.' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="mb-5 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-lime-400 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Partageons cette vision ensemble.</h2>
          <p className="text-gray-500 text-lg mb-10">Vous avez un projet ambitieux ? Nous avons l'équipe qu'il lui faut.</p>
          <button className="bg-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-200 transition">
            Démarrer un projet →
          </button>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2025 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default VisionPage;