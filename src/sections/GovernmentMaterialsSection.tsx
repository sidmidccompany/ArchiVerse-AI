import React from 'react';
import { 
 Leaf, Shield, CheckCircle
} from 'lucide-react';
 
interface GovernmentMaterialsSectionProps {
  projectData: any;
}

const GovernmentMaterialsSection: React.FC<GovernmentMaterialsSectionProps> = ({  }) => {
  return (
     <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Government-Approved Materials</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">NBC-Compliant Materials for Government Projects</h3>
          <p className="text-gray-600">Location: Mumbai | Budget: ₹15 Crores | Climate: Monsoon</p>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">Fly Ash Bricks (BIS Certified)</h4>
                <p className="text-gray-600 mt-1">NBC-compliant, Government procurement approved</p>
                <div className="flex items-center mt-2">
                  <Leaf className="text-green-600 mr-2" size={16} />
                  <span className="text-sm text-green-600">85% sustainability | Local manufacturer</span>
                </div>
                <p className="text-sm text-blue-600 mt-1">GeM Portal Available</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹4.50/piece</p>
                <p className="text-sm text-gray-600">L1 Rate</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">SAIL TMT Steel Bars</h4>
                <p className="text-gray-600 mt-1">Fe 500D grade, BIS 1786:2008 compliant</p>
                <div className="flex items-center mt-2">
                  <Shield className="text-blue-600 mr-2" size={16} />
                  <span className="text-sm text-blue-600">Government PSU supplier</span>
                </div>
                <p className="text-sm text-blue-600 mt-1">CPWD approved vendor</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹68/kg</p>
                <p className="text-sm text-gray-600">DSR 2023 rate</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">ACC Cement (PPC)</h4>
                <p className="text-gray-600 mt-1">Portland Pozzolana Cement, IS 1489 compliant</p>
                <div className="flex items-center mt-2">
                  <CheckCircle className="text-green-600 mr-2" size={16} />
                  <span className="text-sm text-green-600">Government rate contract available</span>
                </div>
                <p className="text-sm text-blue-600 mt-1">PWD approved brand</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹320/bag</p>
                <p className="text-sm text-gray-600">50kg bag</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Government Procurement Compliance</h4>
          <p className="text-gray-700">All materials comply with:</p>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={16} />
              <span>Make in India policy (local content &gt 60%)</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={16} />
              <span>GeM portal availability</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={16} />
              <span>CPWD specifications 2019</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GovernmentMaterialsSection;