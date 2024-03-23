import React, { useState } from "react";

function PlatilloForm({ agregarPlatillo }) {
  const [nuevoPlatillo, setNuevoPlatillo] = useState({
    id: Math.random().toString(36).substr(2, 9),
    comida: "",
    descripcion: "",
    acompaniantes: [],
    picor: "",
    num_personas: "",
    imagen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoPlatillo({ ...nuevoPlatillo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarPlatillo(nuevoPlatillo);
    setNuevoPlatillo({
      id: Math.random().toString(36).substr(2, 9),
      comida: "",
      descripcion: "",
      acompaniantes: [],
      picor: "",
      num_personas: "",
      imagen: "",
    });
  };

  return (
    <div>
      <h2>Agregar Platillo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comida"
          value={nuevoPlatillo.comida}
          onChange={handleChange}
          placeholder="Nombre del platillo"
          required
        />
        <textarea
          name="descripcion"
          value={nuevoPlatillo.descripcion}
          onChange={handleChange}
          placeholder="Descripción del platillo"
          required
        />
        {/* Resto de los campos (acompaniantes, picor, num_personas, imagen) */}
        <button type="submit">Guardar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
}

export default PlatilloForm;
