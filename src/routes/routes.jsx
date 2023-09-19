import { Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Servicos from '../pages/Servicos';
import Projetos from '../pages/Projetos';
import Orcamentos from '../pages/Orcamentos';
import Contato from '../pages/Contato';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/servicos' element={<Servicos />} />
      <Route path='/projetos' element={<Projetos />} />
      <Route path='/orcamentos' element={<Orcamentos />} />
      <Route path='/contato' element={<Contato />} />
    </Routes>
  )
}