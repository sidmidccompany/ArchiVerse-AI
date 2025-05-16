
import { 
   BookOpen, Award, 
  FileCheck, School
} from 'lucide-react';


const TrainingSection = () => {
  return (
  <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Training & Resources</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Government Project Guidelines</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <BookOpen className="text-blue-600 mr-2" size={20} />
              NBC 2016 Resources
            </h4>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">NBC 2016 Complete Guidelines</a>
              <a href="#" className="block text-blue-600 hover:underline">Structural Safety Checklist</a>
              <a href="#" className="block text-blue-600 hover:underline">Fire Safety Requirements</a>
              <a href="#" className="block text-blue-600 hover:underline">Accessibility Standards</a>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Award className="text-green-600 mr-2" size={20} />
              COA Guidelines
            </h4>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:underline">Professional Conduct Regulations</a>
              <a href="#" className="block text-blue-600 hover:underline">Conditions of Engagement</a>
              <a href="#" className="block text-blue-600 hover:underline">Scale of Charges</a>
              <a href="#" className="block text-blue-600 hover:underline">Indemnity Insurance Guide</a>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Training Modules</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg">
              <School className="text-blue-600 mb-2" size={24} />
              <h5 className="font-semibold">NBC Compliance</h5>
              <p className="text-sm text-gray-600">4-hour certification course</p>
              <button className="mt-2 text-blue-600 hover:underline text-sm">Start Course</button>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <School className="text-green-600 mb-2" size={24} />
              <h5 className="font-semibold">Green Building Design</h5>
              <p className="text-sm text-gray-600">6-hour IGBC/GRIHA course</p>
              <button className="mt-2 text-blue-600 hover:underline text-sm">Start Course</button>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <School className="text-purple-600 mb-2" size={24} />
              <h5 className="font-semibold">Government Tendering</h5>
              <p className="text-sm text-gray-600">3-hour practical guide</p>
              <button className="mt-2 text-blue-600 hover:underline text-sm">Start Course</button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Downloadable Checklists</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FileCheck className="mr-1" size={16} />
              <span className="text-sm">NBC Checklist</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FileCheck className="mr-1" size={16} />
              <span className="text-sm">COA Compliance</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FileCheck className="mr-1" size={16} />
              <span className="text-sm">Fire Safety</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FileCheck className="mr-1" size={16} />
              <span className="text-sm">Green Building</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSection;