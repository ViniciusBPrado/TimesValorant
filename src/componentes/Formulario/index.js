import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'MIBR',
        'LOUD',
        '2G',
        'NRG',
        'G2',
        'C9',
        'LEVIATÃ'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Insira os dados para adicionar o player.</h2>
      <CampoTexto obrigatorio={true} label="Nome" placeholder = "Digite seu nome"/>
      <CampoTexto obrigatorio={true} label="Cargo" placeholder = "Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder = "Digite o endereço da imagem "/>
      <CampoTexto obrigatorio={true} label="Time" placeholder = "Digite seu time"/>
      <CampoTexto obrigatorio={true} label="Posicao" placeholder = "Digite a posição que exerce no seu time"/>
      <ListaSuspensa obrigatorio={true} label='times' itens={times}/>
      <Botao>
        Criar Card
      </Botao>
            </form>
        </section>
    )

}

export default Formulario