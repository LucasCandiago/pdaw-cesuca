import logo from "../../img/logo.png";
import style from "./style/style.css";

function Header() {
  return (
    <header id="header">
      <div className="text-center py-5">
        <h1 className="tittle m-0">Ateliê Rei</h1>
        <p className="subtittle m-0">velas artesanais</p>
        <img src={logo} alt="" className="logo" />
      </div>
    </header>
  );
}

export default Header;
