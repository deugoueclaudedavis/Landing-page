import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Menu, X, ChevronRight, Smartphone, Palette, Layout } from 'lucide-react';

// ─── CONFIG EMAILJS ───────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID      = 'service_q7mhxla'; 
const EMAILJS_PUBLIC_KEY      = 'PFxx8TADzIAdU6Aev';
const EMAILJS_TEMPLATE_ABONNE = 'template_u8u7c1l'; 
// ─────────────────────────────────────────────────────────────────────────────

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  to: string;
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [email, setEmail]             = useState('');
  const [abonneMsg, setAbonneMsg]     = useState('');
  const [abonneLoad, setAbonneLoad]   = useState(false);

  const handleAbonnement = async () => {
    if (!email || !email.includes('@')) {
      setAbonneMsg('❌ Entrez un email valide.');
      return;
    }
    setAbonneLoad(true);
    setAbonneMsg('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ABONNE,
        {
          email_abonne: email,
          date: new Date().toLocaleDateString('fr-FR'),
        },
        EMAILJS_PUBLIC_KEY,
      );
      setAbonneMsg('✅ Merci, vous êtes abonné !');
      setEmail('');
    } catch (err) {
      console.error(err);
      setAbonneMsg('❌ Erreur, réessayez ou contactez-nous.');
    } finally {
      setAbonneLoad(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">

      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <Link to="/" className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
            Frame<span className="text-indigo-600">Tech</span>
          </Link>

          <div className="hidden md:flex space-x-8 font-medium text-sm">
            <a href="#services" className="hover:text-indigo-600 transition">Services</a>
            <Link to="/vision" className="hover:text-indigo-600 transition">Notre Vision</Link>
            <a href="#team" className="hover:text-indigo-600 transition">L'Équipe</a>
          </div>

          <Link
            to="/demarrer"
            className="hidden md:block bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 transition"
          >
            Démarrer un projet
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col space-y-4 text-sm font-medium">
            <a href="#services" className="hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Services</a>
            <Link to="/vision" className="hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Notre Vision</Link>
            <a href="#team" className="hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>L'Équipe</a>
            <Link
              to="/demarrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition text-center"
            >
              Démarrer un projet
            </Link>
          </div>
        )}
      </nav>

      {/* --- HERO --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Les grandes marques naissent de{' '}
              <span className="text-indigo-600 underline decoration-lime-400">beaux designs</span>.
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md">
              Nous transformons vos idées en expériences numériques mémorables grâce au branding, à l'UI/UX et au développement mobile.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/travaux"
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition"
              >
                Voir nos travaux
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Équipe au bureau"
                className="w-full object-cover h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-lime-400 p-6 rounded-2xl shadow-xl hidden lg:block">
              <p className="font-bold text-2xl">100%</p>
              <p className="text-sm font-medium">Satisfaction Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOGOS / TRUST --- */}
      <div className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-40 grayscale gap-8">
          <span className="font-bold text-2xl">ASANA</span>
          <span className="font-bold text-2xl">FRAMER</span>
          <span className="font-bold text-2xl">PENDO</span>
          <span className="font-bold text-2xl">FINDER</span>
        </div>
      </div>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <div className="h-1 w-20 bg-lime-400"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            to="/branding"
            icon={<Palette className="w-8 h-8 text-indigo-600" />}
            title="Branding & Identité"
            desc="Création de logos et de chartes graphiques qui captent l'essence de votre marque."
          />
          <ServiceCard
            to="/uiux"
            icon={<Layout className="w-8 h-8 text-indigo-600" />}
            title="Conception de Maquettes"
            desc="Prototypes UI/UX haute fidélité pour vos sites et applications web."
          />
          <ServiceCard
            to="/mobile"
            icon={<Smartphone className="w-8 h-8 text-indigo-600" />}
            title="Apps Multiplateforme"
            desc="Développement d'applications mobiles performantes pour iOS et Android."
          />
        </div>
      </section>

      {/* --- SECTION ÉQUIPE --- */}
      <section id="team" className="py-24 px-6 bg-indigo-900 text-white rounded-[3rem] mx-4 my-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Nos Experts Créatifs</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Alice Dupont', role: 'Designer Senior'    },
              { name: 'Marc Lebrun',  role: 'Développeur Mobile' },
              { name: 'Sara Kamga',   role: 'UI/UX Lead'         },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="bg-white/10 rounded-3xl p-4 mb-4 group-hover:bg-white/20 transition">
                  <div className="h-64 rounded-2xl mb-4 overflow-hidden bg-indigo-700 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/60">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-indigo-200">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-6 block">
              Frame<span className="text-indigo-600">Tech</span>
            </Link>
            <p className="text-gray-500 max-w-xs mb-6">
              Prêt à lancer votre prochain grand projet avec nous ? Contactez-nous aujourd'hui.
            </p>

            {/* ── ABONNEMENT NEWSLETTER ── */}
            <div className="flex flex-col gap-3">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setAbonneMsg('');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleAbonnement()}
                  className="bg-gray-100 px-4 py-2 rounded-lg outline-none focus:ring-2 ring-indigo-500 flex-1 text-sm"
                />
                <button
                  onClick={handleAbonnement}
                  disabled={abonneLoad || !email}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-sm font-semibold"
                >
                  {abonneLoad ? '...' : "S'abonner"}
                </button>
              </div>
              {abonneMsg && (
                <p className={`text-sm font-medium ${
                  abonneMsg.startsWith('✅') ? 'text-green-600' : 'text-red-500'
                }`}>
                  {abonneMsg}
                </p>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/maquettes" className="hover:text-indigo-600 transition">Maquettes UI/UX</Link></li>
              <li><Link to="/branding"  className="hover:text-indigo-600 transition">Branding</Link></li>
              <li><Link to="/uiux"      className="hover:text-indigo-600 transition">Infographie</Link></li>
              <li><Link to="/apps"      className="hover:text-indigo-600 transition">Développement Mobile</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <a href="mailto:deugoueclaudedaurian@gmail.com" className="hover:text-indigo-600 transition">
                  deugoueclaudedaurian@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+237694218100" className="hover:text-indigo-600 transition">
                  +237 6 94 21 81 00
                </a>
              </li>
              <li>Douala, Cameroun</li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, icon, to }) => (
  <div className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
    <div className="mb-6 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-lime-400 transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
    <Link
      to={to}
      className="mt-6 flex items-center text-indigo-600 font-bold w-fit group"
    >
      En savoir plus <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" />
    </Link>
  </div>
);

export default App;