import "../assets/styles/Sobremi.css";
import foto from "../assets/images/foto1.jpg";

import TypeWriterEffect from "react-typewriter-effect";
import platzi from "../assets/images/platzi.png";
const Sobremi = () => {
  return (
    <div className="Sobremi">
      <div className="imagen">
        <img src={foto} alt="" />
      </div>
      <div className="texto">
        <div className="texto__title">
          <h1>Joel Sanchez</h1>
          <h2>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Noto Sans Display",
                fontWeight: 400,
                fontSize: "2.2rem",
              }}
              startDelay={1000}
              cursorColor="var(--main-white)"
              multiText={[
                "FrontEnd Developer",
                "Developer Junior",
                "Tecnico en Programacion",
                "Estudiante de Ingenieria En Sistemas",
                "FrontEnd Developer",
              ]}
              multiTextDelay={2000}
              typeSpeed={100}
              hideCursorAfterText={true}
            />
          </h2>
        </div>
        <div className="texto__descripcion">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            mollitia fugit ut rerum recusandae, eveniet in temporibus
            exercitationem velit porro officia tempora quo dolores cum repellat
            architecto ratione aspernatur unde?
          </p>
        </div>
        <div className="texto__redes">
          Encuentrame:
          <ul>
            <li>
              <a id="facebook" href="" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="" id="twitter" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" id="linkedin" title="Linkedin y Certificados">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:joeleduardosanchezherrera@gmail.com"
                id="whatsapp"
                title="Enviame un Correo!"
              >
                <i className="far fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="texto__tecnologia">
          Tecnologias:
          <ul>
            <li title="React">
              <i className="fab fa-react"></i>
            </li>
            <li title="Html">
              <i className="fab fa-html5"></i>
            </li>
            <li title="Css">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li title="Bootstrap">
              <i className="fab fa-bootstrap"></i>
            </li>
            <li title="JavaScript">
              <i className="fab fa-js"></i>
            </li>
            <li title="Java">
              <i className="fab fa-java"></i>
            </li>
            <li title="Node.JS">
              <i className="fab fa-node-js"></i>
            </li>
            <li title="Figma">
              <i className="fab fa-figma"></i>
            </li>
            <li title="SQL">
              <i className="fas fa-database"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sobremi;
