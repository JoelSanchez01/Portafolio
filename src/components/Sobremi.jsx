import "../assets/styles/Sobremi.css";
import foto from "../assets/images/foto1.jpg";

const Sobremi = () => {
  return (
    <div className="Sobremi">
      <div className="imagen">
        <img src={foto} alt="" />
      </div>
      <div className="texto">
        <div className="texto__title">
          <h1>
            Joel Sanchez<span>&#160;</span>
          </h1>
          <h2>FrontEnd Developer</h2>
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
              <a id="facebook" href="">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="" id="twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" id="linkedin">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="" id="whatsapp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="texto__tecnologia">
          Tecnologias:
          <ul>
            <li title="React">
              <i class="fab fa-react"></i>
            </li>
            <li title="Html">
              <i class="fab fa-html5"></i>
            </li>
            <li title="Css">
              <i class="fab fa-css3-alt"></i>
            </li>
            <li title="Bootstrap">
              <i class="fab fa-bootstrap"></i>
            </li>
            <li title="JavaScript">
              <i class="fab fa-js"></i>
            </li>
            <li title="Java">
              <i class="fab fa-java"></i>
            </li>
            <li title="Node.JS">
              <i class="fab fa-node-js"></i>
            </li>
            <li title="Figma">
              <i class="fab fa-figma"></i>
            </li>
            <li title="SQL">
              <i class="fas fa-database"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sobremi;
