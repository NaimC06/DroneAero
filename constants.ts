import { PortfolioItem, ServicePlan } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Torre Futura - Cumbayá",
    category: "Inmobiliaria",
    type: "Video Aéreo",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "Captura integral de exteriores e interiores para venta de lujo en el valle."
  },
  {
    id: 2,
    title: "Centro Histórico 360",
    category: "Turismo",
    type: "360 Tour",
    imageUrl: "https://hotelecuatreasuresquito.ec/wp-content/uploads/2023/09/Plaza_Grande_Quito_Ecuador_2015-07-22_DD_80-scaled.jpg", // Quito
    description: "Recorrido virtual interactivo por las cúpulas y plazas coloniales de Quito."
  },
  {
    id: 3,
    title: "Festival de Luz - La Carolina",
    category: "Eventos",
    type: "Video Aéreo",
    imageUrl: "https://media.elcomercio.com/wp-content/uploads/2025/02/Jardin-Botanico-1024x683.jpg",
    description: "Cobertura nocturna con drones de alta sensibilidad y larga exposición."
  },
  {
    id: 4,
    title: "Avance de Obra Metro de Quito",
    category: "Corporativo",
    type: "Modelado 3D",
    imageUrl: "https://i0.wp.com/www.nlarenas.com/wp-content/uploads/Como-usar-pagar-horarios-precios-valor-metro-quito.jpg?fit=1612%2C907&ssl=1",
    description: "Fotogrametría y seguimiento técnico de ingeniería civil."
  },
  {
    id: 5,
    title: "Volcán Cotopaxi Cinematic",
    category: "Turismo",
    type: "Video Aéreo",
    imageUrl: "https://galapagoscenter.com/wp-content/uploads/2015/03/sli-COTOPAXI1.jpg",
    description: "Tomas cinematográficas de naturaleza y vida silvestre en los Andes ecuatorianos."
  },
  {
    id: 6,
    title: "Boda en Hacienda Chillo Jijón",
    category: "Eventos",
    type: "Video Aéreo",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
    description: "Perspectivas aéreas únicas para un día inolvidable en los valles."
  }
];

export const SERVICE_PLANS: ServicePlan[] = [
  {
    id: 'basic',
    name: 'Plan Despegue',
    price: '$299',
    features: [
      '5 Fotos Aéreas HD',
      'Video editado (30 seg)',
      'Edición de Color Básica',
      'Acceso a AeroPixel Cloud'
    ]
  },
  {
    id: 'standard',
    name: 'Plan Altitud',
    price: '$599',
    features: [
      '15 Fotos Aéreas 4K',
      'Video editado (60-90 seg)',
      'Edición Musical + Transiciones',
      'Dashboard de Seguimiento',
      '1 Ronda de Cambios'
    ],
    isPopular: true
  },
  {
    id: 'premium',
    name: 'Plan Órbita',
    price: '$999',
    features: [
      'Pack Completo Foto/Video 4K',
      'Video Cinematográfico (2-3 min)',
      'Motion Graphics & VFX',
      'Prioridad de Vuelo',
      'Archivos RAW incluidos'
    ]
  },
  {
    id: 'advanced',
    name: 'Plan Enterprise',
    price: 'Cotizar',
    features: [
      'Fotogrametría & Modelado 3D',
      'Inspección Industrial',
      'Cobertura Multi-día',
      'Integración API personalizada',
      'Soporte 24/7'
    ]
  }
];