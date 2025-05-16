// src/types/index.ts
export interface ProjectData {
  name: string;
  timeline: string;
  budget: string;
  status: string;
  client: string;
  projectCost: number;
  fees: {
    architectural: number;
    paid: number;
    pending: number;
  };
}

export type LanguageCode = 'en' | 'hi' | 'ta' | 'bn';

export type TranslationKeys = {
  dashboard: string;
  welcome: string;
  compliance: string;
  projectManagement: string;
  greenBuilding: string;
  reporting: string;
};