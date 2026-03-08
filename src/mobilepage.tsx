import React, { useState } from 'react';
import Navbar from './navbar';
import { ChevronRight, Smartphone, Apple, Star, Shield, Zap, RefreshCw, Code, CheckCircle } from 'lucide-react';

const MobilePage: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'ios' | 'android' | 'cross'>('cross');

  const platforms = [
    { id: 'cross' as const, label: 'Multiplateforme', sub: 'React Native / Flutter' },
    { id: 'ios' as const, label: 'iOS', sub: 'Swift / SwiftUI' },
    { id: 'android' as const, label: 'Android', sub: 'Kotlin / Jetpack' },
  ];

  const platformContent = {
    cross: {
      title: 'Un seul code, deux plateformes.',
      desc: 'Avec React Native ou Flutter, nous développons votre application une seule fois et la déployons sur iOS et Android — sans compromis sur la qualité ou les performances.',
      avantages: ['Coût réduit de 40%', 'Livraison plus rapide', 'Maintenance simplifiée', 'Performances natives'],
    },
    ios: {
      title: 'L\'excellence Apple, pixel par pixel.',
      desc: "Applications Swift natives qui respectent les Human Interface Guidelines d'Apple pour une expérience parfaitement intégrée à l'écosystème iOS.",
      avantages: ['SwiftUI & UIKit', 'ARKit & CoreML', 'App Store optimisé', 'Sécurité renforcée'],
    },
    android: {
      title: 'Android dans toute sa puissance.',
      desc: 'Applications Kotlin modernes utilisant Jetpack Compose et les dernières APIs Android pour une expérience Material You fluide et performante.',
      avantages: ['Jetpack Compose', 'Material You', 'Google Play optimisé', 'Widgets & services'],
    },
  };

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Performances natives', desc: 'Animations 60fps, temps de démarrage optimisé, consommation mémoire maîtrisée.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Sécurité intégrée', desc: 'Authentification biométrique, chiffrement des données, conformité RGPD.' },
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Mises à jour OTA', desc: 'Déployez des corrections sans passer par les stores grâce aux mises à jour over-the-air.' },
    { icon: <Code className="w-6 h-6" />, title: 'API & intégrations', desc: 'Connexion à vos APIs, Stripe, Firebase, Supabase, et toute source de données.' },
    { icon: <Star className="w-6 h-6" />, title: 'UX premium', desc: 'Animations soignées, micro-interactions, design adapté aux conventions de chaque OS.' },
    { icon: <Apple className="w-6 h-6" />, title: 'Publication stores', desc: 'Gestion complète de la soumission sur App Store et Google Play.' },
  ];

  const process = [
    { num: '01', title: 'Brief & Cadrage', desc: 'Définition des fonctionnalités, du budget et du calendrier.' },
    { num: '02', title: 'Design UX/UI', desc: 'Maquettes et prototypes interactifs validés avec vous.' },
    { num: '03', title: 'Développement', desc: 'Sprints agiles avec démonstrations régulières.' },
    { num: '04', title: 'Tests & QA', desc: 'Tests sur appareils réels, correction des bugs.' },
    { num: '05', title: 'Publication', desc: 'Soumission et validation sur les stores.' },
    { num: '06', title: 'Maintenance', desc: 'Support continu et évolutions post-lancement.' },
  ];

  const apps = [
    { name: 'PayKora', category: 'Fintech', color: 'bg-slate-900', screen: 'bg-indigo-600', tag: 'iOS & Android' },
    { name: 'FreshMed', category: 'Santé', color: 'bg-emerald-900', screen: 'bg-emerald-500', tag: 'React Native' },
    { name: 'Rideek', category: 'Transport', color: 'bg-indigo-900', screen: 'bg-lime-400', tag: 'Flutter' },
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
            <span className="text-indigo-600 font-medium">Apps Multiplateforme</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Smartphone className="w-4 h-4" /> Développement Mobile
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                Des apps que vos users <span className="text-indigo-600 underline decoration-lime-400">gardent</span>.
              </h1>
              <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
                Nous développons des applications mobiles performantes, belles et intuitives — sur iOS, Android, ou les deux à la fois avec une seule base de code.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition">
                  Estimer mon projet
                </button>
                <button className="border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-indigo-600 transition">
                  Voir nos apps
                </button>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Téléphone principal */}
                <div className="w-64 h-[520px] bg-slate-900 rounded-[3rem] shadow-2xl p-3">
                  <div className="w-full h-full bg-indigo-900 rounded-[2.5rem] overflow-hidden relative">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-5 pt-5 pb-3">
                      <span className="text-white text-xs font-bold">9:41</span>
                      <div className="w-20 h-5 bg-black rounded-full"></div>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white/50 rounded-sm"></div>
                      </div>
                    </div>
                    {/* App content */}
                    <div className="px-4">
                      <p className="text-indigo-200 text-xs mb-1">Bonjour, Marie 👋</p>
                      <p className="text-white font-bold text-lg mb-4">Tableau de bord</p>
                      <div className="bg-indigo-600 rounded-2xl p-4 mb-3">
                        <p className="text-indigo-200 text-xs mb-1">Solde total</p>
                        <p className="text-white font-black text-2xl">1 240 500 F</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/10 rounded-xl p-3">
                          <div className="w-6 h-6 bg-lime-400 rounded-lg mb-2"></div>
                          <p className="text-white text-xs font-bold">Envoyer</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3">
                          <div className="w-6 h-6 bg-indigo-300 rounded-lg mb-2"></div>
                          <p className="text-white text-xs font-bold">Recevoir</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Badge Store */}
                <div className="absolute -top-4 -right-8 bg-lime-400 rounded-2xl p-4 shadow-xl hidden lg:block">
                  <p className="font-black text-lg">4.9★</p>
                  <p className="text-xs font-medium">App Store</p>
                </div>
                <div className="absolute -bottom-4 -left-8 bg-indigo-900 text-white rounded-2xl p-4 shadow-xl hidden lg:block">
                  <p className="font-black text-lg text-lime-400">30+</p>
                  <p className="text-xs text-indigo-300">Apps livrées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLATFORM SELECTOR --- */}
      <section className="py-24 px-6 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Choisissez votre approche</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>

          <div className="flex gap-4 mb-10 flex-wrap">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePlatform(p.id)}
                className={`px-6 py-4 rounded-2xl font-bold text-left transition-all ${
                  activePlatform === p.id
                    ? 'bg-indigo-900 text-white shadow-lg'
                    : 'bg-white border border-gray-200 hover:border-indigo-300'
                }`}
              >
                <p className="text-base">{p.label}</p>
                <p className={`text-xs font-normal mt-0.5 ${activePlatform === p.id ? 'text-indigo-300' : 'text-gray-400'}`}>{p.sub}</p>
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-12 shadow-sm">
            <h3 className="text-3xl font-bold mb-4">{platformContent[activePlatform].title}</h3>
            <p className="text-gray-500 text-lg mb-8 max-w-xl">{platformContent[activePlatform].desc}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platformContent[activePlatform].avantages.map((a) => (
                <div key={a} className="flex items-center gap-2 bg-indigo-50 px-4 py-3 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-indigo-900">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Tout ce dont votre app a besoin</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="mb-5 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-lime-400 transition-colors text-indigo-600">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section className="py-24 px-6 bg-indigo-900 text-white rounded-[3rem] mx-4 my-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Applications réalisées</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {apps.map((app, i) => (
              <div key={i} className={`${app.color} rounded-3xl p-8 group hover:scale-[1.03] transition-all cursor-pointer`}>
                <div className={`${app.screen} w-full h-40 rounded-2xl mb-6 flex items-center justify-center`}>
                  <Smartphone className="w-10 h-10 text-white/60" />
                </div>
                <div className="inline-block bg-white/20 text-xs font-bold px-3 py-1 rounded-full mb-2">{app.tag}</div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{app.category}</p>
                <h3 className="text-2xl font-black text-white">{app.name}</h3>
                <div className="mt-4 flex items-center gap-1 text-sm text-white/50 group-hover:text-white/80 transition">
                  Voir le projet <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="py-24 px-6 bg-gray-50/70">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">De l'idée à l'App Store</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-lg transition-all">
                <p className="text-4xl font-black text-indigo-600 mb-4">{p.num}</p>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Votre app, demain sur les stores.</h2>
          <p className="text-gray-500 text-lg mb-10">Dites-nous votre idée. On s'occupe du reste, de la conception à la publication.</p>
          <button className="bg-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-200 transition">
            Lancer mon app →
          </button>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2025 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default MobilePage;