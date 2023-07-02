import logo from "../../img/logo.png";
import style from "./style/style.css";
import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";

function Header() {
  $(document).ready(function () {
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 1) {
        $("#sp-header").addClass("menu-fixed");
      } else {
        $("#sp-header").removeClass("menu-fixed");
      }
    });
  });

  $(document).ready(function () {
    $(".menu-icon").click(function () {
      $(".menu").toggleClass("d-none");
    });
  });

  $(document).ready(function () {
    $(".menu-item").click(function () {
      $(".menu").addClass("d-none");
    });
  });

  return (
    <header id="header">
      <div className="text-center py-5">
        <h1 className="tittle m-0">Ateliê Rei</h1>
        <p className="subtittle m-0">velas artesanais</p>
        <img src={logo} alt="" className="logo" />
        <div id="sp-header" class="menu-fixed-out">
          <nav role="navigation" class="navbar" id="mainNav">
            <div class="navbar-nav m-auto w-100">
              <div className="menu-icon">
                <i class="fas fa-bars"></i>
              </div>
              <div class="menu m-auto d-none">
                <div className="links w-50 m-auto py-3">
                  <Link to="/" className="menu-item text-uppercase">
                    Home
                  </Link>
                  <Link
                    activeClass="active"
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="menu-item text-uppercase"
                  >
                    Produtos
                  </Link>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="menu-item text-uppercase"
                  >
                    Sobre o Ateliê
                  </Link>
                  <Link
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="menu-item text-uppercase"
                  >
                    Contato
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
