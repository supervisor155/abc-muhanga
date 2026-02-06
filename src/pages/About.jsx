const About = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
            alt="Engineering" 
            className="rounded-3xl border border-slate-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <h2 className="text-neon-purple font-mono mb-4">// OUR MISSION</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Bridging Code and Humanity.</h1>
          <p className="text-slate-400 leading-relaxed text-lg mb-8">
            ABC Company was founded on the belief that software should be invisible—so intuitive 
            that you forget it's there. Based in the heart of Nyanza, we combine local 
            talent with global standards.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-2 border-neon-cyan pl-4">
              <h4 className="text-white font-bold text-2xl">10+</h4>
              <p className="text-slate-500 text-sm uppercase">Years Experience</p>
            </div>
            <div className="border-l-2 border-neon-purple pl-4">
              <h4 className="text-white font-bold text-2xl">50+</h4>
              <p className="text-slate-500 text-sm uppercase">Projects Launched</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;