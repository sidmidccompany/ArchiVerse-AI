import React from 'react';
import { Shield } from 'lucide-react';

// Define proper types for compliance checks
type ComplianceStatus = 'compliant' | 'pending' | 'non-compliant';

interface ComplianceCheck {
  status: ComplianceStatus;
  notes: string;
}

interface ComplianceChecks {
  structural: ComplianceCheck;
  fire: ComplianceCheck;
  accessibility: ComplianceCheck;
  disaster: ComplianceCheck;
  energy: ComplianceCheck;
  indemnity: ComplianceCheck;
}

interface ProjectData {
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

interface NBCComplianceSectionProps {
  projectData: ProjectData;
  complianceChecks: ComplianceChecks | null;
  handleNBCCompliance: () => void;
}

const NBCComplianceSection: React.FC<NBCComplianceSectionProps> = ({ 
  projectData, 
  complianceChecks, 
  handleNBCCompliance 
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">NBC 2016 Compliance Check</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Project: {projectData.name}</h3>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={handleNBCCompliance}
          >
            Run NBC Compliance Check
          </button>
        </div>

        {complianceChecks && (
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className={complianceChecks.structural.status === 'compliant' ? 'text-green-600' : 'text-yellow-600'} size={24} />
                  <div className="ml-3">
                    <h4 className="font-semibold">Structural Safety Certification</h4>
                    <p className="text-sm text-gray-600">{complianceChecks.structural.notes}</p>
                  </div>
                </div>
                <span className={`font-semibold ${complianceChecks.structural.status === 'compliant' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {complianceChecks.structural.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Other compliance check sections remain the same */}
            {/* ... */}
          </div>
        )}

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">NBC 2016 Integrated Approval Process</h4>
          <p className="text-gray-700">Single window approach for expeditious approvals. Integration with government portals available for streamlined clearances.</p>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Connect to Government Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default NBCComplianceSection;