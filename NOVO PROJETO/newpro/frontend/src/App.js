
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Gastro from './Componentes/Gastro.jsx';
import React from 'react';


import {
  containerStyle,
  veStyle,
  dotStyle,
  sidenavStyle,
  linkStyle,
  subtitleStyle,
  greenBackground,
  iconStyle,
} from './Componentes/SidebarStyles.jsx';
import Editar from './Form/Editar.jsx';
import Eventos from './Componentes/Eventos.jsx';
import Iniciar from './Componentes/Iniciar.jsx';
import Work from './Componentes/Work.jsx';
import Tecnologia from './Componentes/Tecnologia.jsx';

const Sidebar = () => {
  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = 'green';
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = '';
  };

  return (
    <div style={containerStyle}>
      <div style={veStyle}>
       <br></br> EVENTOS <br></br>UNOESTE<span style={dotStyle}>.</span>
      </div>

      <div style={subtitleStyle}>Painel de Administração</div>

      <BrowserRouter>
        <ul className="sidenav" style={sidenavStyle}>
          <li>
            <Link
              to="/iniciar"
              style={{
                ...linkStyle,
                ...greenBackground,
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <i className="bi bi-house-door" style={iconStyle}></i> Iniciar
            </Link>
          </li>

          <li>
            <Link
              to="/Eventos"
              style={{ ...linkStyle, display: 'flex', alignItems: 'center' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <i className="bi bi-clipboard2" style={iconStyle}></i> Eventos
            </Link>
          </li>

        

          

        


         
        </ul>

        <div style={subtitleStyle}>
          <br></br>        <br></br>        <br></br>
          Eventos Admin Painel<br></br>
          2024 Todos os direitos reservados<br />
          <br></br><br/>
          Feito por 💚 Jhonatas Araujo de Jesus
        </div>

        <Routes>
          <Route path="/Tecnologia" element={<Tecnologia/>} />
         
          <Route path="/Gastro" element={<Gastro Gastro={Gastro}></Gastro>} />
          <Route path="/editar" element={<Editar Editar={Editar}></Editar>} />
          <Route path="/Eventos" element={<Eventos Eventos={Eventos}></Eventos>} />
          <Route path="/iniciar" element={<Iniciar Iniciar={Iniciar}></Iniciar>} />
          <Route path="/Work" element={<Work Work={Work}></Work>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Sidebar;
