import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time/Time';

function App() {

const equipes = [
{
  nome: 'MIBR',
  corPrimaria: '#82cffa',
  corSecundaria: '#e8f8ff'
},
{
  nome: 'LOUD',
  corPrimaria: '#57c278',
  corSecundaria: '#d9f7e9'
},
{
  nome: '2G',
  corPrimaria: '#db6ebf',
  corSecundaria: '#fae9f5'
},
{
  nome: 'NRG',
  corPrimaria: '#302a2a46',
  corSecundaria: '#f3e8e8da'
},
{
  nome: 'G2',
  corPrimaria: '#000000',
  corSecundaria: '#686767dc'
},
{
  nome: 'C9',
  corPrimaria: '#3394ee',
  corSecundaria: '#d1e2f1'
},
{
  nome: 'LEVIATÃ',
  corPrimaria: '#13e8f0',
  corSecundaria: '#82cffa'
},

]

const[cadastrados, setCadastrados] = useState([])

const aoNovoCadastradoAdicionado = (cadastrado) => {
console.log(cadastrado)
setCadastrados([...cadastrados, cadastrado])
}

  return (
    <div className="App">
      <Banner />
      <Formulario equipes={equipes.map(equipe => equipe.nome)} aoSerCadastrado={cadastrado => aoNovoCadastradoAdicionado(cadastrado)} />
      {equipes.map(equipe => <Time 
      key={equipe.nome} 
      nome={equipe.nome} 
      corPrimaria={equipe.corPrimaria} 
      corSecundaria={equipe.corSecundaria}
      cadastrados={cadastrados.filter(cadastrado => cadastrado.equipe === equipe.nome)}
      />)}
  
    </div>
  );
}

export default App;
