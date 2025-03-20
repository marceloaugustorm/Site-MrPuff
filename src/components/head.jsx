import './head.css';
import Logo from "../assets/Logo.jpeg";  // Caminho relativo
import logoInsta from "../assets/logo insta.png";
import logoWhats from "../assets/Print_Glyph_Green.png";



function Head(){
    return(
        <div>
            <div className='ead'>
                <h1 className='Hookah' >Drinks || Hookah || Culture</h1>
                <img className = 'logo' src={Logo} alt="Logo" />
                
                <a href="https://www.instagram.com/mrpuffabc/">
                    <img className = 'logoInsta' src={logoInsta} alt="logoInsta"/>
                </a>
                <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2F46HCAK57GAZAC1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYa0fJiQF57zalgo7imqq_mphmbysflQ0PeUWxD5DYn8G6DXzAzNrLz8xY_aem_HglLUdjBJ5g9pWqzXli1Vg&e=AT3galJxanoJT-FLS295rYe0W_E36csQjyIgEIHWBywSaGerUdXknoDa0pFJ0Q8GUozMso-4N_LsKkS91c5hGwsTrTyG6dVOIturY8pycHIBlu9jSoTqZIs">
                    <img className='whatsLogo' src={logoWhats} alt="" />
                </a>
            </div>
            
            
        </div>
    )
}

export default Head;