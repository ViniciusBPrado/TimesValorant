import Cadastrado from '../Cadastrado'
import './Time.css'

const Time = (props) => {

    const backgroundImage = `/imagens/${props.nome}.png`

    return (
        (props.cadastrados.length > 0) ? 
        <section 
            className='equipe'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className='cadastrados'> 
                {props.cadastrados.map((cadastrado, index) => (
                    <Cadastrado 
                        corDeFundo={props.corPrimaria}
                        key={cadastrado.nome + index} 
                        nome={cadastrado.nome} 
                        cargo={cadastrado.cargo} 
                        posicao={cadastrado.posicao}
                        imagem={cadastrado.imagem}
                    />
                ))}
            </div>
        </section> 
        : ''
    )
}

export default Time





