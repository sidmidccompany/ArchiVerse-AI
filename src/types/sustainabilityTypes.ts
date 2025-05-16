// src/types/sustainabilityTypes.ts
export type CertificationLevel = 'Certified' | 'Silver' | 'Gold' | 'Platinum' | '4 Star' | '5 Star';

export interface IGBCScore {
  score: number;
  level: CertificationLevel;
  credits: {
    sustainable: number;
    water: number;
    energy: number;
    materials: number;
    indoor: number;
    innovation: number;
  };
}

export interface GRIHAScore {
  score: number;
  rating: CertificationLevel;  // Note: using 'rating' here
  points: {
    site: number;
    maintenance: number;
    energy: number;
    renewable: number;
    waste: number;
    innovation: number;
  };
}

export interface SustainabilityScore {
  igbc: IGBCScore;
  griha: GRIHAScore;
  energy: number;
  materials: number;
  water: number;
  carbon: number;
  overall: number;
}