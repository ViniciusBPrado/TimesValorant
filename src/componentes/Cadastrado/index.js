
import './Cadastrado.css'

const Cadastrado = ({nome, imagem, cargo, posicao}) => {
    return(<div className='cadastrado'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome} />
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h5>{posicao}</h5>
        </div>


        </div>
    </div>)
}

export default Cadastrado