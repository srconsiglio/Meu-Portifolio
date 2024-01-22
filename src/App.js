import './App.css'
import Contato from './components/Contato/Contato';
import Habilidades from './components/Habilidades/Habilidades';
import Home from './components/Home/Home';
import MeusProjetos from './components/MeusProjetos/MeusProjetos';
import SobreMim from './components/SobreMim/SobreMim';




function App() {
  return (
    <div className='App'>
      
      <Home/>
      <SobreMim/>
      <MeusProjetos/>
      <Habilidades/>
      <Contato/>
    </div>
  )
};

export default App;
