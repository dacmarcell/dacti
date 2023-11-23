import { Link } from "react-router-dom";
import Button from "./3dButton/Button";

import { colors } from "../utils/colors";

export default function Header() {
  const container = {
    height: "auto",
    width: "100%",
    backgroundColor: colors.default_bg,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "10px 10px 30px -20px black",
  };

  const style = {
    marginLeft: 200,
    fontSize: 15,
  };

  return (
    <div style={container}>
      <a href="/">
        <img src="./logo.png" />
        {/* <Button text="Nossos Serviços" /> */}
      </a>
      <Link style={style} to="/servicos">
        Nossos Serviços
      </Link>
      <Link style={style} to="/projetos">
        Nossos Projetos
      </Link>
      <Link style={style} to="/orcamentos">
        Orçamentos
      </Link>
      <Link style={style} to="/contato">
        Contato
      </Link>
    </div>
  );
}
