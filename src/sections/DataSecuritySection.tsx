import React from 'react';
import { 
  Shield, CheckCircle, Lock, Flag
} from 'lucide-react';


interface DataSecuritySectionProps {
  projectData: any;
}

const DataSecuritySection: React.FC<DataSecuritySectionProps> = ({  }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Security & Compliance</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Government Data Protection Standards</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Lock className="text-green-600 mr-2" size={20} />
              Security Features
            </h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />
                <span>End-to-end encryption</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />
                <span>Role-based access control</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />
                <span>Audit trail logging</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />
                <span>Two-factor authentication</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Shield className="text-blue-600 mr-2" size={20} />
              Compliance Standards
            </h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />
                <span>ISO 27001 certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />
                <span>Indian Data Protection Bill compliant</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />
                <span>Government security guidelines</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />
                <span>STQC certified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Data Hosting</h4>
          <p className="text-gray-700">All government project data is hosted in secure data centers located within India, ensuring compliance with data localization requirements.</p>
          <div className="mt-3 flex items-center">
            <Flag className="text-blue-600 mr-2" size={20} />
            <span>Data centers in Mumbai and Delhi</span>
          </div>
        </div>

        <div className="mt-6 bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Professional Indemnity Insurance</h4>
          <p className="text-gray-700 mb-3">As per COA regulations, maintain professional indemnity insurance for all government projects</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium">Current Coverage</p>
              <p className="text-2xl font-bold text-green-600">₹5 Crores</p>
            </div>
            <div>
              <p className="font-medium">Valid Till</p>
              <p className="text-lg font-semibold">March 2027</p>
            </div>
            <div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Renew Insurance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSecuritySection;