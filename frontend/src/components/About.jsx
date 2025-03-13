import React from 'react'

 function About() {
    return (
      <section className="bg-gray-100 py-12" id='About'>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">About</h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            pet guards are essential tools that help keep pets safe, secure, and healthy,
             ensuring that they live long, happy lives. 
             Whether through physical devices or technology, these products support responsible pet ownership 
             and enhance the bond between you and your furry companion.
            </p>
          </div>
  
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img src="public/dogcat.jpg" alt="Cat" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold">Cat</h3>
              <p className="text-gray-600 mt-2">
              A pet guard is a term that can refer to various tools, 
              devices, or systems designed to protect pets from harm or danger, 
              ensure their safety, or monitor them. Pet guards can be physical, 
              like fences or safety gates, or digital, like pet trackers and security systems.
              Here’s a breakdown of different types of pet guards and their uses:
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold">Dog</h3>
              <p className="text-gray-600 mt-2">
              Dogs are wonderful companions who offer love, loyalty, and protection to their owners.
              With their playful nature, strong instincts, and ability to bond with humans, 
              dogs have earned their place as “man’s best friend.” Whether they’re guarding the home, 
              playing fetch in the yard, or simply curling up by your side on a cold night, 
              dogs bring joy and comfort to millions of people worldwide.
              They are more than just pets—they are family members.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  

export default About