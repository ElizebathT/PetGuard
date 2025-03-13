import React from 'react';
import { Stethoscope, ShieldCheck, Scissors, AlertTriangle } from 'lucide-react';

export default function Services() {
    const services = [
      { name: "General Checkup", description: "Routine health checkups for your pet.", price: "$50", icon: <Stethoscope className="w-6 h-6 text-blue-500" /> },
      { name: "Vaccination", description: "Keep your pet protected with necessary vaccines.", price: "$30", icon: <ShieldCheck className="w-6 h-6 text-green-500" /> },
      { name: "Grooming", description: "Professional grooming to keep your pet looking great.", price: "$25", icon: <Scissors className="w-6 h-6 text-purple-500" /> },
      { name: "Emergency Care", description: "24/7 emergency support for critical cases.", price: "Varies", icon: <AlertTriangle className="w-6 h-6 text-red-500" /> }
    ];
  
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Pet Clinic Services</h2>
        <div className="grid gap-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition flex items-center gap-4">
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
                <p className="text-green-600 font-bold mt-2">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}