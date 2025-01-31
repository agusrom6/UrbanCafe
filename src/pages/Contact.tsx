import { Clock, Phone, Mail, MapPin,  } from 'lucide-react';


const Contact = () => {
  return (
    <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Visitanos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Horario</h3>
                  <p className="text-gray-600">Lun-Vie: 7AM-9PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Telefono</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">hello@urbancafe.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-gray-600">123 Calle cualquiera, BS AS, ARG </p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Tu Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <textarea
                placeholder="Tu mensaje"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              ></textarea>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition">Enviar</button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact