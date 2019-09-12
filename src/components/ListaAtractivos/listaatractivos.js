/**
 * Filename: HomePage.js
 * Author: andres.mirandaarias@gmail.com
 * Date: 28/08/2019
 * Description: Form component 
 */
import React from 'react';
import './styles.scss'
import {Button} from 'semantic-ui-react';
import Header from './../Header/index';
import Footer from './../Footer/index';
import left from './../../assets/img/listaAtractivos/left.png';
import right from './../../assets/img/listaAtractivos/right.png';
import mirador from './../../assets/img/listaAtractivos/mirador.png';
import jardin from './../../assets/img/listaAtractivos/jardin.png';
import ujarras from './../../assets/img/listaAtractivos/ujarras.png';
import {Link} from 'react-router-dom';

class ListaAtractivos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
        <div>
            <Header></Header>
            <div className='listaAtractivos'>
                <p className='listaAtractivos__titulo'>
                    Atractivos Turísticos
                </p>
                <div className='listaAtractivos__contenido'>
                    <div className='listaAtractivos__contenido__distritos'>
                        <p className='listaAtractivos__contenido__distritos__nombre'>
                            Paraíso
                        </p>
                        <div className='listaAtractivos__contenido__distritos__borde'/>
                        <p className='listaAtractivos__contenido__distritos__nombre'>
                            Orosi
                        </p>
                        <div className='listaAtractivos__contenido__distritos__borde'/>
                        <p className='listaAtractivos__contenido__distritos__nombre'>
                            Cachí
                        </p>
                        <div className='listaAtractivos__contenido__distritos__borde'/>
                    </div>
                    <div className='listaAtractivos__contenido__lugares'>
                        <img className='listaAtractivos__contenido__lugares__flecha' src={left}/>
                        <div className='listaAtractivos__contenido__lugares__lista'>
                            {/*puto el que lo lea - falta el for*/}
                            <Link className='listaAtractivos__contenido__lugares__lista__lugar' to='/'>
                                <img className='listaAtractivos__contenido__lugares__lista__lugar__imagen' src={jardin}/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__fondo'/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__caja'/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__top'>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                    <p className='listaAtractivos__contenido__lugares__lista__lugar__top__nombre'>
                                        Jadrín Botánico Lankester
                                    </p>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                </div>
                            </Link>
                            <Link className='listaAtractivos__contenido__lugares__lista__lugar' to='/'>
                                <img className='listaAtractivos__contenido__lugares__lista__lugar__imagen' src={mirador}/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__fondo'/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__caja'/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__top'>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                    <p className='listaAtractivos__contenido__lugares__lista__lugar__top__nombre'>
                                        Mirador de Orosi
                                    </p>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                </div>
                            </Link>
                            <Link className='listaAtractivos__contenido__lugares__lista__lugar' to='/'>
                                <img className='listaAtractivos__contenido__lugares__lista__lugar__imagen' src={ujarras}/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__fondo'/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__caja'/>
                                <div className='listaAtractivos__contenido__lugares__lista__lugar__top'>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                    <p className='listaAtractivos__contenido__lugares__lista__lugar__top__nombre'>
                                        Ruinas de Ujarras
                                    </p>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                </div>
                            </Link>
                        </div>
                        <img className='listaAtractivos__contenido__lugares__flecha' src={right}/>
                    </div>
                </div>
            </div> 
            <Footer></Footer>
        </div> 
    )
  }
}


export default ListaAtractivos;