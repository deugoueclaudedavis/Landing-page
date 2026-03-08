import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { ChevronRight, ExternalLink, ArrowUpRight, Filter } from 'lucide-react';

type Category = 'tous' | 'branding' | 'uiux' | 'mobile';

interface Project {
  id: number;
  title: string;
  client: string;
  category: Category;
  tags: string[];
  year: string;
  bg: string;
  accent: string;
  textColor: string;
  size: 'large' | 'medium' | 'small';
  description: string;
  results: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Identité Complète',
    client: 'Kora Finance',
    category: 'branding',
    tags: ['Logo', 'Charte graphique', 'Motion'],
    year: '2024',
    bg: 'bg-slate-900',
    accent: 'bg-lime-400',
    textColor: 'text-white',
    size: 'large',
    description: 'Création d\'une identité visuelle forte pour une fintech camerounaise en pleine expansion.',
    results: '+340% de notoriété en 3 mois',
  },
  {
    id: 2,
    title: 'App Mobile',
    client: 'FreshMed Santé',
    category: 'mobile',
    tags: ['React Native', 'iOS', 'Android'],
    year: '2024',
    bg: 'bg-emerald-900',
    accent: 'bg-emerald-400',
    textColor: 'text-white',
    size: 'medium',
    description: 'Application de téléconsultation médicale pour mettre en relation patients et médecins.',
    results: '10k téléchargements en 2 semaines',
  },
  {
    id: 3,
    title: 'Design System',
    client: 'Atlas Logistics',
    category: 'uiux',
    tags: ['Figma', 'Design System', 'Web'],
    year: '2023',
    bg: 'bg-indigo-900',
    accent: 'bg-indigo-300',
    textColor: 'text-white',
    size: 'medium',
    description: 'Refonte complète de la plateforme logistique avec un design system évolutif.',
    results: '-60% de temps de dev sur les nouvelles features',
  },
  {
    id: 4,
    title: 'Branding & Site Web',
    client: 'Verde Organic',
    category: 'branding',
    tags: ['Logo', 'Site Web', 'Packaging'],
    year: '2024',
    bg: 'bg-lime-50',
    accent: 'bg-lime-500',
    textColor: 'text-lime-900',
    size: 'small',
    description: 'Identité organique et site e-commerce pour une marque d\'alimentation saine.',
    results: '+220% de conversions en ligne',
  },
  {
    id: 5,
    title: 'Super App',
    client: 'Rideek Transport',
    category: 'mobile',
    tags: ['Flutter', 'Maps', 'Paiement'],
    year: '2023',
    bg: 'bg-amber-900',
    accent: 'bg-amber-400',
    textColor: 'text-white',
    size: 'large',
    description: 'Super app de mobilité urbaine combinant VTC, livraison et paiement mobile.',
    results: 'Présente dans 3 villes en 6 mois',
  },
  {
    id: 6,
    title: 'Dashboard Analytics',
    client: 'DataPulse',
    category: 'uiux',
    tags: ['Dashboard', 'DataViz', 'SaaS'],
    year: '2024',
    bg: 'bg-violet-900',
    accent: 'bg-violet-400',
    textColor: 'text-white',
    size: 'small',
    description: 'Interface analytique pour visualiser des millions de données en temps réel.',
    results: 'NPS de 72 — meilleur score de la catégorie',
  },
  {
    id: 7,
    title: 'Identité de Marque',
    client: 'Bloom Studio',
    category: 'branding',
    tags: ['Logo', 'Réseaux sociaux', 'Print'],
    year: '2023',
    bg: 'bg-rose-50',
    accent: 'bg-rose-500',
    textColor: 'text-rose-900',
    size: 'medium',
    description: 'Univers visuel luxueux et féminin pour un studio de beauté haut de gamme.',
    results: 'Ouverture de 2 franchises après le rebrand',
  },
  {
    id: 8,
    title: 'Plateforme E-learning',
    client: 'EduAfrik',
    category: 'uiux',
    tags: ['UX Research', 'Prototype', 'Web App'],
    year: '2024',
    bg: 'bg-sky-900',
    accent: 'bg-sky-400',
    textColor: 'text-white',
    size: 'small',
    description: 'Refonte UX d\'une plateforme d\'apprentissage en ligne pour 50 000 étudiants.',
    results: '+85% de rétention des apprenants',
  },
];

const categories: { id: Category; label: string; count: number }[] = [
  { id: 'tous', label: 'Tous les projets', count: projects.length },
  { id: 'branding', label: 'Branding', count: projects.filter(p => p.category === 'branding').length },
  { id: 'uiux', label: 'UI/UX', count: projects.filter(p => p.category === 'uiux').length },
  { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
];

const NosTravauxPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('tous');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'tous'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>Accueil</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-indigo-600 font-medium">Nos Travaux</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Filter className="w-4 h-4" /> Portfolio
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                Nos <span className="text-indigo-600 underline decoration-lime-400">réalisations</span>.
              </h1>
            </div>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Chaque projet ici représente une collaboration unique — une idée transformée en expérience digitale mémorable. Branding, interfaces, applications.
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-3xl font-black text-indigo-600">80+</p>
                  <p className="text-sm text-gray-500">Projets livrés</p>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="text-3xl font-black text-indigo-600">5</p>
                  <p className="text-sm text-gray-500">Pays couverts</p>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div>
                  <p className="text-3xl font-black text-indigo-600">100%</p>
                  <p className="text-sm text-gray-500">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── FILTRES ── */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRILLE PROJETS ── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Layout masonry-like avec grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {filtered.map((project, index) => (
              <div
                key={project.id}
                className={`
                  group relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-300
                  ${project.bg}
                  ${hoveredId === project.id ? 'shadow-2xl -translate-y-2' : 'shadow-sm'}
                  ${project.size === 'large' && index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
                  ${project.size === 'large' && index !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
                `}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Contenu de la carte */}
                <div className="p-8 md:p-10 min-h-[280px] flex flex-col justify-between">
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

                  {/* Visuel simulé */}
                  <div className="my-6 flex gap-2">
                    {project.category === 'mobile' && (
                      <>
                        <div className="w-16 h-28 bg-white/10 rounded-2xl flex-shrink-0"></div>
                        <div className="w-16 h-28 bg-white/5 rounded-2xl flex-shrink-0 translate-y-3"></div>
                      </>
                    )}
                    {project.category === 'uiux' && (
                      <div className="w-full h-20 bg-white/10 rounded-xl overflow-hidden flex flex-col gap-2 p-3">
                        <div className="h-2 bg-white/20 rounded-full w-2/3"></div>
                        <div className="h-2 bg-white/10 rounded-full w-full"></div>
                        <div className="h-2 bg-white/10 rounded-full w-4/5"></div>
                        <div className={`h-5 ${project.accent} rounded-lg w-20 mt-1`}></div>
                      </div>
                    )}
                    {project.category === 'branding' && (
                      <div className="flex gap-3 items-center">
                        <div className={`w-14 h-14 ${project.accent} rounded-2xl flex items-center justify-center font-black text-2xl text-white/80`}>
                          {project.client.charAt(0)}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {['bg-white/20', 'bg-white/10', 'bg-white/10'].map((c, i) => (
                            <div key={i} className={`h-2 ${c} rounded-full`} style={{ width: `${[80, 120, 60][i]}px` }}></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/10 ${project.textColor} opacity-70`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className={`text-xs font-bold uppercase tracking-widest opacity-50 mb-1 ${project.textColor}`}>
                      {project.client}
                    </p>
                    <h3 className={`text-2xl font-black ${project.textColor}`}>{project.title}</h3>
                    <p className={`text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold ${project.accent.replace('bg-', 'text-')}`}>
                      {project.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p className="text-2xl font-bold mb-2">Aucun projet dans cette catégorie.</p>
              <p className="text-sm">Revenez bientôt — nous travaillons dessus !</p>
            </div>
          )}
        </div>
      </section>

      {/* ── MODAL PROJET ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`${selectedProject.bg} rounded-[2.5rem] w-full max-w-lg p-8 md:p-10 shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div className="flex justify-between items-start mb-8">
              <div className={`w-12 h-12 ${selectedProject.accent} rounded-2xl`}></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                ✕
              </button>
            </div>

            {/* Info */}
            <div className="mb-6">
              <p className={`text-xs font-bold uppercase tracking-widest opacity-50 mb-1 ${selectedProject.textColor}`}>
                {selectedProject.client} · {selectedProject.year}
              </p>
              <h2 className={`text-3xl font-black mb-3 ${selectedProject.textColor}`}>{selectedProject.title}</h2>
              <p className={`leading-relaxed opacity-70 ${selectedProject.textColor}`}>{selectedProject.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 ${selectedProject.textColor}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Résultats */}
            <div className="bg-white/10 rounded-2xl p-5 mb-8">
              <p className={`text-xs font-bold uppercase tracking-widest opacity-50 mb-1 ${selectedProject.textColor}`}>Résultats</p>
              <p className={`text-xl font-black ${selectedProject.accent.replace('bg-', 'text-')}`}>
                {selectedProject.results}
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/demarrer"
              onClick={() => setSelectedProject(null)}
              className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold w-full hover:bg-lime-400 transition"
            >
              Un projet similaire ? <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* ── SECTION TÉMOIGNAGES ── */}
      <section className="py-24 px-6 bg-indigo-900 text-white rounded-[3rem] mx-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <div className="h-1 w-20 bg-lime-400"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "FrameTech a transformé notre image de marque en quelques semaines. On ne ressemble plus à une startup — on ressemble à un leader.",
                author: "Marie Essomba",
                role: "CEO, Kora Finance",
                initial: "M",
                color: "bg-lime-400",
              },
              {
                quote: "L'application qu'ils nous ont livrée dépasse ce qu'on imaginait. Le design est premium et les performances sont au rendez-vous.",
                author: "Pascal Nkengne",
                role: "Fondateur, FreshMed",
                initial: "P",
                color: "bg-indigo-400",
              },
              {
                quote: "Très professionnels, à l'écoute et créatifs. Notre site a doublé son taux de conversion en un mois après la refonte.",
                author: "Sandrine Moukam",
                role: "Directrice Marketing, Verde Organic",
                initial: "S",
                color: "bg-rose-400",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-lime-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-indigo-100 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center font-black text-slate-900`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.author}</p>
                    <p className="text-indigo-300 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre projet sera le prochain<br />
            <span className="text-indigo-600 underline decoration-lime-400">ici</span>.
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Rejoignez les 80+ entreprises qui nous font confiance pour leur image digitale.
          </p>
          <Link
            to="/demarrer"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-200 transition"
          >
            Démarrer mon projet <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-gray-100 text-center text-sm text-gray-400">
        © 2026 FrameTech — Douala, Cameroun
      </footer>
    </div>
  );
};

export default NosTravauxPage;