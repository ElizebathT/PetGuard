import React, { useState } from 'react';

const Profile = () => {
    const [expandedId, setExpandedId] = useState(null);
    
    const toggleReadMore = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const pets = [
        {
            id: 1,
            name: "Bella",
            breed: "Golden Retriever",
            age: "3 years",
            vaccinated: true,
            size: "Large",
            adoptionFee: "$200",
            image: "public/bella.jpeg",
            status: "Available"
        },
        {
            id: 2,
            name: "Whiskers",
            breed: "Maine Coon",
            age: "2 years",
            vaccinated: false,
            size: "Medium",
            adoptionFee: "$150",
            image: "public/whisker.jpeg",
            status: "Adopted"
        },
        {
            id: 3,
            name: "Max",
            breed: "Graden Dog",
            age: "4 years",
            vaccinated: true,
            size: "Large",
            adoptionFee: "$180",
            image: "public/graden.jpeg",
            status: "Available"
        },
        {
            id: 4,
            name: "Max",
            breed: "Labrador",
            age: "3 years",
            vaccinated: true,
            size: "Large",
            adoptionFee: "$180",
            image: "public/patti.jpg",
            status: "UnAvailable"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {pets.map((pet) => (
                <div key={pet.id} className="shadow-lg rounded-2xl overflow-hidden bg-white">
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold">{pet.name}</h2>
                        <p className="text-gray-600">Breed: {pet.breed}</p>
                        <p className="text-gray-600">Age: {pet.age}</p>
                        <p className={pet.vaccinated ? "text-green-600" : "text-red-600"}>
                            {pet.vaccinated ? "Vaccinated ✅" : "Not Vaccinated ❌"}
                        </p>
                        <p className="text-gray-600">Size: {pet.size}</p>
                        <p className="text-gray-600">Adoption Fee: {pet.adoptionFee}</p>
                    </div>
                    <img src={pet.image} alt={pet.name} className="w-full h-60 object-cover" />
                    <div className="p-4">
                        <p className="text-gray-600">Status: {pet.status}</p>
                        {expandedId === pet.id && <p className="mt-2 text-gray-700">More information about {pet.name}...</p>}
                        <button 
                            className="mt-3 w-full bg-blue-500 text-white py-2 px-4 rounded"
                            onClick={() => toggleReadMore(pet.id)}
                        >
                            {expandedId === pet.id ? "Read Less" : "Read More"}
                        </button>
                        <button className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded">Adopt</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Profile;
