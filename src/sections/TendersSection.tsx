
import { 
  Flag, Clock
} from 'lucide-react';


const TendersSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Government Tenders</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Active Tender Opportunities</h3>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Connect to CPWD e-Tendering
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              GeM Portal Integration
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">CPWD Office Complex - Phase 2</h4>
                <p className="text-gray-600 mt-1">Design and supervision services</p>
                <div className="flex items-center mt-2">
                  <Flag className="text-red-600 mr-2" size={16} />
                  <span className="text-sm text-red-600">Deadline: 5 days</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹3.5 Cr</p>
                <p className="text-sm text-gray-600">Estimated value</p>
              </div>
            </div>
            <div className="mt-3 flex space-x-3">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm">
                View Details
              </button>
              <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm">
                Prepare Bid
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">Smart City Command Center</h4>
                <p className="text-gray-600 mt-1">Architectural design services</p>
                <div className="flex items-center mt-2">
                  <Clock className="text-yellow-600 mr-2" size={16} />
                  <span className="text-sm text-yellow-600">Deadline: 12 days</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹5.2 Cr</p>
                <p className="text-sm text-gray-600">Estimated value</p>
              </div>
            </div>
            <div className="mt-3 flex space-x-3">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm">
                View Details
              </button>
              <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm">
                Prepare Bid
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Bid Document Templates</h4>
          <p className="text-gray-700 mb-3">Standard templates compliant with government procurement laws</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="text-blue-600 hover:underline text-sm">Technical Bid</button>
            <button className="text-blue-600 hover:underline text-sm">Financial Bid</button>
            <button className="text-blue-600 hover:underline text-sm">EMD Declaration</button>
            <button className="text-blue-600 hover:underline text-sm">Experience Certificate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TendersSection;