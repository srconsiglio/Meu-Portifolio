import '../Habilidades/Habilidades.css'
import Logo from '../images/html.png'
import React from '../images/react.png'
import Java from '../images/java.png'
import Css from '../images/css.png'
import Html from '../images/html 5.png'
import Sql from '../images/sql.png'
import Node from '../images/node.png'


function Habilidades(){
    return(
        <>
            <div className='Titulo'>
                <img src={Logo} className='Logo'/>
                <h1>Minhas Habilidaes</h1>
            </div>      


            <div className='Habilidades'>
                <div className='HabilidadesUm'>
                    <h3>ReactJS</h3>
                    <img src={React} className='React'/>
            </div>

            <div className='HabilidadesDois'>
                <h3>JavaScript</h3>
                <img src={Java} className='Java'/>
            </div>

            <div className='HabilidadesTres'>
                <h3>Css 3</h3>
                <img src={Css} className='Css'/>
            </div>

            <div className='HabilidadesQuatro'>
                <h3>Html 5</h3>
                <img src={Html} className='Html'/>
            </div>

            <div className='HabilidadesCinco'>
                <h3>SQL</h3>
                <img src={Sql} className='Sql'/>
            </div>

            <div className='HabilidadesSeis'>
                <h3>NodeJS</h3>
                <img src={Node} className='Node'/>
            </div>
            </div>   

        </>
    )
};

export default Habilidades;