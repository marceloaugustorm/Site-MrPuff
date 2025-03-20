import './body.css';
import Rosa from "../assets/Rosa e Azul.jpeg";



function Body(){
    return(
        <div>
            <h2  className='cardapio'>Veja nosso cardápio</h2>
            <h2 className='pedido'>Faça aqui seu pedido</h2>
            <h2 className='produtos' >Nossos produtos</h2>
            <div className="corpo">
                <img className='fundo_body' src={Rosa} alt="" />
            </div>
        </div>
    )
}

export default Body;