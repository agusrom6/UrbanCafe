
import { UtensilsCrossed} from 'lucide-react';

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Menú del día</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Desayuno', time: '7:00 AM - 11:00 AM', items: ['Huevos Benedict', 'Tostada Francesa', 'Avocado Toast', 'Burrito de desayuno'] },
              { title: 'Almuerzo', time: '11:30 AM - 3:00 PM', items: ['Ensalada de pollo a la parrilla', 'Tazón de quinua', 'Hamburguesa clásica', 'Tacos de pescado'] },
              { title: 'Cena', time: '5:00 PM - 9:00 PM', items: ['Filete con papas fritas', 'Salmon Teriyaki', 'Curry de verduras', 'Pasta Primavera'] }
            ].map((menu, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold mb-4">{menu.title}</h3>
                <p className="text-gray-600 mb-4">{menu.time}</p>
                <ul className="space-y-2">
                  {menu.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <UtensilsCrossed className="w-4 h-4 text-yellow-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Menu