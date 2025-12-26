import React, { useState } from 'react';
import { Menu, X, Play, ArrowRight, Download, Calendar, CheckCircle, Clock, FileVideo, Shield, Lock, LayoutDashboard, ChevronRight, Check } from 'lucide-react';
import { PORTFOLIO_ITEMS, SERVICE_PLANS } from './constants';
import { GeminiChat } from './components/GeminiChat';
import { PortfolioItem } from './types';

// --- Sub-Components defined here for cohesiveness in this file structure ---

const Navigation: React.FC<{ 
  currentView: 'home' | 'portal'; 
  setView: (v: 'home' | 'portal') => void; 
  isLoggedIn: boolean 
}> = ({ currentView, setView, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Planes', href: '#planes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    if (currentView === 'portal') {
      setView('home');
      // Allow react to render home before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-40 bg-aeroblack/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={() => setView('home')}
          >
            <div className="w-8 h-8 border-2 border-aerocyan rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="font-sans font-bold text-xl tracking-wider">AERO<span className="text-aerocyan">PIXEL</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-white hover:border-b-2 hover:border-aerocyan px-3 py-2 rounded-none text-sm font-medium transition-all cursor-pointer bg-transparent border-none"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => setView(currentView === 'home' ? 'portal' : 'home')}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-600 flex items-center gap-2 transition-all hover:border-aerocyan"
              >
                {currentView === 'home' ? (
                  <>
                    <Lock size={14} className="text-aerocyan"/>
                    Control Tower
                  </>
                ) : (
                  <>
                    <ArrowRight size={14} />
                    Volver al Sitio
                  </>
                )}
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-aeroblack border-b border-gray-800 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setView(currentView === 'home' ? 'portal' : 'home');
                setIsOpen(false);
              }}
              className="w-full text-left text-aerocyan block px-3 py-2 rounded-md text-base font-medium"
            >
              {currentView === 'home' ? 'Acceder a Control Tower' : 'Volver al Inicio'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Landing Page View ---

const LandingPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [purchasedPlan, setPurchasedPlan] = useState<string | null>(null);

  const filters = ['Todos', 'Inmobiliaria', 'Turismo', 'Eventos', 'Corporativo'];

  const filteredPortfolio = activeFilter === 'Todos' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.shutterstock.com/image-photo/stunning-cityscape-quito-ecuador-under-260nw-2651102021.jpg" 
            alt="Quito Aerial Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-aeroblack/80 via-transparent to-aeroblack"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 shadow-black drop-shadow-lg text-white">
            ARQUITECTURA DE MARCA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
              DESDE EL CIELO
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
            Fusionamos ingeniería de software y cinematografía aérea para entregar resultados precisos. 
            Gestiona tu proyecto visual como si fuera código.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10">
              Explorar Portafolio <ArrowRight size={18} />
            </a>
            <a href="#planes" className="bg-black/40 backdrop-blur-sm border border-white/50 text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all hover:border-aerocyan">
              Ver Planes
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <ArrowRight className="rotate-90 text-white" size={24} />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-aerogray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portafolio <span className="text-aerocyan">Visual</span></h2>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all border ${
                    activeFilter === filter 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedPortfolioItem(item)}
                className="group relative overflow-hidden rounded-xl bg-aeroblack border border-gray-800 hover:border-aerocyan transition-all duration-300 shadow-lg cursor-pointer transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-aerocyan hover:text-black transition-colors">
                      <Play fill="currentColor" size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-aerocyan uppercase tracking-widest">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-aerocyan transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm truncate">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="planes" className="py-24 bg-aeroblack relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-aerocyan/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes de <span className="text-aerocyan">Vuelo</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tecnología y arte combinados en paquetes diseñados para cada necesidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_PLANS.map((plan) => (
              <div key={plan.id} className={`relative p-6 rounded-2xl flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.1)] ${plan.isPopular ? 'bg-gray-900 border-2 border-aerocyan transform scale-105 z-10' : 'bg-gray-900/50 border border-gray-800'}`}>
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-aerocyan text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-aerocyan/40">
                    RECOMENDADO
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <CheckCircle size={16} className="text-aerocyan mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  <li className="flex items-start text-sm text-gray-300 font-semibold text-aerocyan/80">
                     <Lock size={16} className="mr-2 mt-0.5" />
                     Acceso a Control Tower
                  </li>
                </ul>
                <button 
                  onClick={() => setPurchasedPlan(plan.name)}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-aerocyan text-white hover:bg-fuchsia-400 hover:shadow-lg hover:shadow-aerocyan/20' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}>
                  {plan.id === 'advanced' ? 'Solicitar Demo' : 'Contratar'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-aerogray pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 border-2 border-aerocyan rounded-sm rotate-45 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <span className="font-sans font-bold text-lg">AEROPIXEL</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Redefiniendo la perspectiva visual de Quito mediante tecnología de drones y gestión de proyectos basada en software.
              </p>
              <div className="flex items-center text-xs text-green-500 font-mono">
                <Shield size={12} className="mr-1" />
                Operadores certificados DGAC
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@aeropixel.ec</li>
                <li>+593 99 123 4567</li>
                <li>Av. República y Amazonas, Quito</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-aerocyan">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-aerocyan">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-aerocyan">Seguridad de Vuelo</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} AeroPixel Solutions. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Portfolio Modal */}
      {selectedPortfolioItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setSelectedPortfolioItem(null)}>
          <div className="bg-aerogray w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img src={selectedPortfolioItem.imageUrl} alt={selectedPortfolioItem.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedPortfolioItem(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-aerocyan hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-aerocyan/80 p-6 rounded-full animate-pulse pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
                   <Play size={48} className="text-white ml-1" />
                 </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                   <span className="text-aerocyan font-mono text-sm uppercase tracking-wider">{selectedPortfolioItem.category}</span>
                   <h3 className="text-3xl font-bold text-white mt-2">{selectedPortfolioItem.title}</h3>
                </div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                  <span className="text-gray-400 text-sm font-medium">{selectedPortfolioItem.type}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedPortfolioItem.description}. Este proyecto representa la perfecta integración entre planificación técnica y ejecución artística. 
                Utilizamos drones Mavic 3 Cine y edición en DaVinci Resolve para lograr el look característico de AeroPixel.
              </p>
              <div className="flex gap-4">
                 <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                    <Play size={16} /> Ver Video Completo
                 </button>
                 <button onClick={() => setSelectedPortfolioItem(null)} className="text-gray-400 px-6 py-2 rounded-full font-medium hover:text-white transition-colors">
                    Cerrar
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Plan Purchase Modal */}
      {purchasedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="bg-aerogray w-full max-w-md rounded-2xl p-8 border border-aerocyan/50 shadow-[0_0_30px_rgba(217,70,239,0.2)] text-center relative animate-fade-in-up">
            <button 
              onClick={() => setPurchasedPlan(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              <X size={20} />
            </button>
            
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-green-500/50">
               <Check size={40} className="text-green-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">¡Felicitaciones!</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Has adquirido el <span className="text-aerocyan font-bold">{purchasedPlan}</span>.
            </p>
            
            <div className="bg-gray-800/50 p-4 rounded-lg mb-6 text-sm text-gray-400 text-left border border-gray-700">
              <p className="mb-2"><span className="text-white font-semibold">Próximos pasos:</span></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Revisa tu correo para el contrato digital.</li>
                <li>Accede al Control Tower para llenar el briefing.</li>
                <li>Nuestro piloto se pondrá en contacto contigo.</li>
              </ol>
            </div>

            <button 
              onClick={() => setPurchasedPlan(null)}
              className="w-full bg-aerocyan text-white font-bold py-3 rounded-lg hover:bg-fuchsia-400 transition-colors shadow-lg shadow-aerocyan/20"
            >
              Entendido, Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Portal (Control Tower) View ---

const PortalLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-in">
      <div className="w-full max-w-md bg-aerogray p-8 rounded-2xl border border-gray-800 shadow-2xl">
        <div className="flex justify-center mb-6">
           <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border border-aerocyan/30 shadow-[0_0_15px_rgba(217,70,239,0.1)]">
              <Lock className="text-aerocyan" size={32} />
           </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Control Tower Access</h2>
        <p className="text-center text-gray-400 mb-8 text-sm">Ingrese sus credenciales de cliente para gestionar su proyecto.</p>
        
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-gray-500 mb-1">PROJECT ID / EMAIL</label>
            <input type="email" required className="w-full bg-aeroblack border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-aerocyan focus:outline-none transition-colors" placeholder="cliente@empresa.com" />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-500 mb-1">ACCESS TOKEN</label>
            <input type="password" required className="w-full bg-aeroblack border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-aerocyan focus:outline-none transition-colors" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-lg transition-all mt-4 hover:shadow-lg hover:shadow-white/10">
            Ingresar al Dashboard
          </button>
        </form>
        <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">Secure AES-256 Connection</p>
        </div>
      </div>
    </div>
  );
};

const PortalDashboard: React.FC = () => {
  // Mock Data for the Dashboard
  const projectStatus = {
    progress: 65,
    stage: 'Edición (V1)',
    nextMilestone: 'Entrega de Borrador',
    date: '15 Oct, 2023',
    files: [
      { name: 'Raw_Drone_Footage_01.mp4', size: '2.4 GB', type: 'video' },
      { name: 'Site_Photos_HighRes.zip', size: '450 MB', type: 'archive' }
    ],
    timeline: [
      { status: 'complete', title: 'Briefing Inicial', date: '01 Oct' },
      { status: 'complete', title: 'Plan de Vuelo & Permisos', date: '03 Oct' },
      { status: 'complete', title: 'Rodaje Aéreo', date: '05 Oct' },
      { status: 'active', title: 'Post-Producción & Color', date: 'En proceso' },
      { status: 'pending', title: 'Revisión de Cliente', date: 'Est. 18 Oct' },
      { status: 'pending', title: 'Entrega Final', date: 'Est. 20 Oct' },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <LayoutDashboard className="text-aerocyan" /> Proyecto: Torre Futura
          </h1>
          <p className="text-gray-400 text-sm mt-1">ID: #APX-2023-884 | Plan Altitud</p>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
           <span className="text-xs text-gray-400 block">Estado Actual</span>
           <span className="text-aerocyan font-bold">{projectStatus.stage}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Bar Card */}
          <div className="bg-aerogray p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-white">Progreso General</span>
              <span className="text-aerocyan font-mono">{projectStatus.progress}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-gray-600 to-aerocyan h-2.5 rounded-full transition-all duration-1000" 
                style={{ width: `${projectStatus.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="bg-aerogray p-6 rounded-xl border border-gray-800">
             <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
               <Clock size={18} className="text-gray-400" /> Agenda de Vuelo & Edición
             </h3>
             <div className="space-y-0 relative">
                {/* Vertical Line */}
                <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-800"></div>
                
                {projectStatus.timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start pl-8 pb-8 last:pb-0">
                    <div className={`absolute left-0 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-aerogray z-10 ${
                      item.status === 'complete' ? 'border-aerocyan bg-aerocyan/20' : 
                      item.status === 'active' ? 'border-white animate-pulse' : 'border-gray-600'
                    }`}>
                      {item.status === 'complete' && <div className="w-2 h-2 bg-aerocyan rounded-full"></div>}
                      {item.status === 'active' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                         <h4 className={`text-sm font-semibold ${item.status === 'pending' ? 'text-gray-500' : 'text-white'}`}>
                           {item.title}
                         </h4>
                         <span className="text-xs font-mono text-gray-500">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Downloads Card */}
          <div className="bg-aerogray p-6 rounded-xl border border-gray-800">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
               <FileVideo size={18} className="text-gray-400" /> Archivos Entregables
            </h3>
            <div className="space-y-3">
              {projectStatus.files.map((file, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-aeroblack rounded-lg border border-gray-800 hover:border-gray-600 transition-colors group cursor-pointer">
                   <div className="flex items-center gap-3 overflow-hidden">
                      <div className="bg-gray-800 p-2 rounded text-aerocyan">
                         {file.type === 'video' ? <FileVideo size={16}/> : <Download size={16}/>}
                      </div>
                      <div className="truncate">
                        <p className="text-sm text-gray-200 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                   </div>
                   <button className="text-gray-400 hover:text-aerocyan">
                     <Download size={16} />
                   </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 border border-gray-700 rounded-lg text-sm text-gray-400 hover:bg-gray-800 transition-colors">
              Ir al Repositorio Completo
            </button>
          </div>

          {/* Calendar Widget */}
          <div className="bg-aerogray p-6 rounded-xl border border-gray-800">
             <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
               <Calendar size={18} className="text-gray-400" /> Próxima Reunión
             </h3>
             <div className="bg-aeroblack p-4 rounded-lg text-center border border-gray-800">
                <p className="text-white font-bold text-2xl">18 OCT</p>
                <p className="text-gray-300 font-medium">10:00 AM</p>
                <p className="text-gray-500 text-xs mt-1">Revisión Final (Zoom)</p>
                <button className="mt-3 text-xs text-aerocyan underline hover:text-white transition-colors">Agregar al Calendario</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-aeroblack pt-20">
      {!isLoggedIn ? (
        <PortalLogin onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <PortalDashboard />
      )}
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'portal'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Shared state concept

  return (
    <div className="min-h-screen bg-aeroblack text-white font-body selection:bg-aerocyan selection:text-white">
      <Navigation 
        currentView={currentView} 
        setView={setCurrentView} 
        isLoggedIn={isLoggedIn}
      />
      
      <main>
        {currentView === 'home' ? <LandingPage /> : <Portal />}
      </main>

      <GeminiChat />
    </div>
  );
};

export default App;