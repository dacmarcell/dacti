import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const links = {
  github: 'https://github.com/marcelldac',
  linkedin: 'https://www.linkedin.com/in/marcell-dactes-23b384294/',
  mailto: 'mailto:dacmarcell@gmail.com.br',
};

const style = {
  padding: 20,
  color: 'white',
};

const size = 50;
const target = '_blank'

export default function LinkIcon(props) {
  switch (props.icon) {
    case 'github':
      return (
        <motion.a whileHover={{ scale: 1.2 }} href={links.github} target={target}>
          <AiFillGithub size={size} style={style} />
        </motion.a>
      )
    case 'linkedin':
      return (
        <motion.a whileHover={{ scale: 1.2 }} href={links.linkedin} target={target}>
          <AiFillLinkedin size={size} style={style} />
        </motion.a>
      )
    case 'email':
      return (
        <motion.a whileHover={{ scale: 1.2 }} href={links.mailto} target={target}>
          <AiOutlineMail size={size} style={style} />
        </motion.a>
      )
    default:
      return <span>icone nao encontrado</span>
  }
}
