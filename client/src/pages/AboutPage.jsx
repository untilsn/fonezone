import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 container py-20">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Vision */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit
              molestie pellentesque. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
          {/* Our Mission */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
          {/* Text Content */}
          <div className="bg-green-100 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit
              molestie pellentesque. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <button className="text-green-600 font-semibold hover:underline">
              Learn More →
            </button>
          </div>
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" // Replace with your image URL
              alt="Who We Are"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            The world’s premium design brands in one destination.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <img
              src="https://via.placeholder.com/100x50?text=L'Barrel"
              alt="L'Barrel"
              className="h-10 mx-auto"
            />
            <img
              src="https://via.placeholder.com/100x50?text=Ocean"
              alt="Ocean"
              className="h-10 mx-auto"
            />
            <img
              src="https://via.placeholder.com/100x50?text=Hugo"
              alt="Hugo"
              className="h-10 mx-auto"
            />
            <img
              src="https://via.placeholder.com/100x50?text=Mountain"
              alt="Mountain"
              className="h-10 mx-auto"
            />
            <img
              src="https://via.placeholder.com/100x50?text=Brooks"
              alt="Brooks"
              className="h-10 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Replace with your image URL
                alt="Samantha Grey"
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Samantha Grey</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Replace with your image URL
                alt="Bruce Parker"
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Bruce Parker</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
            {/* Team Member 3 */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Replace with your image URL
                alt="Jessica Ray"
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jessica Ray</h3>
              <p className="text-gray-600">Product Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Customers Say About Us Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            What Customers Say About Us
          </h2>
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Replace with your image URL
              alt="Jason Gregory"
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-gray-600 max-w-2xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit
              molestie pellentesque. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">Jason Gregory</h3>
            <p className="text-gray-600">Customer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;