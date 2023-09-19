import background from '../assets/bg.jpg';

import { colors } from '../utils/colors';
import DefaultButton from './DefaultButton';

const container = {
  backgroundImage: `url(${background})`,
  height: 'auto',
  padding: 300,
  backgroundSize: 'cover'
}

export default function BgImg() {
  return (
    <div style={container}>
      <div style={{ backgroundColor: colors.semi_transparent_red }}>
        <h1>Aplicativos Para Celular, Para Computador e Sites de ponta, Com o Melhor Suporte do Mercado Atual.</h1>
        <h3>Sua Empresa Está Fora Da Web? Deixe de Perder Dinheiro O Mais Rápido Possível e Junte-se a Nós!</h3>
      </div>
      <DefaultButton to='/orcamentos' text='Faça um Orçamento!' />
    </div>
  )
}