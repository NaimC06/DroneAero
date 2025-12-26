export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Inmobiliaria' | 'Turismo' | 'Eventos' | 'Corporativo';
  type: 'Video Aéreo' | 'Modelado 3D' | '360 Tour';
  imageUrl: string;
  description: string;
}

export interface ServicePlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ProjectStatus {
  stage: 'Briefing' | 'Vuelo' | 'Edición' | 'Revisión' | 'Finalizado';
  progress: number;
  nextMeeting?: string;
  deliveryDate?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}