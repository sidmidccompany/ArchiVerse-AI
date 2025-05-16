// src/sections/DashboardSection.tsx
import { type Dispatch, type SetStateAction } from 'react';
import { type LanguageCode, type TranslationKeys } from '../types';
import { type ProjectData } from '../types';
import { 
 Leaf,  Building, Shield, Award, Gavel
} from 'lucide-react';

interface DashboardSectionProps {
  language: LanguageCode;
  setLanguage: Dispatch<SetStateAction<LanguageCode>>;
  projectData: ProjectData;
  t: (key: keyof TranslationKeys) => string;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ 
  language, 
  setLanguage, 
   t
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">{t('welcome')}</h2>
        <select
          className="px-3 py-2 border rounded-lg"
          value={language}
          onChange={(e) => setLanguage(e.target.value as LanguageCode)}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="ta">தமிழ்</option>
          <option value="bn">বাংলা</option>
        </select>
      </div>

        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Government Projects</h3>
            <Building className="text-blue-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500">5 CPWD, 7 State PWD</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">NBC Compliance</h3>
            <Shield className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">94%</p>
          <p className="text-sm text-gray-500">Average compliance score</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Green Rating</h3>
            <Leaf className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">IGBC Gold</p>
          <p className="text-sm text-gray-500">Average project rating</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Active Tenders</h3>
            <Gavel className="text-orange-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">3</p>
          <p className="text-sm text-gray-500">Response deadline soon</p>
        </div>
      </div>

 <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Government Client Projects</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center">
              <Building className="text-blue-500 mr-3" size={20} />
              <span className="text-gray-700">MMRDA Housing Complex - NBC compliance review completed</span>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center">
              <Shield className="text-green-500 mr-3" size={20} />
              <span className="text-gray-700">CPWD Office Building - Fire NOC received</span>
            </div>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Award className="text-purple-500 mr-3" size={20} />
              <span className="text-gray-700">Smart City Project - GRIHA 4-star certification achieved</span>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;