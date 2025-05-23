import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const equipes = [
        'MIBR',
        'LOUD',
        '2G',
        'NRG',
        'G2',
        'C9',
        'LEVIATÃ'
    ]

    const [nome, setNome] = useState()
    const [cargo, setCargo] = useState()
    const [imagem, setImagem] = useState()
    const [posicao, setPosicao] = useState()
    const [times, setTimes] = useState()



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoSerCadastrado({
            nome,
            cargo,
            imagem,
            posicao,
            times
        })
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Insira os dados para adicionar o player.</h2>
                <CampoTexto 
      obrigatorio={true} 
      abel="Nome" 
      placeholder = "Digite seu nome"
      valor={nome}
      aoAlterado={valor => setNome(valor)}
      />

      <CampoTexto 
      obrigatorio={true} 
      label="Cargo" 
      placeholder = "Digite seu cargo"
      valor={cargo}
      aoAlterado={valor => setCargo(valor)}
      />

      <CampoTexto 
      label="Imagem" 
      placeholder = "Digite o endereço da imagem "
      valor={imagem}
      aoAlterado={valor => setImagem(valor)}
      />

      <CampoTexto 
      obrigatorio={true} 
      label="Posicao" 
      placeholder = "Digite a posição que exerce no seu time"
      valor={posicao}
      aoAlterado={valor => setPosicao(valor)}
      />

      <ListaSuspensa 
      obrigatorio={true} 
      label='Times' 
      itens={equipes}
      valor={times}
      aoAlterado={valor => setTimes(valor)}
      />
      
      <Botao>
        Criar Card
      </Botao>
            </form>
        </section>
    )

}
// teste

export default Formulario