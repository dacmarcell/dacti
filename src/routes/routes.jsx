import { Route, Routes, HashRouter } from 'react-router-dom'

import Home from '../pages/Inicio/Home'
import Servicos from '../pages/Servicos/Servicos'
import Projetos from '../pages/Projetos/Projetos'

export default function Navigation() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </HashRouter>
  )
}
