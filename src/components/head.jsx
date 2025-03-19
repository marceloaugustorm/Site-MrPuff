import './head.css';
import Logo from "../assets/Logo.jpeg";  // Caminho relativo
import logoInsta from "../assets/logo insta.png";


function Head(){
    return(
        <div>
            <div className='ead'>
                <img className = 'logo' src={Logo} alt="Logo" />
                
                <a href="https://www.instagram.com/mrpuffabc/">
                    <img className = 'logoInsta' src={logoInsta} alt="logoInsta"/>
                </a>
            </div>
            
            
        </div>
    )
}

export default Head;