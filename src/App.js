import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

const[cadastrado, setCadastrado] = useState([])

const aoNovoCadastradoAdicionado = (cadastrado) => {
console.log(cadastrado)
}

  return (
    <div className="App">
      <Banner />
      <Formulario aoSerCadastrado={cadastrado => aoNovoCadastradoAdicionado(cadastrado)} />
    </div>
  );
}

export default App;

