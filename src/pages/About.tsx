import {  Award, Users } from 'lucide-react';


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Nuestra historia</h2>
          <p className="text-gray-600 mb-6">
          Desde 1995, Urban Bites sirve comidas caseras deliciosas elaboradas con los ingredientes más frescos. Nuestro compromiso con la calidad y el servicio nos ha convertido en una parte querida de la comunidad.          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Award className="w-8 h-8" />, title: '25+ años', desc: 'De experencia' },
              { icon: <Users className="w-8 h-8" />, title: '1000+', desc: 'Clientes felices todos los días' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-yellow-500 flex justify-center mb-2">{stat.icon}</div>
                <h4 className="font-bold text-xl">{stat.title}</h4>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
            alt="Our Kitchen"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default About