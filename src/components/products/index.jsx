import "./style/style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router-dom";
import { products } from "../../mocks/products";

function Products() {
  const navigate = useNavigate();

  function renderProduct(product) {
    navigate("/vela", { state: { produto: product } });
  }

  const produtos = products.filter(produto => produto.ativo);

  return (
    <section id="products">
      <div className="container text-center">
        <h2 className="tittle py-5">PRODUTOS</h2>

        <div className="content py-5">
          <OwlCarousel
            className="owl-theme"
            items="4"
            autoplay
            nav
            dots={false}
            navText={[
              "<i class='fa-solid fa-chevron-left'></i>",
              "<i class='fa-solid fa-chevron-right'></i>",
            ]}
            responsiveClass
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1000: {
                items: 4,
              },
            }}
          >
            {produtos.map((product) => (
              <div className="item px-2" onClick={() => renderProduct(product)}>
                <div
                  className="card"
                  style={{ backgroundImage: `url(${product.imagem})` }}
                ></div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Products;
