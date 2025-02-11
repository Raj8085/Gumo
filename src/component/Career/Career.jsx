import { ArrowRight } from 'lucide-react';



const positions = [
  { title: 'Senior Frontend Developer', type: 'Remote' },
  { title: 'Django Backend Developer', type: 'Remote' },
  { title: 'Senior QA Engineer', type: 'Remote' },
  { title: 'Data Scientist', type: 'Remote' },
];

function Career() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-16">Careers</h1>
        
        <div className="space-y-8">
          {positions.map((position, index) => (
            <div 
              key={index}
              className="group border-t border-gray-700 pt-8 pb-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                    {position.title} ({position.type})
                  </h2>
                  <button 
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors group-hover:text-white"
                  >
                    View job description
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Career;