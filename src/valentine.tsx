import React, { useState } from 'react';
import { Menu, X, CheckCircle, ChevronRight, Smartphone, Palette, Layout, MousePointer2 } from 'lucide-react';

// Types pour les composants
interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-[#1A1A1A]">Design<span className="text-indigo-600">Studio</span></div>
          
          <div className="hidden md:flex space-x-8 font-medium text-sm">
            <a href="#services" className="hover:text-indigo-600 transition">Services</a>
            <a href="#vision" className="hover:text-indigo-600 transition">Notre Vision</a>
            <a href="#team" className="hover:text-indigo-600 transition">L'Équipe</a>
          </div>

          <button className="hidden md:block bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 transition">
            Démarrer un projet
          </button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Les grandes marques naissent de <span className="text-indigo-600 underline decoration-lime-400">beaux designs</span>.
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md">
              Nous transformons vos idées en expériences numériques mémorables grâce au branding, à l'UI/UX et au développement mobile.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-200 transition">
                Voir nos travaux
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Bureau" className="w-full object-cover h-[500px]" />
            </div>
            {/* Badge flottant inspiré de l'image */}
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

      {/* --- SERVICES / WHY CHOOSE US --- */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <div className="h-1 w-20 bg-lime-400"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Palette className="w-8 h-8 text-indigo-600" />}
            title="Branding & Identité"
            desc="Création de logos et de chartes graphiques qui captent l'essence de votre marque."
          />
          <ServiceCard 
            icon={<Layout className="w-8 h-8 text-indigo-600" />}
            title="Conception de Maquettes"
            desc="Prototypes UI/UX haute fidélité pour vos sites et applications web."
          />
          <ServiceCard 
            icon={<Smartphone className="w-8 h-8 text-indigo-600" />}
            title="Apps Multiplateforme"
            desc="Développement d'applications mobiles performantes pour iOS et Android."
          />
        </div>
      </section>

      {/* --- SECTION ÉQUIPE (Couleur Violette du Design) --- */}
      <section id="team" className="py-24 px-6 bg-indigo-900 text-white rounded-[3rem] mx-4 my-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Nos Experts Créatifs</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="bg-white/10 rounded-3xl p-4 mb-4 group-hover:bg-white/20 transition">
                  <div className="bg-gray-300 h-64 rounded-2xl mb-4 overflow-hidden">
                     {/* Remplacer par de vraies images */}
                    <div className="w-full h-full bg-slate-400"></div>
                  </div>
                  <h3 className="text-xl font-bold">Expert {i}</h3>
                  <p className="text-indigo-200">Designer Senior</p>
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
            <div className="text-2xl font-bold mb-6">DesignStudio</div>
            <p className="text-gray-500 max-w-xs mb-6">
              Prêt à lancer votre prochain grand projet avec nous ? Contactez-nous aujourd'hui.
            </p>
            <div className="flex space-x-4">
               <input type="email" placeholder="Votre email" className="bg-gray-100 px-4 py-2 rounded-lg outline-none focus:ring-2 ring-indigo-500" />
               <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">S'abonner</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>Maquettes UI/UX</li>
              <li>Branding</li>
              <li>Infographie</li>
              <li>Développement Mobile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>contact@designstudio.com</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Composant de carte de service réutilisable
const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, icon }) => (
  <div className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
    <div className="mb-6 p-4 bg-gray-50 rounded-2xl inline-block group-hover:bg-lime-400 transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
    <button className="mt-6 flex items-center text-indigo-600 font-bold group">
      En savoir plus <ChevronRight className="ml-1 w-4 h-4 group-hover:ml-2 transition-all" />
    </button>
  </div>
);

export default App;