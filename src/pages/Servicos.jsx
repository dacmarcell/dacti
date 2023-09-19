import { motion } from 'framer-motion';

import { products } from "../utils/products";

import DefaultButton from '../components/DefaultButton';

export default function Servicos() {
  return (
    <>
      <h1>Serviços</h1>
      <div style={{
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: 1300
      }}>
        {products.map((item, index) => (
          <>
            <motion.div whileHover={{ scale: 1.1 }} style={{
              backgroundColor: 'white',
              width: 300,
              borderRadius: 20,
              boxShadow: '10px 10px 30px -9px rgba(92,92,92,1)',
              margin: 35,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
              <p>{item.icon}</p>
              <h2 key={index} style={{ color: 'black' }}>{item.title}</h2>
              <strong style={{ color: 'green', fontSize: 17 }}>{item.price}</strong>
              <ul>
                {Object.values(item.benefits).map((benefit, benefitIndex) => (
                  <li key={benefitIndex} style={{ color: 'black', textAlign: 'left' }}>{benefit}</li>
                ))}
              </ul>
              <DefaultButton to='/orcamentos' text='Faça um Orçamento!' />
            </motion.div>
          </>
        ))}
      </div>
    </>
  )
}