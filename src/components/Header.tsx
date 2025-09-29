import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Database, Map, Fish, Dna, BookOpen, Bot, Waves } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  // 1. Removed the "Home" item from this array.
  const navItems = [
    { path: '/datasets', label: 'Datasets', icon: Database },
    { path: '/visualization', label: 'Visualization', icon: Map },
    { path: '/otolith', label: 'Otolith Analysis', icon: Fish },
    { path: '/taxonomy', label: 'Taxonomy', icon: Search },
    { path: '/edna', label: 'eDNA', icon: Dna },
    { path: '/api', label: 'API Docs', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 glass-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 2. This Link wrapper makes the name and icon clickable, taking the user to the homepage. */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 glass rounded-lg flex items-center justify-center float">
              <Waves className="w-5 h-5 text-bioluminescent" />
            </div>
            {/* 3. Changed the website name to "Shark" */}
            <span className="text-xl font-semibold text-white">Shark</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 hover:text-turquoise ${
                  location.pathname === path
                    ? 'text-turquoise border-b-2 border-turquoise pb-1'
                    : 'text-gray-300 hover:border-b-2 hover:border-turquoise hover:pb-1'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <Link to="/ai" className="bio-btn text-white px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2">
            <Bot className="w-4 h-4" />
            <span>AI Assistant</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
