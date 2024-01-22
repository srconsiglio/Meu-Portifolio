import Logo from '../images/html.png'
import Git from '../images/git.png'
import Linked from '../images/linked.png'
import Email from '../images/email.png'
import '../Contato/Contato.css'

function Contato(){
    return(
        <>

            <div className='Contato'>
                <img src={Logo} className='Logo'/>
                <h1>Contato</h1>
            </div>

            <div className='Tabelas'>

                <div className='TabelaUm'>
                    <img src={Git} className='Git'/>
                    <h3>github.com/srconsiglio</h3>
                </div>

                <div className='TabelaDois'>
                    <img src={Linked} className='Linkedin'/>
                    <h3>linkedin.com/in/srconsiglio</h3>
                </div>

                <div className='TabelaTres'>
                <img src={Email} className='email'/>
                    <h3>Caioconsiglio20@gmail.com</h3>
                </div>

            </div>
        </>
    )

};

export default Contato;