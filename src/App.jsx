import React, { useState } from 'react';
import PlatillosList from './PlatillosList';
import PlatilloForm from './PlatilloForm';
import './App.css';

function App() {
  const [platillos, setPlatillos] = useState([]);

  const agregarPlatillo = (nuevoPlatillo) => {
    setPlatillos([...platillos, nuevoPlatillo]);
  };

  const eliminarPlatillo = (id) => {
    setPlatillos(platillos.filter(platillo => platillo.id !== id));
  };

  return (
    <div>
      <h1>CRUD de Platillos</h1>
      <PlatillosList platillos={platillos} eliminarPlatillo={eliminarPlatillo} />
      <PlatilloForm agregarPlatillo={agregarPlatillo} />
    </div>
  );
}

export default App;
