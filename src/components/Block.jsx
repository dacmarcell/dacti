import { motion } from 'framer-motion';

import { CgWebsite } from 'react-icons/cg';
import { MdOutlineWeb } from 'react-icons/md';
import {
  BiMobileAlt,
  BiDesktop,
} from 'react-icons/bi'
import { BsFillPatchQuestionFill } from 'react-icons/bs'
/* import { products } from '../utils/products'; */

const blocks = [
  {
    title: 'Single Page Apps',
    description: 'Desenvolvimento do seu site simples de uma única página. As SPAs são conhecidas por serem as mais rápidas, dinâmicas e direto ao ponto.',
    icon: <CgWebsite color='black' size='40' style={{ paddingTop: 20 }} />,
  },
  {
    title: 'Web Apps',
    description: 'Desenvolvimento do seu site completo, com várias rotas e navegação dinâmica. Quando criado com a tecnologia Next, tem um melhor SEO: Em resumo, seu site ficará melhor posicionado na indexação do Google.',
    icon: <MdOutlineWeb color='black' size='40' style={{ paddingTop: 20 }} />,
  },
  {
    title: 'Aplicativos para Celular',
    description: 'Desenvolvimento do seu aplicativo completo em React Native.',
    icon: <BiMobileAlt color='black' size='40' style={{ paddingTop: 20 }} />,
  },
  {
    title: 'Aplicativos Desktop',
    description: 'Desenvolvimento do seu aplicativo desktop completo com Python. Ideal para gerenciadores de negócios/projetos.',
    icon: <BiDesktop color='black' size='40' style={{ paddingTop: 20 }} />,
  },
  {
    title: 'Seu projeto',
    description: 'Desenvolvimento do seu projeto personalizado. Apresente sua ideia e nós desenvolvemos!',
    icon: <BsFillPatchQuestionFill color='black' size='40' style={{ paddingTop: 20 }} />,
  },
]

export default function Block() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 30,
    }}>

      {blocks.map((item, index) => (
        <>
          <motion.div whileHover={{ scale: 1.1 }} style={{
            backgroundColor: 'white',
            width: 200,
            height: 'auto',
            borderRadius: 20,
            boxShadow: '10px 10px 30px -9px rgba(92,92,92,1)',
            margin: 30,
          }}>
            <p>{item.icon}</p>
            <h2 key={index} style={{ color: 'black' }}>{item.title}</h2>
            <p style={{ color: 'black' }}>{item.description}</p>
          </motion.div>
        </>
      ))
      }
    </div >
  )
}