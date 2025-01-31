import { ChefHat, Leaf, Award, } from 'lucide-react';


function Specials() {
  return (
    <section id="specials" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Especialidades diarias</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: <ChefHat className="w-6 h-6" />, title: "Especial del chef", desc: 'Lubina a la plancha con verduras de temporada' },
                { icon: <Leaf className="w-6 h-6" />, title: 'Delicias vegetarianas', desc: 'Tazón de quinoa mediterránea con verduras asadas' },
                { icon: <Award className="w-6 h-6" />, title: 'Plato de autor', desc: 'Ternera Wellington casera con salsa de trufa' }
              ].map((special, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                  <div className="text-yellow-500">{special.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{special.title}</h3>
                    <p className="text-gray-600">{special.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
                alt="Special Dishes"
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Specials