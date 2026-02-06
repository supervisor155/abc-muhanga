const Home = () => (
  <main className="relative overflow-hidden">
    {/* Decorative Background Glows */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-neon-purple/10 blur-[100px] rounded-full"></div>

    <section className="relative pt-24 pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <span className="inline-block py-1 px-3 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-bold tracking-widest mb-4 border border-neon-cyan/20">
          NYANZA'S TECH LEADERS
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Digital Future</span> of Rwanda.
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
          From custom software architecture to cloud-native applications, ABC Company transforms complex problems into elegant digital realities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-neon-cyan text-dark-bg px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Launch Project
          </button>
          <button className="border border-slate-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
            Our Ecosystem
          </button>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Modern Web Photo Placeholder */}
        <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
            alt="Futuristic Tech"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Floating Stat Card */}
        <div className="absolute -bottom-6 -left-6 bg-card-bg/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hidden md:block">
          <p className="text-3xl font-bold text-white">99.9%</p>
          <p className="text-xs text-neon-cyan uppercase tracking-tighter">Uptime Guaranteed</p>
        </div>
      </div>
    </section>
  </main>
);
export default Home;