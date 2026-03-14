import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowLeft, ChevronRight, Palette, Layout, Smartphone, Send, CheckCircle, Clock, MessageCircle, Zap, Loader } from 'lucide-react';

// ─── CONFIG EMAILJS ─────────────────────────────────────────────────────────
// Remplace ces 3 valeurs par celles de ton tableau de bord EmailJS :
// https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID      = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID; 
const EMAILJS_PUBLIC_KEY      = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_TEMPLATE_DEVIS = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_DEVIS;     // ex : 'aBcDeFgHiJkLmNoPq'
// ────────────────────────────────────────────────────────────────────────────

type Service = 'branding' | 'uiux' | 'mobile' | 'complet';
type Budget = 'starter' | 'growth' | 'premium' | 'custom';
type Step = 1 | 2 | 3 | 4;

interface FormData {
  service: Service | '';
  budget: Budget | '';
  delai: string;
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  description: string;
}

const DemarrerProjet: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<FormData>({
    service: '',
    budget: '',
    delai: '',
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    description: '',
  });

  const services: { id: Service; label: string; desc: string; icon: React.ReactNode; price: string }[] = [
    { id: 'branding', label: 'Branding & Identité', desc: 'Logo, charte graphique, guide de marque', icon: <Palette className="w-6 h-6" />, price: 'Dès 150 000 F' },
    { id: 'uiux', label: 'Conception UI/UX', desc: 'Maquettes, prototypes, design system', icon: <Layout className="w-6 h-6" />, price: 'Dès 200 000 F' },
    { id: 'mobile', label: 'App Multiplateforme', desc: 'iOS & Android, React Native / Flutter', icon: <Smartphone className="w-6 h-6" />, price: 'Dès 500 000 F' },
    { id: 'complet', label: 'Projet Complet', desc: 'Branding + UI/UX + Développement', icon: <Zap className="w-6 h-6" />, price: 'Sur devis' },
  ];

  const budgets: { id: Budget; label: string; range: string; desc: string }[] = [
    { id: 'starter', label: 'Starter', range: '100k – 300k F', desc: 'Idéal pour les projets ciblés et les startups en démarrage.' },
    { id: 'growth', label: 'Growth', range: '300k – 700k F', desc: 'Pour des projets plus complets avec un périmètre étendu.' },
    { id: 'premium', label: 'Premium', range: '700k – 2M F', desc: 'Projets ambitieux avec accompagnement stratégique.' },
    { id: 'custom', label: 'Sur mesure', range: '2M F +', desc: 'Grandes entreprises, projets complexes ou long terme.' },
  ];

  const delais = ['Dès que possible', 'Dans 1 mois', 'Dans 2-3 mois', 'Pas de deadline précise'];

  const steps = [
    { num: 1, label: 'Service' },
    { num: 2, label: 'Budget & Délai' },
    { num: 3, label: 'Vos infos' },
    { num: 4, label: 'Description' },
  ];

  const canNext = () => {
    if (step === 1) return form.service !== '';
    if (step === 2) return form.budget !== '' && form.delai !== '';
    if (step === 3) return form.nom !== '' && form.email !== '';
    if (step === 4) return form.description !== '';
    return false;
  };

  const sendEmail = async () => {
    if (!canNext()) return;
    setLoading(true);
    setError('');

    const serviceLabel  = services.find(s => s.id === form.service)?.label ?? form.service;
    const budgetLabel   = budgets.find(b => b.id === form.budget)?.range  ?? form.budget;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_DEVIS,
        {
          nom:         form.nom,
          email:       form.email,
          telephone:   form.telephone  || 'Non renseigné',
          entreprise:  form.entreprise || 'Non renseignée',
          service:     serviceLabel,
          budget:      budgetLabel,
          delai:       form.delai,
          description: form.description,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError("L'envoi a échoué. Veuillez réessayer ou nous contacter directement par email.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFDFF] flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <div className="w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-slate-900" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Projet reçu ! 🎉</h1>
          <p className="text-gray-500 text-lg mb-2">
            Merci <span className="font-bold text-slate-900">{form.nom}</span>, votre demande a bien été envoyée.
          </p>
          <p className="text-gray-500 mb-10">
            Notre équipe vous contactera à <span className="text-indigo-600 font-semibold">{form.email}</span> dans les <strong>24h ouvrées</strong>.
          </p>
          <div className="bg-indigo-900 text-white rounded-3xl p-8 mb-8 text-left">
            <h3 className="font-bold text-lg mb-4 text-lime-400">Récapitulatif</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-indigo-300">Service</span>
                <span className="font-semibold">{services.find(s => s.id === form.service)?.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">Budget</span>
                <span className="font-semibold">{budgets.find(b => b.id === form.budget)?.range}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">Délai</span>
                <span className="font-semibold">{form.delai}</span>
              </div>
            </div>
          </div>
          <a href="/" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition">
            Retour à l'accueil <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">
      {/* NAVIGATION */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
            Frame<span className="text-indigo-600">Tech</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition">
            <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
          </a>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Réponse sous 24h</span>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <MessageCircle className="w-4 h-4" /> Démarrer un projet
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-4">
              Parlons de votre <span className="text-indigo-600 underline decoration-lime-400">projet</span>.
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Remplissez ce formulaire en 2 minutes — nous vous répondons sous 24h avec une proposition personnalisée.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">

            {/* FORMULAIRE */}
            <div className="md:col-span-2">

              {/* Stepper */}
              <div className="flex items-center gap-2 mb-10">
                {steps.map((s, i) => (
                  <React.Fragment key={s.num}>
                    <div className="flex items-center gap-2">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                        step === s.num
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                          : step > s.num
                          ? 'bg-lime-400 text-slate-900'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
                      </div>
                      <span className={`text-sm font-semibold hidden sm:block ${step === s.num ? 'text-indigo-600' : step > s.num ? 'text-gray-500' : 'text-gray-300'}`}>
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 rounded-full transition-all ${step > s.num ? 'bg-lime-400' : 'bg-gray-100'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Quel service vous intéresse ?</h2>
                  <p className="text-gray-500 mb-8">Sélectionnez le type de prestation dont vous avez besoin.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setForm({ ...form, service: s.id })}
                        className={`p-6 rounded-[2rem] text-left transition-all border-2 ${
                          form.service === s.id
                            ? 'border-indigo-600 bg-indigo-50 shadow-lg shadow-indigo-100'
                            : 'border-gray-100 bg-white hover:border-indigo-300 hover:shadow-md'
                        }`}
                      >
                        <div className={`p-3 rounded-xl inline-block mb-4 transition-colors ${form.service === s.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-indigo-600'}`}>
                          {s.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-1">{s.label}</h3>
                        <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
                        <p className={`text-sm font-bold ${form.service === s.id ? 'text-indigo-600' : 'text-gray-400'}`}>{s.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Budget & délai</h2>
                  <p className="text-gray-500 mb-8">Ces informations nous aident à proposer la meilleure solution.</p>
                  <h3 className="font-bold text-lg mb-4">Votre budget</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {budgets.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setForm({ ...form, budget: b.id })}
                        className={`p-6 rounded-[2rem] text-left transition-all border-2 ${
                          form.budget === b.id
                            ? 'border-indigo-600 bg-indigo-50 shadow-lg shadow-indigo-100'
                            : 'border-gray-100 bg-white hover:border-indigo-300'
                        }`}
                      >
                        <p className={`font-black text-xl mb-1 ${form.budget === b.id ? 'text-indigo-600' : 'text-slate-900'}`}>{b.label}</p>
                        <p className="text-sm font-bold text-gray-400 mb-2">{b.range}</p>
                        <p className="text-gray-500 text-sm">{b.desc}</p>
                      </button>
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-4">Délai souhaité</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {delais.map((d) => (
                      <button
                        key={d}
                        onClick={() => setForm({ ...form, delai: d })}
                        className={`p-4 rounded-2xl text-sm font-semibold text-left transition-all border-2 ${
                          form.delai === d
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                            : 'border-gray-100 bg-white text-gray-600 hover:border-indigo-300'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Vos coordonnées</h2>
                  <p className="text-gray-500 mb-8">Pour qu'on puisse vous recontacter avec notre proposition.</p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { field: 'nom', label: 'Nom complet *', placeholder: 'Jean Dupont', type: 'text' },
                      { field: 'email', label: 'Email *', placeholder: 'jean@example.com', type: 'email' },
                      { field: 'telephone', label: 'Téléphone', placeholder: '+237 6 XX XX XX XX', type: 'tel' },
                      { field: 'entreprise', label: 'Entreprise / Projet', placeholder: 'Nom de votre structure', type: 'text' },
                    ].map((input) => (
                      <div key={input.field}>
                        <label className="block text-sm font-bold mb-2 text-gray-700">{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={form[input.field as keyof FormData]}
                          onChange={(e) => setForm({ ...form, [input.field]: e.target.value })}
                          className="w-full bg-gray-50 border-2 border-gray-100 px-4 py-3.5 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition text-sm font-medium"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Décrivez votre projet</h2>
                  <p className="text-gray-500 mb-8">Plus vous êtes précis, plus notre proposition sera pertinente.</p>
                  <div className="mb-5">
                    <label className="block text-sm font-bold mb-2 text-gray-700">Description du projet *</label>
                    <textarea
                      rows={6}
                      placeholder="Ex : Je veux créer une application de livraison de repas à Douala. L'app doit permettre aux utilisateurs de commander, suivre leur commande en temps réel et payer via Mobile Money..."
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className="w-full bg-gray-50 border-2 border-gray-100 px-4 py-3.5 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition text-sm font-medium resize-none"
                    />
                  </div>
                  <div className="bg-indigo-900 text-white rounded-3xl p-6 mt-8">
                    <h3 className="font-bold text-lime-400 mb-4">Récapitulatif de votre demande</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-indigo-300 text-xs mb-1">Service</p>
                        <p className="font-semibold">{services.find(s => s.id === form.service)?.label}</p>
                      </div>
                      <div>
                        <p className="text-indigo-300 text-xs mb-1">Budget</p>
                        <p className="font-semibold">{budgets.find(b => b.id === form.budget)?.range}</p>
                      </div>
                      <div>
                        <p className="text-indigo-300 text-xs mb-1">Délai</p>
                        <p className="font-semibold">{form.delai}</p>
                      </div>
                      <div>
                        <p className="text-indigo-300 text-xs mb-1">Contact</p>
                        <p className="font-semibold">{form.nom}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-10">
                {step > 1 ? (
                  <button
                    onClick={() => setStep((step - 1) as Step)}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 font-semibold text-sm hover:border-indigo-400 transition disabled:opacity-40"
                  >
                    <ArrowLeft className="w-4 h-4" /> Précédent
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    onClick={() => canNext() && setStep((step + 1) as Step)}
                    disabled={!canNext()}
                    className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all ${
                      canNext()
                        ? 'bg-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Continuer <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex flex-col items-end gap-3">
                    {error && (
                      <p className="text-red-500 text-sm text-right max-w-xs">{error}</p>
                    )}
                    <button
                      onClick={sendEmail}
                      disabled={!canNext() || loading}
                      className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all ${
                        canNext() && !loading
                          ? 'bg-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-200'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {loading
                        ? <><Loader className="w-4 h-4 animate-spin" />&nbsp;Envoi en cours…</>
                        : <><Send className="w-4 h-4" />&nbsp;Envoyer le projet</>
                      }
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6 md:sticky md:top-28">
              <div className="bg-indigo-900 text-white rounded-3xl p-8">
                <h3 className="font-bold text-lg mb-6 text-lime-400">Pourquoi FrameTech ?</h3>
                <div className="space-y-4">
                  {[
                    { icon: '⚡', text: 'Réponse sous 24h ouvrées' },
                    { icon: '🎯', text: 'Devis gratuit et sans engagement' },
                    { icon: '🤝', text: 'Accompagnement du début à la fin' },
                    { icon: '🌍', text: 'Expertise locale, standards internationaux' },
                    { icon: '✅', text: '80+ projets livrés avec succès' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <p className="text-indigo-200 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Préférez-vous appeler ?</h3>
                <p className="text-gray-500 text-sm mb-5">Disponible lundi–vendredi, 8h–18h.</p>
                <a href="tel:+237694218100" className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-2xl hover:bg-indigo-50 transition group mb-3">
                  <div className="w-9 h-9 bg-lime-400 rounded-xl flex items-center justify-center text-sm">📞</div>
                  <div>
                    <p className="font-bold text-sm group-hover:text-indigo-600 transition">+237 6 94 21 81 00</p>
                    <p className="text-xs text-gray-400">Appel ou WhatsApp</p>
                  </div>
                </a>
                <a href="mailto:deugoueclaudedaurian@gmail.com" className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-2xl hover:bg-indigo-50 transition group">
                  <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center text-sm">✉️</div>
                  <div>
                    <p className="font-bold text-sm group-hover:text-indigo-600 transition truncate">deugoueclaudedaurian@gmail.com</p>
                    <p className="text-xs text-gray-400">Email direct</p>
                  </div>
                </a>
              </div>

              <div className="bg-gray-50 rounded-3xl p-6">
                <div className="flex justify-between text-sm font-semibold mb-3">
                  <span className="text-gray-500">Progression</span>
                  <span className="text-indigo-600">{Math.round(((step - 1) / 3) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${((step - 1) / 3) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-3">Étape {step} sur 4 — {steps[step - 1].label}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2026 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default DemarrerProjet;