import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import {
  ChevronRight, Palette, Layout, Smartphone, Zap,
  Send, CheckCircle, Loader, Clock, Phone, Mail,
  Star, Shield, Headphones,
} from 'lucide-react';

// ─── CONFIG EMAILJS ──────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_DEVIS = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY  as string;
// ─────────────────────────────────────────────────────────────────────────────

type ServiceId = 'branding' | 'uiux' | 'mobile' | 'complet';

interface DevisForm {
  services: ServiceId[];
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  budget: string;
  message: string;
}

const services: { id: ServiceId; label: string; desc: string; icon: React.ReactNode; price: string; color: string }[] = [
  { id: 'branding', label: 'Branding & Identité', desc: 'Logo, charte, guide de marque',          icon: <Palette    className="w-5 h-5" />, price: 'Dès 150 000 F', color: 'indigo'  },
  { id: 'uiux',     label: 'Conception UI/UX',    desc: 'Maquettes, prototypes, design system',   icon: <Layout     className="w-5 h-5" />, price: 'Dès 200 000 F', color: 'violet'  },
  { id: 'mobile',   label: 'App Mobile',           desc: 'iOS & Android, React Native / Flutter', icon: <Smartphone className="w-5 h-5" />, price: 'Dès 500 000 F', color: 'emerald' },
  { id: 'complet',  label: 'Projet Complet',       desc: 'Branding + UI/UX + Développement',      icon: <Zap        className="w-5 h-5" />, price: 'Sur mesure',    color: 'amber'   },
];

const budgetOptions = [
  '< 100 000 F',
  '100 000 – 300 000 F',
  '300 000 – 700 000 F',
  '700 000 – 2 000 000 F',
  '+ 2 000 000 F',
];

// ─── Validation anti-injection ───────────────────────────────────────────────
const htmlRegex  = /<[^>]*>/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validerFormulaire = (form: DevisForm): string | null => {
  if (form.services.length === 0) return 'Sélectionnez au moins un service.';
  if (!form.nom.trim())           return 'Le nom est requis.';
  if (form.nom.length > 100)      return 'Nom trop long.';
  if (!emailRegex.test(form.email)) return 'Email invalide.';
  if (!form.budget)               return 'Sélectionnez un budget.';
  if (form.message.length > 2000) return 'Message trop long (2000 caractères max).';
  if (htmlRegex.test(form.nom) || htmlRegex.test(form.message) || htmlRegex.test(form.entreprise))
    return 'Caractères non autorisés détectés.';
  return null;
};
// ─────────────────────────────────────────────────────────────────────────────

const DemanderDevis: React.FC = () => {
  const [form, setForm] = useState<DevisForm>({
    services: [],
    nom: '', email: '', telephone: '', entreprise: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  // ── Rate limiting ──────────────────────────────────────────────────────────
  const [lastSent, setLastSent]   = useState<number>(0);
  // ──────────────────────────────────────────────────────────────────────────

  const toggleService = (id: ServiceId) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id],
    }));
  };

  const isValid = form.services.length > 0 && form.nom && form.email && form.budget;

  const handleSubmit = async () => {
    // ── Rate limiting : 30 secondes entre chaque envoi ──
    const now = Date.now();
    if (now - lastSent < 30000) {
      setError('⏳ Attendez 30 secondes avant de renvoyer.');
      return;
    }

    // ── Validation ──
    const validationError = validerFormulaire(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLastSent(now);
    setLoading(true);
    setError('');

    const servicesLabel = form.services
      .map(id => services.find(s => s.id === id)?.label)
      .join(', ');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_DEVIS,
        {
          type:        'Demande de devis',
          nom:         form.nom,
          email:       form.email,
          telephone:   form.telephone  || 'Non renseigné',
          entreprise:  form.entreprise || 'Non renseignée',
          service:     servicesLabel,
          budget:      form.budget,
          delai:       '—',
          description: form.message   || 'Aucun message supplémentaire.',
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("L'envoi a échoué. Contactez-nous directement à deugoueclaudedaurian@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  /* ── PAGE CONFIRMATION ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFDFF] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-lime-200">
            <CheckCircle className="w-12 h-12 text-slate-900" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Devis reçu ! 🎉</h1>
          <p className="text-gray-500 mb-2">
            Merci <span className="font-bold text-slate-900">{form.nom}</span>, votre demande de devis a bien été envoyée.
          </p>
          <p className="text-gray-500 mb-10">
            Vous recevrez une réponse détaillée à <span className="text-indigo-600 font-semibold">{form.email}</span> sous <strong>24h ouvrées</strong>.
          </p>
          <div className="bg-indigo-900 text-white rounded-3xl p-7 mb-8 text-left space-y-3">
            <p className="text-lime-400 font-bold mb-4">Récapitulatif de votre demande</p>
            {[
              { label: 'Services',        value: form.services.map(id => services.find(s => s.id === id)?.label).join(', ') },
              { label: 'Budget envisagé', value: form.budget },
              { label: 'Contact',         value: form.email  },
            ].map(row => (
              <div key={row.label} className="flex justify-between text-sm">
                <span className="text-indigo-300">{row.label}</span>
                <span className="font-semibold text-right max-w-[60%]">{row.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition text-sm">
              Retour à l'accueil
            </Link>
            <Link to="/travaux" className="border-2 border-gray-200 px-8 py-3.5 rounded-full font-bold hover:border-indigo-400 transition text-sm">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ── PAGE PRINCIPALE ── */
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">
      <Navbar />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-10">
            <Link to="/" className="hover:text-indigo-600 transition">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-indigo-600 font-medium">Demander un devis</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* ── FORMULAIRE (2/3) ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-5">
                  <Send className="w-4 h-4" /> Devis gratuit
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Obtenez votre devis<br />
                  <span className="text-indigo-600 underline decoration-lime-400">personnalisé</span>.
                </h1>
                <p className="text-gray-500 leading-relaxed max-w-lg">
                  Remplissez ce formulaire en moins d'une minute. Nous vous envoyons une proposition détaillée et chiffrée sous 24h — sans engagement.
                </p>
              </div>

              {/* BLOC 1 — Services */}
              <div>
                <h2 className="text-xl font-bold mb-1">Quels services vous intéressent ?</h2>
                <p className="text-gray-500 text-sm mb-5">Sélection multiple possible.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map(s => {
                    const active = form.services.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={`group p-6 rounded-[1.75rem] text-left border-2 transition-all ${
                          active
                            ? 'border-indigo-600 bg-indigo-50 shadow-lg shadow-indigo-100'
                            : 'border-gray-100 bg-white hover:border-indigo-200 hover:shadow-md'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className={`p-2.5 rounded-xl transition-colors ${active ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-indigo-600'}`}>
                            {s.icon}
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${active ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'}`}>
                            {active && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                        </div>
                        <h3 className="font-bold mb-1">{s.label}</h3>
                        <p className="text-gray-500 text-xs mb-2">{s.desc}</p>
                        <p className={`text-sm font-bold ${active ? 'text-indigo-600' : 'text-gray-400'}`}>{s.price}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* BLOC 2 — Budget */}
              <div>
                <h2 className="text-xl font-bold mb-1">Budget envisagé</h2>
                <p className="text-gray-500 text-sm mb-5">Cela nous aide à dimensionner la meilleure solution.</p>
                <div className="flex flex-wrap gap-3">
                  {budgetOptions.map(b => (
                    <button
                      key={b}
                      onClick={() => setForm({ ...form, budget: b })}
                      className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all ${
                        form.budget === b
                          ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-indigo-300'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* BLOC 3 — Coordonnées */}
              <div>
                <h2 className="text-xl font-bold mb-1">Vos coordonnées</h2>
                <p className="text-gray-500 text-sm mb-5">Pour vous envoyer le devis.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: 'nom',        label: 'Nom complet *',       placeholder: 'Jean Dupont',            type: 'text'  },
                    { key: 'email',      label: 'Email *',             placeholder: 'jean@example.com',       type: 'email' },
                    { key: 'telephone',  label: 'Téléphone',           placeholder: '+237 6 XX XX XX XX',     type: 'tel'   },
                    { key: 'entreprise', label: 'Entreprise / Projet', placeholder: 'Nom de votre structure', type: 'text'  },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="block text-sm font-bold mb-2 text-gray-700">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof DevisForm] as string}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-100 px-4 py-3.5 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOC 4 — Message optionnel */}
              <div>
                <h2 className="text-xl font-bold mb-1">Message <span className="font-normal text-gray-400">(optionnel)</span></h2>
                <p className="text-gray-500 text-sm mb-5">Décrivez brièvement votre projet si vous le souhaitez.</p>
                <textarea
                  rows={4}
                  placeholder="Quelques mots sur votre projet, vos attentes, votre deadline..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-gray-50 border-2 border-gray-100 px-4 py-3.5 rounded-2xl outline-none focus:border-indigo-500 focus:bg-white transition text-sm resize-none"
                />
              </div>

              {/* Erreur */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-2xl text-sm">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!isValid || loading}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-base transition-all ${
                  isValid && !loading
                    ? 'bg-indigo-600 text-white hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {loading
                  ? <><Loader className="w-5 h-5 animate-spin" /> Envoi en cours…</>
                  : <><Send className="w-5 h-5" /> Recevoir mon devis gratuit</>
                }
              </button>
              <p className="text-xs text-gray-400 text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par FrameTech concernant votre projet.
              </p>
            </div>

            {/* ── SIDEBAR (1/3) ── */}
            <div className="space-y-6 lg:sticky lg:top-28">

              {/* Garanties */}
              <div className="bg-indigo-900 text-white rounded-3xl p-8">
                <h3 className="font-bold text-lg mb-6 text-lime-400">Notre engagement</h3>
                <div className="space-y-5">
                  {[
                    { icon: <Clock      className="w-5 h-5" />, text: 'Réponse garantie sous 24h ouvrées'    },
                    { icon: <Shield     className="w-5 h-5" />, text: 'Devis 100% gratuit et sans engagement' },
                    { icon: <Star       className="w-5 h-5" />, text: 'Proposition détaillée et chiffrée'     },
                    { icon: <Headphones className="w-5 h-5" />, text: 'Accompagnement personnalisé'           },
                    { icon: <CheckCircle className="w-5 h-5" />,text: '80+ clients satisfaits depuis 2020'   },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="text-lime-400 flex-shrink-0 mt-0.5">{item.icon}</div>
                      <p className="text-indigo-200 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact direct */}
              <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm">
                <h3 className="font-bold mb-1">Vous préférez nous appeler ?</h3>
                <p className="text-gray-500 text-sm mb-5">Lun–Ven, 8h–18h (heure de Douala)</p>
                <a href="tel:+237694218100" className="flex items-center gap-3 bg-gray-50 hover:bg-indigo-50 px-4 py-3 rounded-2xl transition group mb-3">
                  <div className="w-9 h-9 bg-lime-400 rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 text-slate-900" />
                  </div>
                  <div>
                    <p className="font-bold text-sm group-hover:text-indigo-600 transition">+237 6 94 21 81 00</p>
                    <p className="text-xs text-gray-400">Appel & WhatsApp</p>
                  </div>
                </a>
                <a href="mailto:deugoueclaudedaurian@gmail.com" className="flex items-center gap-3 bg-gray-50 hover:bg-indigo-50 px-4 py-3 rounded-2xl transition group">
                  <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-bold text-sm group-hover:text-indigo-600 transition truncate text-xs">deugoueclaudedaurian@gmail.com</p>
                    <p className="text-xs text-gray-400">Email direct</p>
                  </div>
                </a>
              </div>

              {/* Témoignage */}
              <div className="bg-gray-50 rounded-3xl p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400">★</span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  "Devis reçu en moins de 2h, projet livré avant la deadline. Une équipe de haut niveau."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center font-black text-white text-sm">M</div>
                  <div>
                    <p className="font-bold text-sm">Marie Essomba</p>
                    <p className="text-gray-400 text-xs">CEO, Kora Finance</p>
                  </div>
                </div>
              </div>

              {/* Lien portfolio */}
              <Link
                to="/travaux"
                className="flex items-center justify-between bg-white border-2 border-gray-100 hover:border-indigo-400 rounded-3xl p-6 transition group"
              >
                <div>
                  <p className="font-bold">Voir nos réalisations</p>
                  <p className="text-gray-500 text-sm">80+ projets livrés</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
              </Link>
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

export default DemanderDevis;