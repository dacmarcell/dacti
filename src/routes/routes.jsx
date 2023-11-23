import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from '../pages/Inicio/Home'
import Servicos from '../pages/Servicos/Servicos'
import Projetos from '../pages/Projetos/Projetos'

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/servicos" Component={Servicos} />
        <Route path="/projetos" Component={Projetos} />
      </Routes>
    </BrowserRouter>
  )
}
