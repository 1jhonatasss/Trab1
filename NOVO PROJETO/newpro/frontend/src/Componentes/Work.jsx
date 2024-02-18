import React, { useState } from 'react';

const Work = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 30;

  const calcularPrecoTotal = () => {
    return quantity * pricePerTicket;
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "-500px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", border: "2px solid #ccc", padding: "20px", borderRadius: "10px" }}>
        <h1>Feira de Gastronomia</h1><br></br>
        <p><strong>Descrição:</strong> Um workshop de fotografia é um evento que reúne entusiastas e profissionais da fotografia para aprender e aprimorar suas habilidades nesta arte visual. Durante o workshop, os participantes têm a oportunidade de receber orientação prática, dicas e técnicas de fotografia, além de explorar diferentes estilos, equipamentos e métodos de edição. Os workshops podem abranger uma variedade de tópicos, desde fundamentos básicos da fotografia, como composição e exposição, até áreas mais especializadas, como fotografia de retrato, paisagem, macrofotografia, fotografia de eventos ou fotografia de rua. É uma oportunidade valiosa para os participantes expandirem seu conhecimento e criarem conexões com outros entusiastas da fotografia.</p>
          
        <p><strong>Horário:</strong> 10 de maio de 2024, às 13:00</p>
        <div style={{ textAlign: "center" }}>
          <p><strong>Local:</strong> Estúdio Fotográfico</p>
          <p><strong>Preço por ingresso:</strong> R$ {pricePerTicket.toFixed(2)}</p>
          <p><strong>Ingressos disponíveis:</strong> 2</p>
          <form>
            <label htmlFor="quantity"><strong>Quantidade de Ingressos:</strong></label><br></br>
            <input type="number" id="quantity" name="quantity" min="1" max="2" value={quantity} onChange={handleQuantityChange} />
            <p><strong>Total:</strong> R$ {calcularPrecoTotal().toFixed(2)}</p>
            <button type="submit">Comprar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Work;
