import { useNavigate } from 'react-router-dom';

import background from '../assets/bg.jpg';

import { colors } from '../utils/colors';

export default function BgImg() {

  const navigateTo = useNavigate();

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      height: 'auto',
      padding: 300,
      backgroundSize: 'cover'
    }}>
      <div style={{ backgroundColor: colors.semi_transparent_red }}>
        <h1>Aplicativos Para Celular, Para Computador e Sites de ponta, Com o Melhor Suporte do Mercado Atual.</h1>
        <h3>Sua Empresa Está Fora Da Web? Deixe de Perder Dinheiro O Mais Rápido Possível e Junte-se a Nós!</h3>
      </div>
      <button onClick={() => navigateTo('/orcamentos')} style={{
        width: 160,
        borderRadius: 100,
        height: 65,
        fontSize: 15,
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        backgroundColor: colors.default_button_bg,
      }}>Faça um Orçamento</button>
    </div>
  )
}