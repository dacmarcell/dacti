
import BgImg from '../components/BgImg';
import DefaultButton from '../components/DefaultButton';
import Products from '../components/Products';

export default function Home() {


  return (
    <div>
      <BgImg />
      <Products />
      <DefaultButton to='/servicos' text='Veja todos os serviços!' />
    </div>
  )
}