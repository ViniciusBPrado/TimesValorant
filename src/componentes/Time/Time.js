
import Cadastrado from '../Cadastrado'
import './Time.css'

const Time = (props) => {
   
const css = {backgroundColor: props.corSecundaria}    
   
    return(
       (props.cadastrados.length > 0) ? <section className='equipe' style={css}>
            <h3 style={{borderBlockColor: props.corPrimaria}}>{props.nome}</h3>
        <div className='cadastrados'> 
             {props.cadastrados.map((cadastrado, index) => <Cadastrado 
             key={cadastrado.nome + index} 
             nome={cadastrado.nome} 
             cargo={cadastrado.cargo} 
             posicao={cadastrado.posicao}
             imagem={cadastrado.imagem}
             />)}
        </div>
        </section>
        : ''
    )
}

export default Time