import {useNavigate} from 'react-router-dom';
import './body.css';
import Rosa from "../assets/Rosa e Azul.jpeg";
import Carrossel from "../components/carrossel.jsx"
import Informs from "../components/informacoes";


function Body(){
    const navigate = useNavigate();
    return(
        <div className='corpo_t'>
            <div className='textos' style={{backgroundImage: `url(${Rosa})`}}>
                <a href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/menu">
                    <h2  className='cardapio'>Veja nosso cardápio </h2>
                </a>
                <a href="https://wa.me/message/46HCAK57GAZAC1?fbclid=PAZXh0bgNhZW0CMTEAAaYa0fJiQF57zalgo7imqq_mphmbysflQ0PeUWxD5DYn8G6DXzAzNrLz8xY_aem_HglLUdjBJ5g9pWqzXli1Vg.">
                    <h2 className='pedido'>Faça aqui seu pedido</h2>
                </a>

                <a>
                    <h2 className='produtos' onClick={() => navigate("/nos-conheca")}>Nos conheça</h2>
                </a>
            </div>
            <div className='carrossel'>
                        <Carrossel/>
                        <Informs/>
            </div>
        </div>
        
    )
}

export default Body;