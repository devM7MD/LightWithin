import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#ddffe7' }}>
      {/* Header/Navigation */}
      <header style={{ backgroundColor: '#98d7c2' }} className="p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center" style={{ color: '#167D7F' }}>LightWithin</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <div className="rounded-lg shadow-md overflow-hidden">

          {/* Content Section */}
          <div className="p-6" style={{ backgroundColor: 'white' }}>
            
            <div className="text-center mb-8">
              <p className="mb-4 text-4xl" style={{ color: '#167D7F' }}>
                Welcome <span className="font-bold">"USERNAME"</span> to LightWithin
              </p>
              
              <p className="mb-6 text-2xl" style={{ color: '#167D7F' }}>
                to take look to our tools go to the Dashboard by clicking
              </p>
              
              <div className="flex justify-center">
                <button 
                  className="px-6 py-2 rounded-md text-white font-medium"
                  style={{ backgroundColor: '#29A0B1' }}
                >
                  <a href="/dashboard">Get Started</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#98d7c2' }} className="p-4 mt-auto">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-2 md:mb-0">
            <div className="w-8 h-8 rounded-full mr-2">
                <img src="/favicon-test.svg" alt="logo" />
            </div>
            <span style={{ color: '#167D7F' }}>LightWithin</span>
          </div>
          
          {/* Footer Links */}
          <div className="flex space-x-4">
            <button 
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: '#29A0B1' }}
            >
              Contact
            </button>
            
            <button 
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: '#29A0B1' }}
            >
              Social
            </button>
            
            <button 
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: '#29A0B1' }}
            >
              Privacy Policy & Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;    