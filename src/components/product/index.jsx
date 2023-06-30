import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/index.css";

function Product() {
  const [nome, setNome] = useState();
  const [valor, setValor] = useState();
  const [aromas, setAromas] = useState();
  const [cores, setCores] = useState();
  const [imagem, setImagem] = useState();

  const location = useLocation();

  useEffect(() => {
    setNome(location.state.produto.nome);
    setValor(location.state.produto.valor);
    setAromas(location.state.produto.aromas);
    setCores(location.state.produto.cores);
    setImagem(location.state.produto.imagem);
  }, []);

  console.log(location.state.produto.nome);
  return (
    <section id="product" className="bg-white py-5 text-dark">
      <div className="container">
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 text-lg-left text-center">
            <h1 className="pb-lg-5 pb-2">{nome}</h1>
            <p><strong>Valor</strong>: {valor}</p>
            {aromas ? <p><strong>Aromas disponíveis</strong>: {aromas}</p> : <></>}

            {cores ? <p><strong>Cores disponíveis</strong>: {cores}</p> : <></>}

            <a href={`https://api.whatsapp.com/send?phone=555185130195&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20vela:%20${nome}`} target="_blank"><button className="btn btn-dark-blue mt-lg-4 mt-2 mb-lg-0 mb-5 py-2 px-3">Mais informações sobre a vela</button></a>
          </div>
          <div className="col-lg-6">
            <div
              className="produto"
              href={imagem}
              data-fancybox
              style={{ backgroundImage: `url(${imagem})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
