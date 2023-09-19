import { CgWebsite } from 'react-icons/cg';
import { MdOutlineWeb } from 'react-icons/md';
import { BiMobileAlt, BiDesktop } from 'react-icons/bi'
import { BsFillPatchQuestionFill } from 'react-icons/bs'

let size = 40
const style = {
  paddingTop: 20,
  color: 'black',
}


export const products = [
  {
    title: 'Single Page Apps',
    description: 'Desenvolvimento do seu site simples de uma única página. As SPAs são conhecidas por serem as mais rápidas, dinâmicas e direto ao ponto.',
    icon: <CgWebsite size={size} style={style} />,
    price: 'A partir de R$520.00',
    benefits: {
      b1: 'Planejamento de interface em ferramenta compartilhada com o cliente',
      b2: 'Planejamento de requisitos de sistema',
      b3: 'Design das páginas responsivo(compatível com telas de celular, tablet, tv...)',
      b4: 'Site em acordo com a LGPD(Lei geral de proteção de dados)'
    }
  },
  {
    title: 'Web Apps',
    description: 'Desenvolvimento do seu site completo, com várias rotas e navegação dinâmica. Quando criado com a tecnologia Next, tem um melhor SEO: Em resumo, seu site ficará melhor posicionado na indexação do Google.',
    icon: <MdOutlineWeb size={size} style={style} />,
    price: 'A partir de R$1280.00',
    benefits: {
      b1: 'Todos os benefícios das SPAs',
      b2: 'Boa indexação do google em seu site (melhor colocação nas pesquisas)',
    }
  },
  {
    title: 'Aplicativos para Celular',
    description: 'Desenvolvimento do seu aplicativo completo em React Native.',
    icon: <BiMobileAlt size={size} style={style} />,
    price: 'A partir de R$2490.00',
    benefits: {
      b1: 'Planejamento de interface em ferramenta compartilhada com o cliente',
      b2: 'Aplicativo para os sistemas operacionais Android e IOS',
      b3: 'Publicação na Play Store e App Store(verificar requisitos)',
    }
  },
  {
    title: 'Aplicativos Desktop',
    description: 'Desenvolvimento do seu aplicativo desktop completo com Python. Ideal para gerenciadores de negócios/projetos.',
    icon: <BiDesktop size={size} style={style} />,
    price: 'A partir de R$599.99',
    benefits: {
      b1: 'Planejamento de interface em ferramenta compartilhada com o cliente',
      b2: 'Projeto entregue em extensão ".exe"',
      b3: 'Projetos de software para computador no geral',
    }
  },
  {
    title: 'Seu projeto',
    description: 'Desenvolvimento do seu projeto personalizado. Apresente sua ideia e nós desenvolvemos!',
    icon: <BsFillPatchQuestionFill size={size} style={style} />,
    price: 'A verificar',
    benefits: {
      b1: 'Tem algum projeto em mente que não se encaixa em nenhum dos itens anteriores? A sua opção é essa!',
      b2: 'Desenvolvimento de APIs',
      b3: 'Integração de sistemas web + mobile: modelo MVP (minimo produto viável)',
    }
  },
]