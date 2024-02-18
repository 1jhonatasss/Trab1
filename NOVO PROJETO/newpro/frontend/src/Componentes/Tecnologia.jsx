import React, { useState } from 'react';

const Tecnologia = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 50;

  const calcularPrecoTotal = () => {
    return quantity * pricePerTicket;
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "-500px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", border: "2px solid #ccc", padding: "20px", borderRadius: "10px" }}>
        <h1>Conferência de Tecnologia</h1><br></br>
        <p><strong>Descrição:</strong> A Conferência de Tecnologia é um evento que reúne profissionais, acadêmicos e entusiastas para discutir avanços, tendências e desafios na área da tecnologia. Inclui palestras, painéis, workshops e oportunidades de networking, proporcionando insights valiosos sobre inovações e permitindo colaborações futuras. Além disso, essas conferências abordam questões éticas e sociais relacionadas ao desenvolvimento tecnológico. Em suma, são essenciais para promover o progresso e a inovação no campo da tecnologia.</p>
          
        <p><strong>Horário:</strong> 13 de março de 2024, às 19:00</p>
        <div style={{ textAlign: "center" }}>
          <p><strong>Local:</strong> Centro de Convenções</p>
          <p><strong>Preço por ingresso:</strong> R$ {pricePerTicket.toFixed(2)}</p>
          <p><strong>Ingressos disponíveis:</strong> 3</p>
          <form>
            <label htmlFor="quantity"><strong>Quantidade de Ingressos:</strong></label><br></br>
            <input type="number" id="quantity" name="quantity" min="1" max="3" value={quantity} onChange={handleQuantityChange} />
            <p><strong>Total:</strong> R$ {calcularPrecoTotal().toFixed(2)}</p>
            <button type="submit">Comprar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tecnologia;
