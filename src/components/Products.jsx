import { motion } from 'framer-motion';

import { products } from '../utils/products';

export default function Products() {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: 30,
    }}>
      {products.map((item, index) => (
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