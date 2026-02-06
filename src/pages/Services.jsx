const Services = () => {
  const services = [
    { title: "Custom Web Apps", icon: "🌐", desc: "Scalable React applications tailored to your business logic." },
    { title: "Mobile Dev", icon: "📱", desc: "Cross-platform mobile experiences for iOS and Android." },
    { title: "Cloud Solutions", icon: "☁️", desc: "Modern infrastructure built for speed and reliability." }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Core Competencies</h2>
        <p className="text-slate-400">Engineering excellence delivered with precision.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-card-bg border border-slate-800 hover:border-neon-cyan/50 transition-all hover:-translate-y-2">
            <div className="text-4xl mb-6">{s.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
