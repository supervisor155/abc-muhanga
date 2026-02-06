const Contact = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-neon-cyan font-mono tracking-widest uppercase mb-2">Connect with us</h2>
            <h1 className="text-5xl font-black text-white">Let's build something <span className="italic text-slate-400">Legendary.</span></h1>
            <p className="text-slate-400 mt-6 text-lg">
              Based in Nyanza, serving the globe. Reach out for software architecture, 
              modernization, or digital strategy.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-neon-cyan transition-colors">
                📍
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold">Location</p>
                <p className="text-white">Nyanza District, Southern Province, Rwanda</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-neon-purple transition-colors">
                ✉️
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase font-bold">Email</p>
                <p className="text-white">hello@abccompany.rw</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Futuristic Form */}
        <div className="bg-card-bg/40 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-3xl animate-pulse-glow">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="cyber-input" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="cyber-input" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Subject</label>
              <select className="cyber-input appearance-none">
                <option>New Project Inquiry</option>
                <option>Software Modernization</option>
                <option>Career Opportunity</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message</label>
              <textarea rows="5" placeholder="Tell us about your vision..." className="cyber-input resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-black py-4 rounded-xl hover:opacity-90 transition-all active:scale-95 uppercase tracking-widest mt-4">
              Send Transmission
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;