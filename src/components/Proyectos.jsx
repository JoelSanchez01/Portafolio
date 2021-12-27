import "../assets/styles/Proyectos.css";
import Proyecto from "./Proyecto";
import datos from "../datos.json";
const Proyectos = () => {
  return (
    <div className="Proyectos">
      {datos.datos.map((dato) => (
        <Proyecto
          key={dato.id}
          foto={dato.foto}
          titulo={dato.titulo}
          descripcion={dato.descripcion}
          enlace={dato.enlace}
        />
      ))}
    </div>
  );
};

export default Proyectos;
