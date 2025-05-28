import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [posicao, setPosicao] = useState('')
    const [equipe, setTimes] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoSerCadastrado({
            nome,
            cargo,
            imagem,
            posicao,
            equipe
        })
    setNome('')
    setCargo('')
    setImagem('')
    setPosicao('')
    setTimes('')
   }


    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Insira os dados dos integrantes dos times</h2>
      <CampoTexto 
      obrigatorio={true} 
      label="Nome" 
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
      itens={props.equipes}
      valor={equipe}
      aoAlterado={valor => setTimes(valor)}
      />

      <Botao>
        Criar Card
      </Botao>
            </form>
        </section>
    )

}

export default Formulario