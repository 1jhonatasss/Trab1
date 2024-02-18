import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Evento = ({ nome, data, local, preco, linkDetalhes }) => {
  return (
    <div className="evento">
      <h3>{nome}</h3>
      <p>Data: {data}</p>
      <p>Local: {local}</p>
      <p>Preço: {preco}</p>
      <Link to={linkDetalhes}>
        <p>Ver Detalhes</p>
      </Link>
    </div>
  );
};

const ListaEventos = ({ eventos }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
      {eventos.map((evento, index) => (
        <Evento
          key={index}
          nome={evento.nome}
          data={evento.data}
          local={evento.local}
          preco={evento.preco}
          linkDetalhes={evento.linkDetalhes} 
        />
      ))}
    </div>
  );
};

const Eventos = () => {

  const eventos = [
    { nome: 'Conferência de Tecnologia', data: '15/03/2024', local: 'Centro de Convenções', preco: 'R$50,00', linkDetalhes: '/Tecnologia' },
    { nome: 'Feira de Gastronomia', data: '22/04/2024', local: 'Praça Central', preco: 'R$20,00', linkDetalhes: '/Gastro' },
    { nome: 'Workshop de Fotografia', data: '10/05/2024', local: 'Estúdio Fotográfico', preco: 'R$30,00', linkDetalhes: '/Work' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginTop: '-500px' }}>Lista de Eventos Disponíveis</h1>
      <ListaEventos eventos={eventos} />
    </div>
  );
};

export default Eventos;
