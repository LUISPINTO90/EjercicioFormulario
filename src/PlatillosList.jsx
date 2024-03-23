import React from "react";
import Platillo from "./Platillo";

function PlatillosList({ platillos, eliminarPlatillo }) {
  return (
    <div>
      <h2>Listado de Platillos</h2>
      {platillos.map((platillo) => (
        <Platillo
          key={platillo.id}
          platillo={platillo}
          eliminarPlatillo={eliminarPlatillo}
        />
      ))}
    </div>
  );
}

export default PlatillosList;
