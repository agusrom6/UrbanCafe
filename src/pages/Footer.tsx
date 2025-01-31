import { Coffee} from 'lucide-react';

 export const Footer = () => {
   return (
<footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="w-6 h-6" />
                <span className="font-bold">Urban café</span>
              </div>
              <p className="text-gray-400">Servimos comidas frescas y deliciosas todos los días.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
                <li><a href="#specials" className="hover:text-white transition">Especiales</a></li>
                <li><a href="#about" className="hover:text-white transition">Nosotros</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horarios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lunes - Viernes</li>
                <li>7:00 AM - 9:00 PM</li>
                <li>Sabado - Domingo</li>
                <li>8:00 AM - 10:00 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>hello@urbancafe.com</li>
                <li>123 Calle cualquiera</li>
                <li>Buenos Aires, Argentina </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy;  {new Date().getFullYear()} Urban  Café. Todos los derechos reservados. Diseñado por Agustina Romer</p>
          </div>
        </div>
      </footer>   )
 }
 