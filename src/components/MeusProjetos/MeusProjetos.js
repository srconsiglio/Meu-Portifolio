import Logo from '../images/html.png'
import '../MeusProjetos/MeusProjetos.css'


function MeusProjetos(){
    return(
        <>
        <div className='Titulo'> 
            <img src={Logo} className='Logo'/>
            <h1>Meus Projetos</h1>
        </div>

        
        <div className='tabelas'>
            <div className='Tabela1'>
                <h1>GFgrafic</h1>
                <p>Trabalho envolvendo o desenvolvimento de um web site para uma empresa de pequeno porte no setor de gráfica.</p>
            </div>
            <div className='Tabela2'>
                <h1>Pokedex</h1>
                <p>Um site intuitivo para saber mais sobre alguns pokemon.</p>
            </div>
            <div className='Tabela3'>
                <h1>Tecno Growing</h1>
                <p>Um site que faz a ponte entre desenvolvedores web autónomos para empresas que precisam desses serviços.</p>
            </div>
        </div>
        </>
    )
};

export default MeusProjetos;