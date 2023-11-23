import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Home from '../pages/Inicio/Home'
import Servicos from '../pages/Servicos/Servicos'
import Projetos from '../pages/Projetos/Projetos'
import Contato from '../pages/Contato'

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  )
}
