import type React from 'react';

const ColorTable: React.FC = () => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-3" style={{color: '#B8860B'}}>
        Colores:
      </h4>
      <div className="bg-transparent rounded-lg shadow-lg overflow-hidden border border-[#B8860B]/30">
        <div className="bg-[#B8860B] text-white">
          <div className="grid grid-cols-2 gap-0">
            <div className="px-4 py-3 text-left">
              <h5 className="font-medium">Tonos oscuros</h5>
            </div>
            <div className="px-4 py-3 text-left">
              <h5 className="font-medium">Tonos claros</h5>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 text-[#B8860B]">
          <div className="px-4 py-3">
            <ul className="space-y-1">
              <li>• Negro Nº 1</li>
              <li>• Castaño Nº 2</li>
              <li>• Castaño Nº 4</li>
            </ul>
          </div>
          <div className="px-4 py-3">
            <ul className="space-y-1">
              <li>• Rubio Nº 7</li>
              <li>• Rubio Nº 613</li>
              <li>• Color personalizado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorTable;