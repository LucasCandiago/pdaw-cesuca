import "./style/style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../img/products/1.jpeg";
import img2 from "../../img/products/2.jpeg";
import img3 from "../../img/products/3.jpeg";
import img4 from "../../img/products/4.jpeg";

function Products() {
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
            <div className="item px-2">
              <div
                className="card"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
            </div>

            <div className="item px-2">
              <div
                className="card py-5"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
            </div>

            <div className="item px-2">
              <div
                className="card py-5"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
            </div>

            <div className="item px-2">
              <div
                className="card py-5"
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
            </div>

            <div className="item px-2">
              <div
                className="card py-5"
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Products;
