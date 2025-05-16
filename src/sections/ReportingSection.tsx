
import React from 'react';
import { 
 BarChart ,FileText,DollarSign,
  FileCheck
} from 'lucide-react';


interface ReportingSectionProps {
  projectData: any;
}

const ReportingSection: React.FC<ReportingSectionProps> = ({ }) => {
  return (
<div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Reports & Documentation</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Government Project Reports</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3">Compliance Reports</h4>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center justify-between">
                <span>NBC 2016 Compliance Certificate</span>
                <FileCheck className="text-green-600" size={20} />
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center justify-between">
                <span>COA Professional Conduct Report</span>
                <FileCheck className="text-green-600" size={20} />
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center justify-between">
                <span>Fire Safety Compliance</span>
                <FileCheck className="text-yellow-600" size={20} />
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3">Progress Reports</h4>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center justify-between">
                <span>Monthly Progress Report - March 2025</span>
                <FileText className="text-blue-600" size={20} />
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center justify-between">
                <span>Financial Status Report</span>
                <DollarSign className="text-blue-600" size={20} />
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded flex items-center justify-between">
                <span>Material Utilization Report</span>
                <BarChart className="text-blue-600" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Generate Government Report</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <select className="p-2 border rounded-lg">
              <option>Select Report Type</option>
              <option>Progress Report</option>
              <option>Compliance Certificate</option>
              <option>Financial Report</option>
            </select>
            <select className="p-2 border rounded-lg">
              <option>Select Period</option>
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annual</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Generate Report
            </button>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Transparency Dashboard</h4>
          <p className="text-gray-700 mb-3">Public-facing dashboard for government project transparency</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">94%</p>
              <p className="text-sm text-gray-600">NBC Compliance</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">37.5%</p>
              <p className="text-sm text-gray-600">Funds Utilized</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">Stage 3</p>
              <p className="text-sm text-gray-600">Current Phase</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">On Track</p>
              <p className="text-sm text-gray-600">Timeline Status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingSection;