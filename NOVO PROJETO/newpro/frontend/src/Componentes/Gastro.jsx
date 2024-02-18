import React, { useState } from 'react';

const Gastro = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerTicket = 20;

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
        <p><strong>Descrição:</strong> Um evento de Feira de Gastronomia é uma reunião que reúne uma variedade de expositores e vendedores de alimentos e bebidas, oferecendo aos visitantes uma ampla gama de opções culinárias para desfrutar. Geralmente realizado em espaços ao ar livre ou em centros de convenções, esse tipo de evento destaca a diversidade da culinária local, regional ou internacional, proporcionando aos participantes a oportunidade de experimentar pratos tradicionais, especialidades artesanais e novas tendências gastronômicas. Além da comida, as feiras de gastronomia frequentemente incluem atividades como demonstrações culinárias ao vivo, workshops, competições de chefs e música ao vivo, criando um ambiente animado e convidativo para os amantes da gastronomia explorarem, experimentarem e se deliciarem com uma variedade de sabores e aromas.</p>
          
        <p><strong>Horário:</strong> 22 de abril de 2024, às 19:00</p>
        <div style={{ textAlign: "center" }}>
          <p><strong>Local:</strong> Praça </p>
          <p><strong>Preço por ingresso:</strong> R$ {pricePerTicket.toFixed(2)}</p>
          <p><strong>Ingressos disponíveis:</strong> 12</p>
          <form>
            <label htmlFor="quantity"><strong>Quantidade de Ingressos:</strong></label><br></br>
            <input type="number" id="quantity" name="quantity" min="1" max="12" value={quantity} onChange={handleQuantityChange} />
            <p><strong>Total:</strong> R$ {calcularPrecoTotal().toFixed(2)}</p>
            <button type="submit">Comprar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Gastro;
