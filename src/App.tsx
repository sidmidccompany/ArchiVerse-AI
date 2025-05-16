// src/App.tsx
import { useState } from 'react';
import {
  Home, Leaf, Users, Building, Sparkles, Shield, Boxes, Menu, X, Award,
  FileCheck, School, Gavel, Lock
} from 'lucide-react';
import DashboardSection from './sections/DashboardSection';
import NBCComplianceSection from './sections/NBCComplianceSection';
import COAProjectSection from './sections/COAProjectSection';
import GreenBuildingSection from './sections/GreenBuildingSection';
import GovernmentMaterialsSection from './sections/GovernmentMaterialsSection';
import StakeholderCollaborationSection from './sections/StakeholderCollaborationSection';
import ReportingSection from './sections/ReportingSection';
import TendersSection from './sections/TendersSection';
import TrainingSection from './sections/TrainingSection';
import DataSecuritySection from './sections/DataSecuritySection';
import { translations, type LanguageCode, type TranslationKeys  } from './translations/translations';
import { type ComplianceChecks } from './types/complianceTypes';
import { type SustainabilityScore } from './types/sustainabilityTypes';

const ArchiVerseAI = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>('en');
 
const [sustainabilityScore, setSustainabilityScore] = useState<SustainabilityScore | null>(null);
  const [complianceChecks, setComplianceChecks] = useState<ComplianceChecks | null>(null);
  const [coaStage] = useState(2);
  
  const [projectData] = useState({
    name: 'Mumbai Urban Housing Complex - MMRDA',
    timeline: '18 months',
    budget: '₹15 Crores',
    status: 'In Progress',
    client: 'Mumbai Metropolitan Region Development Authority',
    projectCost: 1500000000,
    fees: {
      architectural: 84000000,
      paid: 31500000,
      pending: 52500000
    }
  });

  // Translation function
const t = (key: keyof TranslationKeys) => translations[language][key];

  const coaStages = [
    { stage: 1, name: 'Concept Design', percentage: 5, fee: 0.05 },
    { stage: 2, name: 'Preliminary Design', percentage: 10, fee: 0.15 },
    { stage: 3, name: 'Drawings for Approvals', percentage: 15, fee: 0.15 },
    { stage: 4, name: 'Working Drawings', percentage: 30, fee: 0.30 },
    { stage: 5, name: 'Contractor Appointment', percentage: 5, fee: 0.05 },
    { stage: 6, name: 'Construction', percentage: 30, fee: 0.25 },
    { stage: 7, name: 'Completion', percentage: 5, fee: 0.05 }
  ];

const handleNBCCompliance = () => {
  // Simulate NBC compliance check
  setTimeout(() => {
    setComplianceChecks({
      structural: { status: 'compliant', notes: 'Meets NBC 2016 structural safety requirements' },
      fire: { status: 'pending', notes: 'Fire NOC documentation pending' },
      accessibility: { status: 'compliant', notes: 'Complies with NBC accessibility guidelines' },
      disaster: { status: 'compliant', notes: 'Seismic Zone III compliance verified' },
      energy: { status: 'compliant', notes: 'LED lighting and solar panels integrated' },
      indemnity: { status: 'compliant', notes: 'Professional indemnity insurance active till 2027' }
    });
  }, 1500);
};


const handleGreenBuildingAnalysis = () => {

  setTimeout(() => {
    setSustainabilityScore({
      igbc: {
        score: 82,
        level: 'Gold',
        credits: {
          sustainable: 14,
          water: 18,
          energy: 22,
          materials: 12,
          indoor: 8,
          innovation: 8
        }
      },
      griha: {
        score: 75,
        rating: '4 Star',
        points: {
          site: 15,
          maintenance: 12,
          energy: 18,
          renewable: 10,
          waste: 8,
          innovation: 12
        }
      },
      energy: 85,
      materials: 78,
      water: 92,
      carbon: 71,
      overall: 82
    });
  }, 1500);
};

  const navItems = [
    { id: 'dashboard', icon: Home, label: t('dashboard') },
    { id: 'generative', icon: Sparkles, label: 'Generative Design' },
    { id: 'nbccompliance', icon: Shield, label: t('compliance') },
    { id: 'coaproject', icon: Award, label: t('projectManagement') },
    { id: 'greenbuilding', icon: Leaf, label: t('greenBuilding') },
    { id: 'materials', icon: Boxes, label: 'Government Materials' },
    { id: 'collaboration', icon: Users, label: 'Stakeholder Collaboration' },
    { id: 'reporting', icon: FileCheck, label: t('reporting') },
    { id: 'tenders', icon: Gavel, label: 'Government Tenders' },
    { id: 'training', icon: School, label: 'Training & Resources' },
    { id: 'datasecurity', icon: Lock, label: 'Data Security' },
    { id: 'heritage', icon: Building, label: 'Heritage Design' }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard':
        return <DashboardSection {...{ language, setLanguage, projectData, t }} />;
      case 'nbccompliance':
        return <NBCComplianceSection {...{ projectData, complianceChecks, handleNBCCompliance }} />;
      case 'coaproject':
        return <COAProjectSection {...{ projectData, coaStage, coaStages }} />;
      case 'greenbuilding':
        return <GreenBuildingSection {...{ projectData, sustainabilityScore, handleGreenBuildingAnalysis }} />;
      case 'materials':
        return <GovernmentMaterialsSection {...{ projectData }} />;
      case 'collaboration':
        return <StakeholderCollaborationSection {...{ projectData }} />;
      case 'reporting':
        return <ReportingSection {...{ projectData }} />;
      case 'tenders':
        return <TendersSection />;
      case 'training':
        return <TrainingSection />;
      case 'datasecurity':
        return <DataSecuritySection {...{ projectData }} />;
      case 'vr':
        return <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">VR/AR View</h2>
          <p>Virtual Reality and Augmented Reality features for stakeholder engagement</p>
        </div>;
      default:
        return <DashboardSection {...{ language, setLanguage, projectData, t }} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building className="text-blue-600 mr-3" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">ArchiVerse AI</h1>
                <p className="text-sm text-gray-600">Government Projects Edition</p>
              </div>
            </div>
           
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 inset-x-0 bg-white shadow-lg z-40 p-4 max-h-screen overflow-y-auto">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center"
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                <item.icon className="mr-3" size={20} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white shadow-md fixed h-full overflow-y-auto">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`w-full text-left p-3 rounded-lg transition flex items-center ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="mr-3" size={20} />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default ArchiVerseAI;