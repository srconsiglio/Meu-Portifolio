import Logo from '../images/html.png'
import './Home.css'

function Home() {
    return(
        <>
        

        <div className='Home'>
            <img src={Logo} className='Logo'/>
        <h1>Oi, Me Chamo Caio!</h1>
        </div>
        <h2>Sou Desenvolvedor Full Stack.</h2>
        <nav className='nav-bar'>
            
            <ul>
                <li>Sobre Mim</li>
                <li>Meus Projetos</li>
                <li>Habilidades</li>
                <li>Contato</li>
            </ul>
        </nav>
    
    </>
    )
}

export default Home;