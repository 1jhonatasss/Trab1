import React from 'react';


const iniciarStyle = {
  marginTop: '-612px',
};

const clinicaVeterinariaStyle = {
  color: '#3CB371',
  fontFamily: 'Arial, Helvetica, sans-serif',
};

const textoAbaixoStyle = {
  fontFamily: 'Arial, sans-serif',
};

const Iniciar = () => {
  return (
    <div style={iniciarStyle}>
      <header>
        <br></br><br></br>
        <h1 style={clinicaVeterinariaStyle}>ENTRETENIMENTO</h1>
        <p style={textoAbaixoStyle}>Seu melhor EVENTO da cidade!</p>
      </header>

      <img src="dog.png" alt="cachorro" className="imagem-com-margin" style={{ width: '274px' }} />
    </div>
  );
};

export default Iniciar;
