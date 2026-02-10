import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="container mx-auto px-6 py-12 lg:py-20">
        <div className="max-w-4xl">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 dark:text-white leading-tight mb-6">
            Mais do que produtos,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-blue-400 dark:to-blue-200">entregamos confiança.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Na Disfrio, trabalhamos todos os dias para ser a ponte entre grandes marcas e negócios como o seu. Estamos prontos para crescer junto com você.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/catalogo" className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 transition-all">
              Ver Catálogo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a href="https://wa.me/5519984400367" className="flex items-center gap-2 bg-surface-light dark:bg-surface-dark text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <span>Falar com Consultor</span>
            </a>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12" id="categorias">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 bg-secondary rounded-full"></div>
          <h3 className="font-display font-bold text-2xl text-slate-800 dark:text-white">Nossas Soluções</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category Cards */}
          {[
            { title: "Refrigeração", icon: "❄️", desc: "Peças e equipamentos completos para sistemas residenciais e comerciais." },
            { title: "Ferramentas", icon: "🔧", desc: "Instrumentos de precisão e ferramentas robustas para instalação e manutenção." },
            { title: "Lavadoras", icon: "🧺", desc: "Componentes originais e universais para máquinas de lavar e secar." }
          ].map((cat, i) => (
            <div key={i} className="group bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-primary dark:text-blue-300 mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-2xl">
                  {cat.icon}
                </div>
                <h4 className="font-display font-bold text-xl mb-2 text-slate-900 dark:text-white">{cat.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{cat.desc}</p>
                <span className="text-secondary dark:text-blue-400 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Explorar →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-800/50 py-16 my-8" id="unidades">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2">
              <h3 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-6">Estamos presentes onde você precisa</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Com uma logística eficiente e unidades estrategicamente localizadas, garantimos agilidade na entrega para que seu negócio não pare.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Criciúma / SC", "Palhoça / SC", "Florianópolis / SC", "Joinville / SC", "Americana / SP", "Porto Alegre / RS", "Viana / ES"].map((loc, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="text-secondary text-sm">📍</span>
                    <span className="font-medium">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Decorative element roughly matching the original design */}
              <div className="relative">
                <div className="w-72 h-72 bg-gradient-to-tr from-blue-100 to-white dark:from-slate-700 dark:to-slate-600 rounded-3xl transform rotate-45 shadow-2xl border-4 border-white dark:border-slate-500 overflow-hidden flex items-center justify-center relative">
                  <div className="transform -rotate-45 z-10 flex flex-col items-center drop-shadow-2xl">
                    <span className="text-6xl text-secondary animate-bounce">📍</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 mb-12" id="contato">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-3xl text-white mb-4">Entre em contato</h3>
            <p className="text-blue-100 mb-8">Fale diretamente com nosso especialista para cotações e suporte exclusivo.</p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 inline-flex flex-col items-center gap-3 hover:bg-white/15 transition-colors">
              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider">Contato Exclusivo</p>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl font-bold">Antonio</span>
              </div>
              <a href="https://wa.me/5519984400367" className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105 mt-2">
                (19) 98440-0367
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
