import React from 'react';
import { CheckCircle, Leaf } from 'lucide-react';

interface CertificationScore {
  score: number;
  level?: string;  // For IGBC
  rating?: string; // For GRIHA
  credits?: {
    sustainable: number;
    water: number;
    energy: number;
    materials: number;
    indoor: number;
    innovation: number;
  };
  points?: {
    site: number;
    maintenance: number;
    energy: number;
    renewable: number;
    waste: number;
    innovation: number;
  };
}

interface SustainabilityScore {
  igbc: CertificationScore;
  griha: CertificationScore;
  energy: number;
  materials: number;
  water: number;
  carbon: number;
  overall: number;
}

interface ProjectData {
  name: string;
  // include other properties you use from projectData
}

interface GreenBuildingSectionProps {
  projectData: ProjectData;
  sustainabilityScore: SustainabilityScore | null;
  handleGreenBuildingAnalysis: () => void;
}

const GreenBuildingSection: React.FC<GreenBuildingSectionProps> = ({ 
  projectData,
  sustainabilityScore,
  handleGreenBuildingAnalysis 
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Green Building Certification</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Project: {projectData.name}</h3>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            onClick={handleGreenBuildingAnalysis}
          >
            Run Certification Analysis
          </button>
        </div>
   {sustainabilityScore && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <img src="/api/placeholder/30/30" alt="IGBC" className="mr-2" />
                  IGBC Rating
                </h4>
                <div className="text-center mb-4">
                  <p className="text-4xl font-bold text-yellow-600">{sustainabilityScore.igbc.level}</p>
                  <p className="text-2xl font-semibold">{sustainabilityScore.igbc.score} Points</p>
                </div>
                <div className="space-y-2">
  {sustainabilityScore?.igbc?.credits && 
    Object.entries(sustainabilityScore.igbc.credits).map(([key, value]) => (
      <div key={key} className="flex justify-between">
        <span className="capitalize">{key}</span>
        <span className="font-semibold">{value}</span>
      </div>
    ))
  }
</div>
              </div>

              <div className="border rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <img src="/api/placeholder/30/30" alt="GRIHA" className="mr-2" />
                  GRIHA Rating
                </h4>
                <div className="text-center mb-4">
                  <p className="text-4xl font-bold text-green-600">{sustainabilityScore.griha.rating}</p>
                  <p className="text-2xl font-semibold">{sustainabilityScore.griha.score} Points</p>
                </div>
                                <div className="space-y-2">
  {sustainabilityScore?.igbc?.credits && 
    Object.entries(sustainabilityScore.igbc.credits).map(([key, value]) => (
      <div key={key} className="flex justify-between">
        <span className="capitalize">{key}</span>
        <span className="font-semibold">{value}</span>
      </div>
    ))
  }
</div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Compliance with NBC 2016 Sustainability Provisions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <span>Solar energy utilization integrated</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <span>LED lighting throughout the complex</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <span>Rainwater harvesting system</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  <span>Waste segregation and recycling</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Climate Zone Optimization</h4>
              <p className="text-gray-700 mb-4">Project location: Mumbai (Hot & Humid Climate Zone)</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Leaf className="text-green-600 mr-2 mt-1" size={16} />
                  <span>Optimized building orientation for monsoon winds</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="text-green-600 mr-2 mt-1" size={16} />
                  <span>High-performance glazing for heat reduction</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="text-green-600 mr-2 mt-1" size={16} />
                  <span>Natural ventilation strategies for humidity control</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GreenBuildingSection;