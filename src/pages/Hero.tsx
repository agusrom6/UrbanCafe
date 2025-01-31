
import { Coffee } from 'lucide-react';


const Hero = () => {
  return (
    <header className="relative h-screen">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
        alt="Cafeteria Interior"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2 text-white">
        <Coffee className="w-8 h-8" />
        <span className="text-xl font-bold">Urban Café</span>
      </div>
      <div className="hidden md:flex space-x-8 text-white">
        <a href="#menu" className="hover:text-yellow-300 transition">Menú</a>
        <a href="#specials" className="hover:text-yellow-300 transition">Especialidades</a>
        <a href="#about" className="hover:text-yellow-300 transition">Nosotros</a>
        <a href="#contact" className="hover:text-yellow-300 transition">Contacto</a>
      </div>
    </nav>

    <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
      <div className="text-white max-w-2xl">
        <h1 className="text-6xl font-bold mb-6">Alimentos frescos, ideas frescas</h1>
        <p className="text-xl mb-8">Disfrute de deliciosas comidas caseras en un ambiente cálido y acogedor.</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg text-lg font-semibold transition">Ver menú</button>
      </div>
    </div>
  </header>
  )
}

export default Hero