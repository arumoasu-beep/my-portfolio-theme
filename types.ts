
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tech: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export enum SectionId {
  Hero = 'hero',
  Services = 'services',
  Projects = 'projects',
  Consultation = 'consultation',
  About = 'about'
}
