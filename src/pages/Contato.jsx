import LinkIcon from '../components/LinkIcon';
import { colors } from '../utils/colors';

const container = {
  display: 'flex',
  backgroundColor: colors.default_bg,
  flexDirection: 'column',
  alignItems: 'center',
  padding: 30,
}

const img = {
  borderRadius: 100,
  margin: 10,
  width: 200,
}

const span = {
  color: 'white',
  width: 200,
  margin: 10,
}

const divIcons = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

export default function Contato() {
  return (
    <div style={container}>
      <h2 style={{ color: 'white' }}>Tenha um contato direto com o idealizador do projeto!</h2>
      <img src='./eu.jpg' style={img} />
      <span style={span}><strong>Marcell Dactes</strong> Desenvolvedor Full-stack apaixonado por tecnologia. Monitor na Unijorge dando diversas palestras de desenvolvimento web a desenvolvimento de APIs. Inspirado em melhorar o mundo com suas ideias.</span>
      <div style={divIcons}>
        <LinkIcon icon='github' />
        <LinkIcon icon='linkedin' />
        <LinkIcon icon='email' />
      </div>
    </div>
  )
}
