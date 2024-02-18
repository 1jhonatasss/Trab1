import { useState, useEffect } from "react";
import { Login } from "../Componentes/SidebarStyles";



const customStyles = {
  container: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center-line", 
    minHeight: "40vh", 
    marginTop: "-612px",
  },
card: {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "10px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", 
},
};

function Editar() {
  const [descricao, setDescricao] = useState("");
  const [observacao, setObservacao] = useState("");
  const [ativo, setAtivo] = useState(false);
  const isFormValid = descricao.length <= 10 && observacao.length <= 15;
  const [conclusao, setConclusao] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Acessar");

  const handleDescricaoChange = (e) => {
    setDescricao(e.target.value);
  };

  const handleObservacaoChange = (e) => {
    setObservacao(e.target.value);
  };

  const handleAtivoChange = (e) => {
    setAtivo(e.target.checked);
  };



  const handleGravarClick = () => {
    if (isLoading) return;

    if (isFormValid) {
      setIsLoading(true);
      setButtonText("Acessando.");
      setTimeout(() => {
        setConclusao('Esqueceu a senha?');
        setIsLoading(false);
      }, 2000);
    } else {
      setConclusao('NÃO CONCLUÍDO');
    }
  }

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setButtonText((prevText) => {
          if (prevText === "Gravar...") {
            return "Gravar";
          } else {
            return prevText + ".";
          }
        });
      }, 600); 

      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoading]);

  return (
    <div style={customStyles.container}>
      <div style={customStyles.card}>

        <h3 style={customStyles.heading}>OPSS... PARECE QUE VOCE CAIU!</h3>
        <br></br><div style={Login}>Refaça o seu Login</div>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">
            USUÁRIO
          </label>
          <input
            type="text"
            id="descricao"
            onChange={handleDescricaoChange}
            value={descricao}
            style={customStyles.input}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="observacao" className="form-label">
            SENHA
          </label>
          <input
            type="text"
            value={observacao}
            onChange={handleObservacaoChange}
            id="observacao"
            style={customStyles.input}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="ativo"
            checked={ativo}
            onChange={handleAtivoChange}
          />
          <label className="form-check-label" htmlFor="ativo">
            CONCORDO COM OS TERMOS
          </label>
        </div>
        <button
          onClick={handleGravarClick}
          className="btn btn-primary"
          style={customStyles.button}
          disabled={!isFormValid || isLoading}
        >
          {buttonText}
        </button>
        <p>{conclusao}</p>
      </div>
    </div>
  );
}

export default Editar;