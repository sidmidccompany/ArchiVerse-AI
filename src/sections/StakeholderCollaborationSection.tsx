import React from 'react';

import { 
 CheckCircle, AlertCircle,
  Clock
} from 'lucide-react';


interface StakeholderCollaborationSectionProps {
  projectData: any;
}

const StakeholderCollaborationSection: React.FC<StakeholderCollaborationSectionProps> = ({ projectData }) => {
  return (
 <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Stakeholder Collaboration</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Project: {projectData.name}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Government Officials</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>MMRDA Commissioner</span>
                <span className="text-green-600 text-sm">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Chief Engineer</span>
                <span className="text-green-600 text-sm">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Planning Officer</span>
                <span className="text-gray-400 text-sm">Offline</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Consultants</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Structural Engineer</span>
                <span className="text-green-600 text-sm">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>MEP Consultant</span>
                <span className="text-green-600 text-sm">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Quantity Surveyor</span>
                <span className="text-gray-400 text-sm">Offline</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Contractors</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>L&T Construction</span>
                <span className="text-green-600 text-sm">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Subcontractor 1</span>
                <span className="text-gray-400 text-sm">Offline</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Subcontractor 2</span>
                <span className="text-gray-400 text-sm">Offline</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Role-Based Access Control</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="font-medium text-gray-700">Government Officials</p>
                <p className="text-sm text-gray-600">View all, approve milestones</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Consultants</p>
                <p className="text-sm text-gray-600">Edit designs, submit reports</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Contractors</p>
                <p className="text-sm text-gray-600">View approved drawings, update progress</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Secure Document Sharing</h4>
            <p className="text-gray-700 mb-3">End-to-end encrypted file sharing compliant with government data protection guidelines</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Upload Document
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Share with Stakeholders
              </button>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Approval Workflow</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={20} />
                <span>Design submitted by Architect</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-yellow-600 mr-2" size={20} />
                <span>Pending Chief Engineer review</span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="text-gray-400 mr-2" size={20} />
                <span>Awaiting Commissioner approval</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeholderCollaborationSection;