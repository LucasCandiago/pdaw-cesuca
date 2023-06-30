import logo from "../../img/logo-footer.png";
import "./style/style.css";

function Footer() {
  return (
    <footer id="footer" className="py-5">
      <div className="container">
        <div className="row m-0 align-items-center justify-content-between">
          <div className="col-lg-5">
            <img src={logo} alt="" className="w-100" />
          </div>
          <div className="col-lg-4 py-lg-0 py-4">
            <h2 className="pb-3">ENTRE EM CONTATO</h2>
            <a href="https://api.whatsapp.com/send?phone=555185130195&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20suas%20velas!" target="_blank">
              <p className="d-flex align-items-center">
                <i class="fa-brands fa-whatsapp icon pr-2"></i> (51) 98513-0195
              </p>
            </a>
            <a href="https://instagram.com/atelie.rei" target="_blank">
              <p className="d-flex align-items-center">
                <i class="fa-brands fa-instagram icon pr-2"></i> atelie.rei
              </p>
            </a>
            <a href="https://www.facebook.com/atelie.rei" target="_blank">
              <p className="d-flex align-items-center">
                <i class="fa-brands fa-facebook icon pr-2"></i> Ateliê Rei
              </p>
            </a>
            <a href="maito:atelie.rei28@gmail.com">
              <p className="d-flex align-items-center">
                <i class="fa-regular fa-envelope icon pr-2"></i>{" "}
                atelie.rei28@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
