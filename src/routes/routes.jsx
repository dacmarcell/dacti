import { Route, Routes, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Inicio/Home'
import Servicos from '../pages/Servicos/Servicos'
import Projetos from '../pages/Projetos/Projetos'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  )
}
