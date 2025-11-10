'use client';

const ColorGallery = () => {
  return (
    <section className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" style={{color: '#B8860B'}}>
          Galería de Colores de Flequillos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Negro Nº 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Butterfly Welf/Negro Nº1.jpg"
              alt="Negro Nº 1"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-lg font-semibold text-center mt-4" style={{color: '#B8860B'}}>Negro Nº 1</h3>
          </div>

          {/* Negro Nº 1B */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Butterfly Welf/Negro Nº1B.jpg"
              alt="Negro Nº 1B"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-lg font-semibold text-center mt-4" style={{color: '#B8860B'}}>Negro Nº 1B</h3>
          </div>

          {/* Castaño Nº 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Butterfly Welf/Castano Nº2.jpg"
              alt="Castaño Nº 2"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-lg font-semibold text-center mt-4" style={{color: '#B8860B'}}>Castaño Nº 2</h3>
          </div>

          {/* Castaño Nº 4 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Butterfly Welf/Castano Nº4.jpg"
              alt="Castaño Nº 4"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-lg font-semibold text-center mt-4" style={{color: '#B8860B'}}>Castaño Nº 4</h3>
          </div>

          {/* Rubio Extraclaro Nº 60 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Butterfly Welf/Rubio Extraclaro Nº 60.jpg"
              alt="Rubio Extraclaro Nº 60"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-lg font-semibold text-center mt-4" style={{color: '#B8860B'}}>Rubio Extraclaro Nº 60</h3>
          </div>

          {/* Rubio Claro Nº 613 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Butterfly Welf/Rubio Nº613.jpg"
              alt="Rubio Claro Nº 613"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-lg font-semibold text-center mt-4" style={{color: '#B8860B'}}>Rubio Claro Nº 613</h3>
          </div>

          {/* Rubio Mechado Nº 60-8 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Butterfly Welf/Rubio mechado Nº60-8.jpg"
              alt="Rubio Mechado Nº 60-8"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-lg font-semibold text-center mt-4" style={{color: '#B8860B'}}>Rubio Mechado Nº 60-8</h3>
          </div>

          {/* Colores Personalizados */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Butterfly Welf/Colores Personalizados.jpg"
              alt="Colores Personalizados"
              className="w-40 h-40 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <h3 className="text-lg font-semibold text-center mt-4" style={{color: '#B8860B'}}>Colores Personalizados</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorGallery;