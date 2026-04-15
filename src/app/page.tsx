'use client'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'

export default function Page() {
  useEffect(() => {
    (async () => {
      const AOS = (await import('aos')).default
      AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
    })()
  }, [])
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const nombre = String(form.get('nombre') || '')
    const correo = String(form.get('correo') || '')
    const mensaje = String(form.get('mensaje') || '')
    const texto = `Hola, soy ${nombre}. Mi correo es ${correo}. Mi mensaje: ${mensaje}`
    const url = `https://wa.me/529212295670?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank')
  }

  return (
    <main className="bg-[#0a0b0f] text-gray-200 scroll-smooth">

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d0e14]/95 backdrop-blur-md shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/30">
              HVJ
            </div>
            <span className="text-xl font-bold text-white">HVJ <span className="text-indigo-400">Solutions</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Servicios','¿Por qué nosotros?','Planes','Proyectos','Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item === '¿Por qué nosotros?' ? 'porque' : item === 'Servicios' ? 'servicios' : item === 'Planes' ? 'planes' : item === 'Proyectos' ? 'proyectos' : 'contacto'}`}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/529212295670?text=Hola,%20quiero%20una%20cotización%20con%20HVJ%20Solutions"
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              Cotizar ahora
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(v => !v)}
          >
            <span className="sr-only">Menú</span>
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#0d0e14]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 space-y-3">
            {[
              { label: 'Servicios', href: '#servicios' },
              { label: '¿Por qué nosotros?', href: '#porque' },
              { label: 'Planes', href: '#planes' },
              { label: 'Proyectos', href: '#proyectos' },
              { label: 'Contacto', href: '#contacto' },
            ].map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white py-2 transition-colors">
                {label}
              </a>
            ))}
            <a
              href="https://wa.me/529212295670?text=Hola,%20quiero%20una%20cotización%20con%20HVJ%20Solutions"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-3 rounded-lg transition-all mt-2"
            >
              Cotizar ahora
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0b0f]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.1)_0%,_transparent_50%)]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)', backgroundSize: '64px 64px'}} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div data-aos="fade-down">
            <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              Soluciones digitales a tu medida
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight" data-aos="fade-up" data-aos-delay="100">
            Transforma tu negocio<br />
            con <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">HVJ Solutions</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Desarrollo web, e-commerce, sistemas POS y marketing digital que impulsan el crecimiento real de tu empresa.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-1 text-base"
            >
              Solicitar cotización gratis
            </a>
            <a
              href="#proyectos"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 text-base"
            >
              Ver proyectos →
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            {[
              { value: '5+', label: 'Años de experiencia' },
              { value: '50+', label: 'Proyectos entregados' },
              { value: '30+', label: 'Clientes satisfechos' },
              { value: '24/7', label: 'Soporte disponible' },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-indigo-400">{s.value}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.05)_0%,_transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Lo que ofrecemos</span>
            <h2 className="text-4xl font-bold text-white mt-3">Nuestros Servicios</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Todo lo que tu negocio necesita para crecer en el mundo digital, bajo un mismo techo.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
                title: 'Desarrollo Web',
                desc: 'Sitios web modernos, rápidos y adaptables a cualquier dispositivo. Construidos con las mejores tecnologías del mercado.',
                delay: 0,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                ),
                title: 'Landing Pages',
                desc: 'Páginas de aterrizaje optimizadas para convertir visitantes en clientes. Diseño persuasivo y enfocado en resultados.',
                delay: 100,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                ),
                title: 'E-commerce',
                desc: 'Tiendas en línea profesionales con pasarelas de pago, gestión de inventario y experiencia de compra fluida.',
                delay: 200,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                ),
                title: 'Sistema POS',
                desc: 'Software de punto de venta a la medida de tu negocio. Control de inventario, ventas y reportes en tiempo real.',
                delay: 300,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                ),
                title: 'Marketing Digital',
                desc: 'Campañas en Google Ads, Meta Ads y estrategias SEO para que más clientes encuentren tu negocio.',
                delay: 400,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ),
                title: 'Soporte y Mantenimiento',
                desc: 'Te acompañamos después del lanzamiento. Actualizaciones, correcciones y mejoras continuas para tu plataforma.',
                delay: 500,
              },
            ].map(({ icon, title, desc, delay }) => (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-delay={delay}
                className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500/20 transition-colors">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIRNOS? */}
      <section id="porque" className="py-24 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Nuestra ventaja</span>
            <h2 className="text-4xl font-bold text-white mt-3">¿Por qué elegirnos?</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Trabajamos como tu socio tecnológico, no solo como proveedores.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Experiencia Comprobada',
                desc: 'Más de 5 años desarrollando soluciones digitales para negocios de todos los tamaños, desde emprendedores hasta empresas consolidadas.',
                delay: 0,
              },
              {
                icon: '🤝',
                title: 'Soporte Personalizado',
                desc: 'Te acompañamos en cada etapa: diseño, desarrollo, lanzamiento y mantenimiento. Siempre hay alguien disponible para ti.',
                delay: 100,
              },
              {
                icon: '💡',
                title: 'Resultados Medibles',
                desc: 'No solo entregamos código bonito. Construimos herramientas que generan ventas, ahorran tiempo y hacen crecer tu negocio.',
                delay: 200,
              },
            ].map(({ icon, title, desc, delay }) => (
              <div key={title} data-aos="fade-up" data-aos-delay={delay} className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-colors" />
                <div className="text-5xl mb-6">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Inversión</span>
            <h2 className="text-4xl font-bold text-white mt-3">Planes y Precios</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Elige el plan que mejor se adapta a tu negocio. Sin sorpresas, sin letras pequeñas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                name: 'Básico',
                tag: null,
                price: '$4,999',
                period: 'MXN pago único',
                desc: 'Landing page profesional',
                features: ['1 página web', 'Diseño responsivo', 'Formulario de contacto', 'Optimización básica SEO', 'Entrega en 5 días'],
                missing: ['Blog o secciones extras', 'Integración redes sociales'],
                cta: 'Hola,%20quiero%20el%20Plan%20Básico',
                highlight: false,
                delay: 0,
              },
              {
                name: 'Profesional',
                tag: 'Más popular',
                price: '$9,999',
                period: 'MXN pago único',
                desc: 'Sitio web completo + blog',
                features: ['Hasta 5 páginas', 'Integración redes sociales', 'Optimización SEO completa', 'Blog integrado', 'Formularios avanzados', 'Entrega en 10 días'],
                missing: [],
                cta: 'Hola,%20quiero%20el%20Plan%20Profesional',
                highlight: true,
                delay: 100,
              },
              {
                name: 'Premium',
                tag: null,
                price: '$499',
                period: 'MXN / mes (licencia)',
                desc: 'E-commerce o sistema POS',
                features: ['Gestión de inventario', 'Pasarelas de pago', 'Panel de administración', 'Capacitación incluida', 'Soporte prioritario'],
                missing: [],
                cta: 'Hola,%20quiero%20el%20Plan%20Premium',
                highlight: false,
                delay: 200,
              },
            ].map(({ name, tag, price, period, desc, features, missing, cta, highlight, delay }) => (
              <div
                key={name}
                data-aos="fade-up"
                data-aos-delay={delay}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  highlight
                    ? 'bg-gradient-to-b from-indigo-600/20 to-violet-600/10 border-2 border-indigo-500/50 shadow-xl shadow-indigo-500/10'
                    : 'bg-white/[0.03] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {tag && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      {tag}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">{name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{desc}</p>
                  <div className="mt-6 mb-8">
                    <span className="text-5xl font-extrabold text-white">{price}</span>
                    <span className="text-gray-400 text-sm ml-2">{period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                    {missing.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-600 line-through">
                        <svg className="w-5 h-5 text-gray-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`https://wa.me/529212295670?text=${cta}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-auto block text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${
                    highlight
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  Contratar plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENCIAS */}
      <section id="licencias" className="py-24 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Software</span>
            <h2 className="text-4xl font-bold text-white mt-3">Licencias para Sistemas</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">POS y E-commerce. Elige el modelo de pago que más te conviene.</p>
          </div>
          <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="100">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">Plan</th>
                  <th className="py-4 px-6 text-gray-400 font-medium">Mensual</th>
                  <th className="py-4 px-6 text-gray-400 font-medium">Anual</th>
                  <th className="py-4 px-6 text-gray-400 font-medium">Licencia permanente</th>
                  <th className="py-4 px-6 text-gray-400 font-medium">Características</th>
                  <th className="py-4 px-6" />
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    name: 'Básico',
                    monthly: '$499 MXN',
                    yearly: '$5,388 MXN',
                    permanent: '$9,999 MXN',
                    features: ['1 usuario', 'Inventario simple'],
                    missing: ['Reportes avanzados', 'Integraciones externas'],
                    cta: 'Básico%20de%20Licencia',
                    highlight: false,
                  },
                  {
                    name: 'Pro',
                    monthly: '$999 MXN',
                    yearly: '$10,788 MXN',
                    permanent: '$18,999 MXN',
                    features: ['Multiusuario', 'Reportes avanzados', 'Soporte prioritario', 'Integración con dispositivos'],
                    missing: [],
                    cta: 'Pro%20de%20Licencia',
                    highlight: true,
                  },
                  {
                    name: 'Empresarial',
                    monthly: 'A cotizar',
                    yearly: 'A cotizar',
                    permanent: 'A cotizar',
                    features: ['Personalización total', 'Integraciones a medida', 'Soporte 24/7 dedicado'],
                    missing: [],
                    cta: 'Empresarial%20de%20Licencia',
                    highlight: false,
                  },
                ].map(({ name, monthly, yearly, permanent, features, missing, cta, highlight }) => (
                  <tr key={name} className={`transition-colors ${highlight ? 'bg-indigo-500/5' : 'hover:bg-white/[0.02]'}`}>
                    <td className="py-5 px-6">
                      <span className={`font-bold text-base ${highlight ? 'text-indigo-400' : 'text-white'}`}>{name}</span>
                      {highlight && <span className="ml-2 text-xs bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full">Popular</span>}
                    </td>
                    <td className="py-5 px-6 text-center font-semibold text-white">{monthly}</td>
                    <td className="py-5 px-6 text-center font-semibold text-white">{yearly}</td>
                    <td className="py-5 px-6 text-center font-semibold text-white">{permanent}</td>
                    <td className="py-5 px-6">
                      <ul className="space-y-1">
                        {features.map(f => (
                          <li key={f} className="flex items-center gap-2 text-gray-300">
                            <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                            {f}
                          </li>
                        ))}
                        {missing.map(f => (
                          <li key={f} className="flex items-center gap-2 text-gray-600">
                            <svg className="w-4 h-4 text-gray-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-5 px-6">
                      <a
                        href={`https://wa.me/529212295670?text=Hola,%20quiero%20el%20Plan%20${cta}`}
                        target="_blank"
                        rel="noreferrer"
                        className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                      >
                        Contratar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Portafolio</span>
            <h2 className="text-4xl font-bold text-white mt-3">Proyectos Destacados</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Algunos de los proyectos que hemos construido y que generan resultados reales.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: '/img/pos.png',
                tag: 'Sistema POS',
                title: 'Sistema POS',
                desc: 'Software de punto de venta con control de inventario, reportes en tiempo real y gestión multi-sucursal.',
                href: 'https://wa.me/529212295670?text=Hola,%20quiero%20acceso%20para%20probar%20el%20Sistema%20POS',
                linkText: 'Pedir acceso demo',
                delay: 0,
              },
              {
                img: '/img/refmex.png',
                tag: 'Landing Page',
                title: 'Auto Refacciones México',
                desc: 'Landing page para cotizaciones y captación de clientes para empresa de refacciones automotrices.',
                href: 'http://autorefaccionesmexico.com.mx/',
                linkText: 'Visitar sitio',
                delay: 100,
              },
              {
                img: '/img/tejer.png',
                tag: 'E-commerce',
                title: 'Tejer con Pandy',
                desc: 'Tienda en línea artesanal para venta de productos tejidos con carrito de compras y pagos integrados.',
                href: 'https://tejer-con-pandy.vercel.app/',
                linkText: 'Visitar sitio',
                delay: 200,
              },
            ].map(({ img, tag, title, desc, href, linkText, delay }) => (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-delay={delay}
                className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative overflow-hidden h-52 bg-gray-800">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed flex-1">{desc}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors group/link"
                  >
                    {linkText}
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6" data-aos="zoom-in">
          <div className="relative bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-12 text-center overflow-hidden shadow-2xl shadow-indigo-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">¿Listo para llevar tu negocio al siguiente nivel?</h2>
              <p className="mt-4 text-indigo-200 text-lg max-w-xl mx-auto">Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer.</p>
              <a
                href="https://wa.me/529212295670?text=Hola,%20quiero%20una%20consulta%20gratuita%20con%20HVJ%20Solutions"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-1 hover:shadow-xl"
              >
                Hablar con un experto →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Contacto</span>
              <h2 className="text-4xl font-bold text-white mt-3">Hablemos de tu proyecto</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Cuéntanos qué necesitas y te responderemos en menos de 24 horas. La consulta inicial es completamente gratuita.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  {
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.93 7.93 0 0 0 8 0C3.582 0 0 3.582 0 8a7.95 7.95 0 0 0 1.175 4.165L0 16l3.973-1.06A7.948 7.948 0 0 0 8 16c4.418 0 8-3.582 8-8a7.93 7.93 0 0 0-2.399-5.674Z"/></svg>,
                    label: 'WhatsApp',
                    value: '+52 921 229 5670',
                    color: 'text-green-400',
                    bg: 'bg-green-500/10 border-green-500/20',
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                    label: 'Correo',
                    value: 'jesushv875@icloud.com',
                    color: 'text-indigo-400',
                    bg: 'bg-indigo-500/10 border-indigo-500/20',
                  },
                ].map(({ icon, label, value, color, bg }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${bg} border rounded-xl flex items-center justify-center ${color}`}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</div>
                      <div className="text-white font-semibold mt-0.5">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nombre completo</label>
                  <input
                    name="nombre"
                    placeholder="Juan García"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Correo electrónico</label>
                  <input
                    name="correo"
                    type="email"
                    placeholder="juan@empresa.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Cuéntanos tu proyecto</label>
                  <textarea
                    name="mensaje"
                    placeholder="Necesito un sitio web para mi negocio de..."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 rounded-xl h-36 resize-none focus:outline-none focus:border-indigo-500 focus:bg-white/[0.07] transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.93 7.93 0 0 0 8 0C3.582 0 0 3.582 0 8a7.95 7.95 0 0 0 1.175 4.165L0 16l3.973-1.06A7.948 7.948 0 0 0 8 16c4.418 0 8-3.582 8-8a7.93 7.93 0 0 0-2.399-5.674Z"/></svg>
                  Enviar por WhatsApp
                </button>
                <p className="text-xs text-gray-600 text-center">Tu mensaje se enviará directamente a nuestro WhatsApp</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-black text-white text-lg">
                HV
              </div>
              <span className="text-lg font-bold text-white">HVJ <span className="text-indigo-400">Solutions</span></span>
            </div>
            <p className="text-gray-500 text-sm">© 2025 HVJ Solutions. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#servicios" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Servicios</a>
              <a href="#planes" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Planes</a>
              <a href="#contacto" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/529212295670?text=Hola,%20quiero%20una%20cotización%20con%20HVJ%20Solutions"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="whatsapp-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.93 7.93 0 0 0 8 0C3.582 0 0 3.582 0 8a7.95 7.95 0 0 0 1.175 4.165L0 16l3.973-1.06A7.948 7.948 0 0 0 8 16c4.418 0 8-3.582 8-8a7.93 7.93 0 0 0-2.399-5.674ZM8 14.5a6.48 6.48 0 0 1-3.356-.94l-.24-.144-2.356.63.63-2.356-.144-.24A6.48 6.48 0 0 1 1.5 8c0-3.59 2.91-6.5 6.5-6.5S14.5 4.41 14.5 8 11.59 14.5 8 14.5Zm3.61-4.762c-.196-.098-1.164-.574-1.345-.639-.18-.065-.311-.098-.442.098s-.506.639-.62.77c-.115.13-.229.147-.425.049-.196-.098-.827-.305-1.576-.974a5.934 5.934 0 0 1-1.1-1.356c-.115-.196-.012-.302.086-.4.088-.088.196-.229.294-.344.098-.115.13-.196.196-.327.065-.13.033-.245-.016-.344-.049-.098-.442-1.07-.605-1.464-.16-.385-.323-.333-.442-.339-.114-.006-.245-.007-.377-.007a.724.724 0 0 0-.525.245c-.18.196-.688.672-.688 1.64s.704 1.905.801 2.037c.098.13 1.385 2.115 3.362 2.963.471.203.84.325 1.127.416.474.151.906.13 1.248.079.38-.057 1.164-.475 1.329-.934.164-.459.164-.852.115-.934-.049-.081-.18-.13-.377-.229Z" />
        </svg>
      </a>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .whatsapp-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: #25D366;
          color: white;
          padding: 16px;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          transition: all 0.3s ease;
          z-index: 50;
        }
        .whatsapp-btn:hover {
          background: #1ebe5d;
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(37,211,102,0.5);
        }
        .whatsapp-btn::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.4);
          animation: pulse-ring 2s ease-out infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </main>
  )
}
