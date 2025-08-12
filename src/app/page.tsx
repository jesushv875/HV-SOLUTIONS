'use client'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export default function Page() {
  useEffect(() => {
    (async () => {
      const AOS = (await import('aos')).default
      AOS.init({ duration: 1000, once: true })
    })()
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
    <main className="bg-gray-900 text-gray-200">
      {/* NAVBAR */}
      <header className="bg-gray-800 text-white py-4 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="https://dummyimage.com/60x60/4F46E5/FACC15.png&text=HV" alt="Logo HV Solutions" className="w-12 h-12 rounded-full border-2 border-yellow-400" />
            <h1 className="text-2xl font-bold text-yellow-400">HV Solutions</h1>
          </div>
          <nav className="space-x-6">
            <a href="#servicios" className="hover:text-yellow-400">Servicios</a>
            <a href="#porque" className="hover:text-yellow-400">¿Por qué elegirnos?</a>
            <a href="#planes" className="hover:text-yellow-400">Planes</a>
            <a href="#licencias" className="hover:text-yellow-400">Licencias</a>
            <a href="#proyectos" className="hover:text-yellow-400">Proyectos</a>
            <a href="#contacto" className="hover:text-yellow-400">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center" data-aos="fade-down">
          <h2 className="text-4xl md:text-6xl font-bold">Impulsa tu negocio con <span className="text-yellow-400">HV Solutions</span></h2>
          <p className="mt-6 text-lg md:text-xl text-gray-200">Desarrollo web, e-commerce, sistemas POS y marketing digital a tu medida.</p>
          <div className="mt-8">
            <a href="#contacto" className="btn-anim bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg">Solicita tu cotización</a>
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIRNOS? */}
      <section id="porque" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-yellow-400">¿Por qué elegir HV Solutions?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-800 shadow rounded-lg p-6 card-hover" data-aos="zoom-in">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Experiencia Comprobada</h3>
            <p>Más de 5 años desarrollando soluciones digitales para negocios de todos los tamaños.</p>
          </div>
          <div className="bg-gray-800 shadow rounded-lg p-6 card-hover" data-aos="zoom-in" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Soporte Personalizado</h3>
            <p>Te acompañamos durante todo el proceso, desde el diseño hasta el lanzamiento y mantenimiento.</p>
          </div>
          <div className="bg-gray-800 shadow rounded-lg p-6 card-hover" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Precios Flexibles</h3>
            <p>Planes mensuales, anuales o licencias permanentes para adaptarnos a tus necesidades.</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-yellow-400">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-800 shadow rounded-lg p-6 card-hover" data-aos="zoom-in">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Desarrollo de Sitios Web</h3>
            <p>Diseño y desarrollo de sitios web modernos, funcionales y adaptables a cualquier dispositivo.</p>
          </div>
          <div className="bg-gray-800 shadow rounded-lg p-6 card-hover" data-aos="zoom-in" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Landing Pages</h3>
            <p>Páginas diseñadas para captar clientes y aumentar tus conversiones rápidamente.</p>
          </div>
          <div className="bg-gray-800 shadow rounded-lg p-6 card-hover" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">E-commerce</h3>
            <p>Tiendas en línea profesionales con pasarelas de pago integradas y gestión de inventario.</p>
          </div>
          <div className="bg-gray-800 shadow rounded-lg p-6 card-hover" data-aos="zoom-in" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Sistema POS</h3>
            <p>Software de punto de venta adaptable a tu negocio, con reportes y control total.</p>
          </div>
          <div className="bg-gray-800 shadow rounded-lg p-6 card-hover" data-aos="zoom-in" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-3 text-indigo-400">Marketing Digital</h3>
            <p>Gestión de campañas publicitarias en Google Ads, Meta Ads y estrategias SEO.</p>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-yellow-400">Planes y Precios</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-900 shadow-lg rounded-lg p-8 text-center card-hover" data-aos="flip-left">
              <h3 className="text-xl font-bold text-indigo-400">Básico</h3>
              <p className="mt-4 text-gray-300">Landing page profesional</p>
              <p className="mt-4 text-4xl font-bold text-yellow-400">$4,999 MXN</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>1 página</li>
                <li>Diseño responsivo</li>
                <li>Formulario de contacto</li>
              </ul>
              <a href="https://wa.me/529212295670?text=Hola,%20quiero%20el%20Plan%20Básico" className="mt-6 block bg-yellow-400 text-gray-900 px-6 py-3 rounded hover:bg-yellow-500">Contratar</a>
            </div>
            <div className="bg-gray-900 shadow-lg rounded-lg p-8 text-center border-4 border-indigo-500 card-hover" data-aos="flip-left" data-aos-delay="100">
              <h3 className="text-xl font-bold text-indigo-400">Profesional</h3>
              <p className="mt-4 text-gray-300">Sitio web + blog</p>
              <p className="mt-4 text-4xl font-bold text-yellow-400">$9,999 MXN</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>Hasta 5 páginas</li>
                <li>Integración redes sociales</li>
                <li>Optimización SEO</li>
              </ul>
              <a href="https://wa.me/529212295670?text=Hola,%20quiero%20el%20Plan%20Profesional" className="mt-6 block bg-yellow-400 text-gray-900 px-6 py-3 rounded hover:bg-yellow-500">Contratar</a>
            </div>
            <div className="bg-gray-900 shadow-lg rounded-lg p-8 text-center card-hover" data-aos="flip-left" data-aos-delay="200">
              <h3 className="text-xl font-bold text-indigo-400">Premium</h3>
              <p className="mt-4 text-gray-300">E-commerce o sistema POS</p>
              <p className="mt-4 text-4xl font-bold text-yellow-400">$499 MXN</p>
              <p className="text-sm text-gray-400">(Plan básico con licencia mensual)</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>Gestión de inventario</li>
                <li>Pasarelas de pago</li>
                <li>Capacitación incluida</li>
              </ul>
              <a href="https://wa.me/529212295670?text=Hola,%20quiero%20el%20Plan%20Premium" className="mt-6 block bg-yellow-400 text-gray-900 px-6 py-3 rounded hover:bg-yellow-500">Contratar</a>
            </div>
          </div>
        </div>
      </section>

      {/* LICENCIAS */}
      <section id="licencias" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">Licencias para Sistemas (POS y E-commerce)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Plan</th>
                <th className="p-4">Mensual</th>
                <th className="p-4">Anual</th>
                <th className="p-4">Licencia Permanente</th>
                <th className="p-4">Características</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-bold">Básico</td>
                <td className="p-4">$499 MXN</td>
                <td className="p-4">$5,388 MXN</td>
                <td className="p-4">$9,999 MXN</td>
                <td className="p-4 text-sm">
                  <ul className="space-y-1">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>1 usuario</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Inventario simple</li>
                    <li className="flex items-center"><span className="text-red-500 mr-2">✘</span>Reportes avanzados</li>
                    <li className="flex items-center"><span className="text-red-500 mr-2">✘</span>Integraciones externas</li>
                  </ul>
                </td>
                <td className="p-4"><a href="https://wa.me/529212295670?text=Hola,%20quiero%20el%20Plan%20Básico%20de%20Licencia" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded">Contratar</a></td>
              </tr>
              <tr className="border-t bg-gray-700">
                <td className="p-4 font-bold">Pro</td>
                <td className="p-4">$999 MXN</td>
                <td className="p-4">$10,788 MXN</td>
                <td className="p-4">$18,999 MXN</td>
                <td className="p-4 text-sm">
                  <ul className="space-y-1">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Multiusuario</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Reportes avanzados</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Soporte prioritario</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Integración con dispositivos</li>
                  </ul>
                </td>
                <td className="p-4"><a href="https://wa.me/529212295670?text=Hola,%20quiero%20el%20Plan%20Pro%20de%20Licencia" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded">Contratar</a></td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-bold">Empresarial</td>
                <td className="p-4">A cotizar</td>
                <td className="p-4">A cotizar</td>
                <td className="p-4">A cotizar</td>
                <td className="p-4 text-sm">
                  <ul className="space-y-1">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Personalización total</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Integraciones a medida</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Soporte 24/7 dedicado</li>
                  </ul>
                </td>
                <td className="p-4"><a href="https://wa.me/529212295670?text=Hola,%20quiero%20el%20Plan%20Empresarial%20de%20Licencia" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded">Solicitar Cotización</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-yellow-400">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-gray-800 shadow rounded-lg overflow-hidden card-hover" data-aos="fade-up">
            <img src="/img/pos.png" className="w-full h-48 object-cover" alt="POS System" />
            <div className="p-6">
              <h3 className="font-bold text-xl text-yellow-400">Sistema POS</h3>
              <p className="mt-2 text-gray-300">Software de punto de venta con control de inventario y reportes.</p>
              <a href="https://wa.me/529212295670?text=Hola,%20quiero%20acceso%20para%20probar%20el%20Sistema%20POS" target="_blank" className="text-indigo-400 font-medium mt-4 block" rel="noreferrer">Pedir acceso</a>
            </div>
          </div>
          <div className="bg-gray-800 shadow rounded-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="100">
            <img src="/img/refmex.png" className="w-full h-48 object-cover" alt="Auto Refacciones" />
            <div className="p-6">
              <h3 className="font-bold text-xl text-yellow-400">Auto Refacciones</h3>
              <p className="mt-2 text-gray-300">Landing page para cotizaciones y contacto con clientes.</p>
              <a href="http://autorefaccionesmexico.com.mx/" target="_blank" className="text-indigo-400 font-medium mt-4 block" rel="noreferrer">Visitar sitio</a>
            </div>
          </div>
          <div className="bg-gray-800 shadow rounded-lg overflow-hidden card-hover" data-aos="fade-up" data-aos-delay="200">
            <img src="/img/tejer.png" className="w-full h-48 object-cover" alt="Tejer con Pandy" />
            <div className="p-6">
              <h3 className="font-bold text-xl text-yellow-400">Tejer con Pandy</h3>
              <p className="mt-2 text-gray-300">E-commerce artesanal para venta de productos tejidos.</p>
              <a href="https://tejer-con-pandy.vercel.app/" target="_blank" className="text-indigo-400 font-medium mt-4 block" rel="noreferrer">Visitar sitio</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-yellow-400">Solicita tu Cotización</h2>
        <p className="text-center text-gray-400 mt-4">Cuéntanos qué necesitas y te contactaremos lo antes posible.</p>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-8 bg-gray-800 shadow rounded-lg p-8 space-y-4">
          <input name="nombre" placeholder="Nombre" className="w-full border px-4 py-2 rounded bg-gray-900 text-white" required />
          <input name="correo" type="email" placeholder="Correo electrónico" className="w-full border px-4 py-2 rounded bg-gray-900 text-white" required />
          <textarea name="mensaje" placeholder="Cuéntanos tu proyecto" className="w-full border px-4 py-2 rounded h-32 bg-gray-900 text-white" required />
          <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded transition">Enviar</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-6 text-center flex flex-col items-center">
        <img src="/img/HV_Logo.png" alt="HV Solutions Logo" className="w-16 h-16 mb-2" />
        <p>© 2025 HV Solutions - Todos los derechos reservados</p>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/529212295670?text=Hola,%20quiero%20una%20cotización%20con%20HV%20Solutions"
        target="_blank"
        className="whatsapp-btn"
        rel="noreferrer"
      >
        <span className="sr-only">WhatsApp</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.93 7.93 0 0 0 8 0C3.582 0 0 3.582 0 8a7.95 7.95 0 0 0 1.175 4.165L0 16l3.973-1.06A7.948 7.948 0 0 0 8 16c4.418 0 8-3.582 8-8a7.93 7.93 0 0 0-2.399-5.674ZM8 14.5a6.48 6.48 0 0 1-3.356-.94l-.24-.144-2.356.63.63-2.356-.144-.24A6.48 6.48 0 0 1 1.5 8c0-3.59 2.91-6.5 6.5-6.5S14.5 4.41 14.5 8 11.59 14.5 8 14.5Zm3.61-4.762c-.196-.098-1.164-.574-1.345-.639-.18-.065-.311-.098-.442.098s-.506.639-.62.77c-.115.13-.229.147-.425.049-.196-.098-.827-.305-1.576-.974a5.934 5.934 0 0 1-1.1-1.356c-.115-.196-.012-.302.086-.4.088-.088.196-.229.294-.344.098-.115.13-.196.196-.327.065-.13.033-.245-.016-.344-.049-.098-.442-1.07-.605-1.464-.16-.385-.323-.333-.442-.339-.114-.006-.245-.007-.377-.007a.724.724 0 0 0-.525.245c-.18.196-.688.672-.688 1.64s.704 1.905.801 2.037c.098.13 1.385 2.115 3.362 2.963.471.203.84.325 1.127.416.474.151.906.13 1.248.079.38-.057 1.164-.475 1.329-.934.164-.459.164-.852.115-.934-.049-.081-.18-.13-.377-.229Z" />
        </svg>
      </a>

      {/* Estilos globales necesarios para efectos hover y botón de WhatsApp */}
      <style jsx global>{`
        .btn-anim:hover { transform: scale(1.05); }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
        .whatsapp-btn { position: fixed; bottom: 20px; right: 20px; background: #25D366; color: white; padding: 15px; border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: 0.3s; }
        .whatsapp-btn:hover { background: #1ebe5d; transform: scale(1.1); }
      `}</style>
    </main>
  )
}