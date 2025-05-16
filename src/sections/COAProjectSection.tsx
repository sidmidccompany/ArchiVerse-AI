import React from 'react';

// Define types for better type safety
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

interface COAStage {
  stage: number;
  name: string;
  percentage: number;
  fee: number;
}

interface COAProjectSectionProps {
  projectData: ProjectData;
  coaStage: number;
  coaStages: COAStage[];
}

const COAProjectSection: React.FC<COAProjectSectionProps> = ({ 
  projectData, 
  coaStage, 
  coaStages 
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">COA Project Management</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Project: {projectData.name}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Project Cost</p>
            <p className="text-lg font-semibold">₹{(projectData.projectCost / 10000000).toFixed(2)} Cr</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Architectural Fees (5.6%)</p>
            <p className="text-lg font-semibold">₹{(projectData.fees.architectural / 10000000).toFixed(2)} Cr</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Paid / Pending</p>
            <p className="text-lg font-semibold">
              ₹{(projectData.fees.paid / 10000000).toFixed(2)} Cr / 
              ₹{(projectData.fees.pending / 10000000).toFixed(2)} Cr
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg mb-4">COA Standard Stages Progress</h4>
          {coaStages.map((stage) => (
            <div key={stage.stage} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    stage.stage <= coaStage ? 'bg-green-600' : 'bg-gray-300'
                  }`}>
                    {stage.stage <= coaStage ? '✓' : stage.stage}
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold">Stage {stage.stage}: {stage.name}</h5>
                    <p className="text-sm text-gray-600">Fee: {stage.percentage}% of architectural fees</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{((stage.fee * projectData.fees.architectural) / 10000000).toFixed(2)} Cr</p>
                  <p className="text-sm text-gray-600">
                    {stage.stage <= coaStage ? 'Paid' : 'Pending'}
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: stage.stage <= coaStage ? '100%' : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Payment Schedule Alert</h4>
          <p className="text-gray-700">Next milestone: Stage 3 (Drawings for Approvals) - ₹{((0.15 * projectData.fees.architectural) / 10000000).toFixed(2)} Cr due upon submission of approval drawings.</p>
          <button className="mt-3 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
            Generate Invoice
          </button>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Change Management</h4>
          <p className="text-gray-700">For scope revisions post-Stage 2, additional fees apply at 50% of the original fee for revised work as per COA guidelines.</p>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Calculate Revision Fees
          </button>
        </div>
      </div>
    </div>
  );
};

export default COAProjectSection;