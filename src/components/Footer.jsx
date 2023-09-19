import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

const container = {
  backgroundColor: colors.default_bg,
  bottom: 0,
  marginTop: 20,
  paddingTop: 3,
  position: 'relative',
  width: '100%',
  color: 'white',
  fontSize: '15px',
  boxShadow: '-1px -5px 5px 0px rgba(0,0,0,0.75)',
}

export default function Footer() {
  return (
    <div style={container}>
      <Link to='/privacidade' style={{ color: 'white' }}>Política de Privacidade</Link>
      <p>Todos os direitos reservados - © 2023 - DacTI</p>
      <img src='./logo.png' style={{ marginBottom: -20 }} />
    </div>
  )
}