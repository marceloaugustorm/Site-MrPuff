import './body.css';
import Rosa from "../assets/Rosa e Azul.jpeg";
import Carrossel from "../components/carrossel.jsx"


function Body(){
    return(
        <div className='corpo_t'>
            <Carrossel/>
            <a href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/menu">
            <h2  className='cardapio'>Veja nosso cardápio </h2>
            </a>
            <a href="https://wa.me/message/46HCAK57GAZAC1?fbclid=PAZXh0bgNhZW0CMTEAAaYa0fJiQF57zalgo7imqq_mphmbysflQ0PeUWxD5DYn8G6DXzAzNrLz8xY_aem_HglLUdjBJ5g9pWqzXli1Vg.">
            <h2 className='pedido'>Faça aqui seu pedido</h2>
            </a>

            <h2 className='produtos' >Nossos produtos</h2>
            <div className="corpo">
                <img className='fundo_body' src={Rosa} alt="" />
            </div>
        </div>
    )
}

export default Body;