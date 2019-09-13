/**
 * Filename: HomePage.js
 * Author: andres.mirandaarias@gmail.com
 * Date: 28/08/2019
 * Description: Form component 
 */
import React from 'react';
import './styles.scss';

import Header from './../Header/index';
import Footer from './../Footer/index';
import left from './../../assets/img/listaAtractivos/left.png';
import right from './../../assets/img/listaAtractivos/right.png';
import {Link} from 'react-router-dom';
import listaLugares from './../../config/atractivos.json';

class ListaAtractivos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        distrito:'Orosi',
        lugares:listaLugares['Orosi']
    };
  }

  onClickParaiso(){
    this.setState({distrito:'Paraiso', lugares:listaLugares['Paraiso']});
  }

  onClickCachi(){
    this.setState({distrito:'Cachi', lugares:listaLugares['Cachi']});
  }

  onClickOrosi(){
    this.setState({distrito:'Orosi', lugares:listaLugares['Orosi']});
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
                        <p className='listaAtractivos__contenido__distritos__nombre' onClick={this.onClickParaiso.bind(this)}>
                            Paraíso
                        </p>
                        <div className='listaAtractivos__contenido__distritos__borde'/>
                        <p className='listaAtractivos__contenido__distritos__nombre' onClick={this.onClickOrosi.bind(this)}>
                            Orosi
                        </p>
                        <div className='listaAtractivos__contenido__distritos__borde'/>
                        <p className='listaAtractivos__contenido__distritos__nombre' onClick={this.onClickCachi.bind(this)}>
                            Cachí
                        </p>
                        <div className='listaAtractivos__contenido__distritos__borde'/>
                    </div>
                    <div className='listaAtractivos__contenido__lugares'>
                        <img className='listaAtractivos__contenido__lugares__flecha' src={left}/>
                        <div className='listaAtractivos__contenido__lugares__lista'>
                            {/*puto el que lo lea - falta el for*/}
                            {this.state.lugares.map((lugar) => (
                                // eslint-disable-next-line react/jsx-key
                                <Link className='listaAtractivos__contenido__lugares__lista__lugar' to='/'>
                                    <img className='listaAtractivos__contenido__lugares__lista__lugar__imagen' src={lugar["img"]}/>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__fondo'/>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__caja'/>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__top'>
                                        <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                        <p className='listaAtractivos__contenido__lugares__lista__lugar__top__nombre'>
                                            {lugar["nombre"]}
                                        </p>
                                        <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                    </div>
                                </Link>
                            ))}
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