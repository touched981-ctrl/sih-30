import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Fish, Dna as Dna2, Search, Map, Database, BookOpen, Waves, Microscope, Thermometer, Droplets, Wind, Users, Zap } from 'lucide-react';

const Home = () => {
  const [bubbles, setBubbles] = React.useState([]);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.95) { // 5% chance to create bubble
        const newBubble = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 20 + 10
        };
        setBubbles(prev => [...prev.slice(-10), newBubble]); // Keep only last 10 bubbles
        
        // Remove bubble after animation
        setTimeout(() => {
          setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
        }, 8000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {/* Bubble Container */}
      <div className="bubble-container">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: bubble.x,
              top: bubble.y,
              width: bubble.size,
              height: bubble.size
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 ocean-bg min-h-screen flex items-center overflow-hidden">
        {/* Floating Ocean Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-4 h-4 bg-turquoise rounded-full float opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-aqua rounded-full float-slow opacity-40"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-bioluminescent rounded-full float opacity-80"></div>
          <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-turquoise rounded-full float-slow opacity-50"></div>
          
          {/* Wave SVG */}
          <svg className="absolute bottom-0 w-full h-32 wave-effect" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(34, 211, 238, 0.1)" />
            <path d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z" fill="rgba(6, 182, 212, 0.1)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight float">
            Shark - AI-Driven Marine Insights
          </h1>
          <p className="text-xl text-aqua mb-12 max-w-3xl mx-auto leading-relaxed float-slow opacity-90">
            Unifying ocean, fisheries, otolith, and DNA data for sustainable marine management 
            through advanced AI-powered analytics and visualization.
          </p>
          <Link to="/ai" className="bio-btn text-white px-8 py-4 rounded-full font-medium text-lg inline-flex items-center space-x-3 relative overflow-hidden">
            <Zap className="w-5 h-5" />
            <span>Dive into AI Assistant</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Oceanography and Marine Science Section */}
      <section className="py-20 px-6 relative" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #1e3a8a 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 float">Oceanography & Marine Science</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="glass-dark rounded-2xl p-8 glow-card">
              <h3 className="text-2xl font-semibold text-turquoise mb-6 float">Understanding Our Oceans</h3>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Oceanography is the scientific study of the ocean, encompassing its physical, chemical, biological, and geological aspects. 
                Our platform integrates cutting-edge marine science research to provide comprehensive insights into ocean ecosystems, 
                climate patterns, and marine biodiversity.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The Indian Ocean, covering approximately 70.6 million square kilometers, is home to diverse marine ecosystems. 
                From coral reefs in the Maldives to deep-sea trenches, this ocean supports over 3,000 fish species and countless 
                other marine organisms crucial for global biodiversity and climate regulation.
              </p>
              
              {/* Ocean Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-aqua">70.6M</div>
                  <div className="text-sm text-gray-300">km² Area</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-aqua">3,000+</div>
                  <div className="text-sm text-gray-300">Fish Species</div>
                </div>
              </div>
            </div>
            
            <div className="relative float-slow">
              <div className="glass-dark rounded-2xl p-6 h-80 relative overflow-hidden glow-card">
                {/* Ocean Image Background */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                    alt="Deep Ocean" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Ocean Elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-3 h-3 bg-bioluminescent rounded-full float"></div>
                  <div className="absolute top-20 right-16 w-2 h-2 bg-aqua rounded-full float-slow"></div>
                  <div className="absolute bottom-20 left-20 w-4 h-4 bg-turquoise rounded-full float"></div>
                  
                  <svg className="absolute bottom-0 w-full h-20 wave-effect" viewBox="0 0 400 80" fill="none">
                    <path d="M0,40 Q100,20 200,40 T400,40 L400,80 L0,80 Z" fill="rgba(34, 211, 238, 0.2)" />
                  </svg>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass rounded-lg p-3 glow-card">
                      <Thermometer className="w-8 h-8 text-aqua mx-auto mb-2 float" />
                      <div className="text-sm font-medium text-white">Temperature</div>
                      <div className="text-xs text-gray-300">5°C - 30°C</div>
                    </div>
                    <div className="glass rounded-lg p-3 glow-card">
                      <Droplets className="w-8 h-8 text-aqua mx-auto mb-2 float-slow" />
                      <div className="text-sm font-medium text-white">Salinity</div>
                      <div className="text-xs text-gray-300">33-37 PSU</div>
                    </div>
                  </div>
                  <Waves className="w-16 h-16 text-bioluminescent mb-3 float" />
                  <div className="text-white font-semibold text-lg">Indian Ocean</div>
                  <div className="text-sm text-aqua">70.6M km² • 3,000+ Species</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ocean Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-dark rounded-2xl p-6 text-center glow-card">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4 float">
                <Thermometer className="w-8 h-8 text-turquoise" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Physical Oceanography</h4>
              <p className="text-gray-300 text-sm">Study of ocean temperature, salinity, currents, and water masses that drive global climate patterns.</p>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 text-center glow-card">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4 float-slow">
                <Fish className="w-8 h-8 text-aqua" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Biological Oceanography</h4>
              <p className="text-gray-300 text-sm">Research on marine life, from microscopic plankton to large marine mammals and their ecosystems.</p>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 text-center glow-card">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-4 float">
                <Microscope className="w-8 h-8 text-bioluminescent" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Chemical Oceanography</h4>
              <p className="text-gray-300 text-sm">Analysis of ocean chemistry, nutrient cycles, and chemical processes affecting marine environments.</p>
              </div>
            </div>
        </div>
      </section>

      {/* Our Idea Section */}
      <section className="py-20 px-6 relative" style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 float">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-dark p-8 rounded-2xl text-center glow-card">
              <Globe className="w-12 h-12 text-turquoise mx-auto mb-4 float" />
              <h3 className="text-xl font-medium text-white mb-3">Oceanographic Data</h3>
              <p className="text-gray-300">Ocean currents, salinity levels, and climate patterns for comprehensive marine analysis</p>
            </div>
            <div className="glass-dark p-8 rounded-2xl text-center glow-card">
              <Fish className="w-12 h-12 text-aqua mx-auto mb-4 float-slow" />
              <h3 className="text-xl font-medium text-white mb-3">Fisheries Data</h3>
              <p className="text-gray-300">Stock health monitoring, catch trends, and sustainable fishing practices</p>
            </div>
            <div className="glass-dark p-8 rounded-2xl text-center glow-card">
              <Dna2 className="w-12 h-12 text-bioluminescent mx-auto mb-4 float" />
              <h3 className="text-xl font-medium text-white mb-3">Biodiversity Data</h3>
              <p className="text-gray-300">Environmental DNA analysis, species taxonomy, and biodiversity mapping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientists Section */}
      <section className="py-20 px-6 relative" style={{ background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8 float">Our Indian Marine Scientists</h2>
          <p className="text-lg text-gray-200 text-center mb-16 max-w-3xl mx-auto float-slow">
            Leading researchers from premier Indian institutions contributing to marine science and ocean conservation
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-dark p-6 rounded-2xl text-center glow-card">
              <div className="w-24 h-24 glass rounded-full mx-auto mb-4 flex items-center justify-center relative float">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                  alt="Dr. Rajesh Kumar" 
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 glass rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-sm text-gray-300 mb-1">CSIR-National Institute of Oceanography</p>
              <p className="text-xs text-turquoise mb-3">Physical Oceanography</p>
              <div className="text-xs text-gray-400">
                <div>• Ocean Circulation Modeling</div>
                <div>• Climate Change Impact</div>
                <div>• Monsoon Dynamics</div>
              </div>
            </div>

            <div className="glass-dark p-6 rounded-2xl text-center glow-card">
              <div className="w-24 h-24 glass rounded-full mx-auto mb-4 flex items-center justify-center relative float-slow">
                <img 
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                  alt="Dr. Priya Nair" 
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 glass rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dr. Priya Nair</h3>
              <p className="text-sm text-gray-300 mb-1">Central Marine Fisheries Research Institute</p>
              <p className="text-xs text-aqua mb-3">Marine Biology & Fisheries</p>
              <div className="text-xs text-gray-400">
                <div>• Fish Stock Assessment</div>
                <div>• Biodiversity Conservation</div>
                <div>• Sustainable Fisheries</div>
              </div>
            </div>

            <div className="glass-dark p-6 rounded-2xl text-center glow-card">
              <div className="w-24 h-24 glass rounded-full mx-auto mb-4 flex items-center justify-center relative float">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                  alt="Dr. Arjun Menon" 
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 glass rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dr. Arjun Menon</h3>
              <p className="text-sm text-gray-300 mb-1">Indian Institute of Science</p>
              <p className="text-xs text-bioluminescent mb-3">Marine Biotechnology</p>
              <div className="text-xs text-gray-400">
                <div>• Environmental DNA</div>
                <div>• Marine Genomics</div>
                <div>• Coral Reef Genetics</div>
              </div>
            </div>

            <div className="glass-dark p-6 rounded-2xl text-center glow-card">
              <div className="w-24 h-24 glass rounded-full mx-auto mb-4 flex items-center justify-center relative float-slow">
                <img 
                  src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                  alt="Dr. Kavitha Reddy" 
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 glass rounded-full flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dr. Kavitha Reddy</h3>
              <p className="text-sm text-gray-300 mb-1">National Centre for Coastal Research</p>
              <p className="text-xs text-turquoise mb-3">Coastal & Marine Geology</p>
              <div className="text-xs text-gray-400">
                <div>• Coastal Erosion Studies</div>
                <div>• Sediment Analysis</div>
                <div>• Sea Level Rise Research</div>
              </div>
            </div>
          </div>
          
          {/* Research Institutions */}
          <div className="mt-16 glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white text-center mb-8 float">Collaborating Institutions</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="glass rounded-lg p-4 glow-card">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-3 float">
                  <Database className="w-6 h-6 text-turquoise" />
                </div>
                <h4 className="font-semibold text-white mb-1">CSIR-NIO</h4>
                <p className="text-xs text-gray-300">National Institute of Oceanography</p>
              </div>
              
              <div className="glass rounded-lg p-4 glow-card">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-3 float-slow">
                  <Fish className="w-6 h-6 text-aqua" />
                </div>
                <h4 className="font-semibold text-white mb-1">CMFRI</h4>
                <p className="text-xs text-gray-300">Central Marine Fisheries Research Institute</p>
              </div>
              
              <div className="glass rounded-lg p-4 glow-card">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-3 float">
                  <Microscope className="w-6 h-6 text-bioluminescent" />
                </div>
                <h4 className="font-semibold text-white mb-1">NCCR</h4>
                <p className="text-xs text-gray-300">National Centre for Coastal Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative" style={{ background: 'linear-gradient(180deg, #06b6d4 0%, #0a1628 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 float">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-dark p-6 rounded-2xl text-center glow-card">
              <Search className="w-10 h-10 text-turquoise mx-auto mb-4 float" />
              <h3 className="text-lg font-medium text-white mb-2">AI Search</h3>
              <p className="text-sm text-gray-300">Intelligent query processing for marine data</p>
            </div>
            <div className="glass-dark p-6 rounded-2xl text-center glow-card">
              <Map className="w-10 h-10 text-aqua mx-auto mb-4 float-slow" />
              <h3 className="text-lg font-medium text-white mb-2">Interactive Maps</h3>
              <p className="text-sm text-gray-300">Real-time visualization of marine ecosystems</p>
            </div>
            <div className="glass-dark p-6 rounded-2xl text-center glow-card">
              <Database className="w-10 h-10 text-bioluminescent mx-auto mb-4 float" />
              <h3 className="text-lg font-medium text-white mb-2">Biodiversity Data</h3>
              <p className="text-sm text-gray-300">Comprehensive species and habitat information</p>
            </div>
            <div className="glass-dark p-6 rounded-2xl text-center glow-card">
              <BookOpen className="w-10 h-10 text-turquoise mx-auto mb-4 float-slow" />
              <h3 className="text-lg font-medium text-white mb-2">API Access</h3>
              <p className="text-sm text-gray-300">Programmatic access to all platform data</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;