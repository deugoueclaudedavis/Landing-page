import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {
  ChevronRight, Palette, Layout, Smartphone, Zap,
  CheckCircle, ArrowUpRight, Calculator, Clock,
  Minus, Plus, RotateCcw,
} from 'lucide-react';

/* ─── TYPES ─────────────────────────────────────────────────────────────── */
interface Option {
  id: string;
  label: string;
  desc: string;
  price: number;
  duration: number; // jours
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  multiple: boolean;
  options: Option[];
}

/* ─── DONNÉES ────────────────────────────────────────────────────────────── */
const sections: Section[] = [
  {
    id: 'service',
    title: 'Quel type de projet ?',
    subtitle: 'Sélectionnez un ou plusieurs services.',
    multiple: true,
    options: [
      { id: 'branding',   label: 'Branding & Identité',  desc: 'Logo, charte, guide de marque', price: 150000, duration: 14 },
      { id: 'uiux',       label: 'Maquettes UI/UX',      desc: 'Wireframes + prototype Figma',   price: 200000, duration: 21 },
      { id: 'mobile',     label: 'App Mobile',            desc: 'iOS & Android natif ou cross',   price: 500000, duration: 56 },
      { id: 'web',        label: 'Site / Web App',        desc: 'Site vitrine ou application web', price: 350000, duration: 28 },
    ],
  },
  {
    id: 'complexity',
    title: 'Complexité du projet',
    subtitle: 'Combien de fonctionnalités ou d\'écrans ?',
    multiple: false,
    options: [
      { id: 'simple',  label: 'Simple',    desc: '< 10 écrans / fonctions', price: 0,      duration: 0  },
      { id: 'medium',  label: 'Moyen',     desc: '10 à 30 écrans',          price: 100000, duration: 14 },
      { id: 'complex', label: 'Complexe',  desc: '30 à 60 écrans',          price: 300000, duration: 28 },
      { id: 'xlarge',  label: 'Très large',desc: '60+ écrans / système',    price: 600000, duration: 56 },
    ],
  },
  {
    id: 'extras',
    title: 'Options supplémentaires',
    subtitle: 'Ajoutez des services complémentaires.',
    multiple: true,
    options: [
      { id: 'design_system', label: 'Design System',        desc: 'Bibliothèque de composants',     price: 100000, duration: 10 },
      { id: 'animation',     label: 'Animations & Motion',  desc: 'Micro-interactions Lottie',      price:  80000, duration:  7 },
      { id: 'usertest',      label: 'Tests utilisateurs',   desc: 'Sessions Maze / UserTesting',    price:  60000, duration:  5 },
      { id: 'maintenance',   label: 'Maintenance 3 mois',   desc: 'Support et évolutions',          price: 120000, duration:  0 },
    ],
  },
  {
    id: 'urgency',
    title: 'Délai souhaité',
    subtitle: 'Quel est votre niveau d\'urgence ?',
    multiple: false,
    options: [
      { id: 'normal',  label: 'Standard',  desc: 'Délai normal selon complexité', price: 0,      duration: 0  },
      { id: 'fast',    label: 'Rapide',    desc: 'Livraison 30% plus rapide',     price: 80000,  duration: -7  },
      { id: 'urgent',  label: 'Urgent',    desc: 'Livraison 50% plus rapide',     price: 200000, duration: -14 },
    ],
  },
];

const formatPrice = (n: number) =>
  n >= 1000000
    ? `${(n / 1000000).toFixed(1).replace('.0', '')} M FCFA`
    : `${n.toLocaleString('fr-FR')} FCFA`;

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
const EstimerProjet: React.FC = () => {
  const [selections, setSelections] = useState<Record<string, string[]>>({
    service: [], complexity: [], extras: [], urgency: [],
  });
  const [copied, setCopied] = useState(false);

  const toggle = (sectionId: string, optionId: string, multiple: boolean) => {
    setSelections(prev => {
      const current = prev[sectionId] ?? [];
      if (multiple) {
        return {
          ...prev,
          [sectionId]: current.includes(optionId)
            ? current.filter(id => id !== optionId)
            : [...current, optionId],
        };
      }
      return { ...prev, [sectionId]: current[0] === optionId ? [] : [optionId] };
    });
  };

  const reset = () => setSelections({ service: [], complexity: [], extras: [], urgency: [] });

  /* Calcul */
  const allSelected: Option[] = sections.flatMap(s =>
    s.options.filter(o => selections[s.id]?.includes(o.id))
  );
  const totalPrice    = allSelected.reduce((sum, o) => sum + o.price, 0);
  const baseDuration  = allSelected.reduce((sum, o) => sum + o.duration, 0);
  const totalDuration = Math.max(7, baseDuration);

  const hasSelection = allSelected.length > 0;
  const priceMin     = Math.round(totalPrice * 0.9 / 5000) * 5000;
  const priceMax     = Math.round(totalPrice * 1.2 / 5000) * 5000;

  const weeksMin = Math.floor(totalDuration / 7);
  const weeksMax = weeksMin + 2;

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-36 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-indigo-600 transition">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-indigo-600 font-medium">Estimer mon projet</span>
          </div>
          <div className="max-w-2xl mb-4">
            <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Calculator className="w-4 h-4" /> Estimateur de projet
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-4">
              Combien coûte<br />
              <span className="text-indigo-600 underline decoration-lime-400">votre projet</span> ?
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Configurez votre projet en quelques clics et obtenez une estimation instantanée — sans engagement, sans inscription.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENU PRINCIPAL ── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">

          {/* ── FORMULAIRE (2/3) ── */}
          <div className="lg:col-span-2 space-y-10">
            {sections.map(section => (
              <div key={section.id}>
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-gray-500 text-sm mb-5">{section.subtitle}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.options.map(option => {
                    const active = selections[section.id]?.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        onClick={() => toggle(section.id, option.id, section.multiple)}
                        className={`group p-6 rounded-[1.75rem] text-left border-2 transition-all ${
                          active
                            ? 'border-indigo-600 bg-indigo-50 shadow-lg shadow-indigo-100'
                            : 'border-gray-100 bg-white hover:border-indigo-200 hover:shadow-md'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all mt-0.5 ${active ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'}`}>
                            {active && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          {option.price > 0 && (
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${active ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'}`}>
                              +{formatPrice(option.price)}
                            </span>
                          )}
                        </div>
                        <h3 className={`font-bold mb-1 ${active ? 'text-indigo-700' : ''}`}>{option.label}</h3>
                        <p className="text-gray-500 text-xs">{option.desc}</p>
                        {option.duration > 0 && (
                          <p className={`text-xs mt-2 font-semibold flex items-center gap-1 ${active ? 'text-indigo-400' : 'text-gray-300'}`}>
                            <Clock className="w-3 h-3" /> +{option.duration} jours
                          </p>
                        )}
                        {option.duration < 0 && (
                          <p className={`text-xs mt-2 font-semibold flex items-center gap-1 ${active ? 'text-lime-600' : 'text-gray-300'}`}>
                            <Clock className="w-3 h-3" /> {option.duration} jours
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <button onClick={reset} className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-600 transition font-semibold">
              <RotateCcw className="w-4 h-4" /> Réinitialiser l'estimation
            </button>
          </div>

          {/* ── RÉSULTAT STICKY (1/3) ── */}
          <div className="lg:sticky lg:top-28 space-y-5">

            {/* Card estimation */}
            <div className="bg-indigo-900 text-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-lime-400" />
                <p className="font-bold text-lime-400">Estimation en temps réel</p>
              </div>

              {hasSelection ? (
                <>
                  {/* Prix */}
                  <div className="mb-6">
                    <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-2">Budget estimé</p>
                    <p className="text-4xl font-black text-white">
                      {formatPrice(priceMin)}
                    </p>
                    <p className="text-indigo-300 text-sm mt-1">
                      jusqu'à {formatPrice(priceMax)}
                    </p>
                  </div>

                  {/* Durée */}
                  <div className="mb-6 pt-6 border-t border-white/10">
                    <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-2">Délai estimé</p>
                    <p className="text-3xl font-black text-white flex items-end gap-2">
                      {weeksMin === 0 ? '< 1' : weeksMin}
                      <span className="text-lg font-normal text-indigo-300">à {weeksMax} semaines</span>
                    </p>
                  </div>

                  {/* Récapitulatif */}
                  <div className="pt-6 border-t border-white/10 space-y-2">
                    <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">Votre sélection</p>
                    {allSelected.map(o => (
                      <div key={o.id} className="flex justify-between items-center text-sm">
                        <span className="text-indigo-200 flex items-center gap-1.5">
                          <span className="text-lime-400">✓</span> {o.label}
                        </span>
                        <span className="text-white font-semibold text-xs">
                          {o.price > 0 ? formatPrice(o.price) : 'Inclus'}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <p className="text-indigo-300 text-sm">Sélectionnez des options pour voir votre estimation apparaître ici.</p>
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="text-amber-800 text-xs leading-relaxed font-medium">
                ⚠️ Cette estimation est indicative. Le devis définitif est établi après un brief détaillé avec notre équipe.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/devis"
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm transition-all ${
                hasSelection
                  ? 'bg-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5'
                  : 'bg-gray-100 text-gray-400 pointer-events-none'
              }`}
            >
              Obtenir un devis précis <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/demarrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm border-2 border-gray-200 hover:border-indigo-400 transition"
            >
              Démarrer le projet directement
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 bg-gray-50/70">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Questions fréquentes</h2>
            <div className="h-1 w-20 bg-lime-400 mx-auto"></div>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "L'estimation est-elle précise ?",
                a: "C'est une fourchette indicative basée sur nos projets similaires. Le devis définitif est établi après un brief de 30 min avec notre équipe — il peut varier de ±20%.",
              },
              {
                q: "Comment se passe le paiement ?",
                a: "30% à la signature, 40% à mi-projet et 30% à la livraison. Paiement par Mobile Money, virement ou carte bancaire.",
              },
              {
                q: "Peut-on modifier le périmètre en cours de projet ?",
                a: "Oui, avec un avenant. On préfère être flexibles plutôt que de livrer quelque chose qui ne répond plus à vos besoins.",
              },
              {
                q: "Les fichiers sources nous appartiennent-ils ?",
                a: "Absolument. À la livraison finale, vous recevez tous les fichiers sources (Figma, SVG, code) sans restriction.",
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold list-none">
                  {faq.q}
                  <span className="w-6 h-6 bg-gray-100 group-open:bg-indigo-600 group-open:text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0 ml-4">
                    <Plus className="w-3 h-3 group-open:hidden" />
                    <Minus className="w-3 h-3 hidden group-open:block" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à chiffrer<br /><span className="text-indigo-600 underline decoration-lime-400">votre vision</span> ?</h2>
          <p className="text-gray-500 text-lg mb-10">Devis gratuit et détaillé en moins de 24h.</p>
          <Link to="/devis" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-200 transition">
            Demander mon devis gratuit <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2025 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default EstimerProjet;