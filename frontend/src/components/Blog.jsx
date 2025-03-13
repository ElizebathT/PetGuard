import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* Blog Heading */}
        <div className="text-center mb-8"> {/* Center the heading, add margin bottom */}
          <h2 className="text-3xl font-bold">Blog</h2> {/* Style the heading */}
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto"> {/* Optional description */}
            A brief description or introduction to your blog section can go here. 
            For example, you could write something about the interesting cat-related
            topics you cover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ... (rest of the card code remains the same) ... */}
          <div className="bg-white rounded-lg shadow-md">
            <img src="cat.jpg" alt="Cat 1" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">LOREM IPSUM IS SIMPLY</h3>
              <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <img src="dog.jpg" alt="Cat 2" className=" h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">LOREM IPSUM IS SIMPLY</h3>
              <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <img src="dogcat.jpg" alt="Cat 3" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">LOREM IPSUM IS SIMPLY</h3>
              <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE</button>
            </div>
          </div>
          {/* ... (end of card code) ... */}
        </div>
      </div>
    </div>
  );
};

export default Blog;