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

import { getDistritos, getAtractivos } from '../../server/api-calls';

class ListaAtractivos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        distrito:'Paraiso',
        lugares: listaLugares['Paraiso'],
        distritos: [],
    };
  }

  componentDidMount() {
    this.onGetDistritos();
  }

  getNames(distritosList){
    return new Promise( (resolve, reject) => {
        const newList = [];
        distritosList.forEach(element => {
          newList.push(element.name);
        });
        if (newList) {
          resolve(newList);
        } else {
          reject();
        }
    });
  }

  onGetDistritos(){
    getDistritos(
      result => {
        if(result.data) {
          this.getNames(result.data).then((succ) => {
            this.setState({distritos:succ});
          });
        }
      },
      err => {
        throw err;
      }
    );
  }

  onClickDistrito(distrito) {
    getAtractivos(
      distrito,
      result => {
        if (result.data){
          this.setState({lugares:result.data});
        }
      },
      err => {
        throw err;
      }
    );
    this.setState({distrito:distrito});
  }

  onClickParaiso() {
    this.setState({distrito:'Paraiso', lugares:listaLugares['Paraiso']});
  }
  onClickOrosi() {
    this.setState({distrito:'Orosi', lugares:listaLugares['Orosi']});
  }
  onClickCachi() {
    this.setState({distrito:'Cachi', lugares:listaLugares['Cachi']});
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
                        {this.state.distritos.map((dis) => {
                          // eslint-disable-next-line react/jsx-key
                          <div>
                          <p className='listaAtractivos__contenido__distritos__nombre' onClick={() => this.onClickDistrito(dis)}>
                            {dis}
                          </p>
                          <div className='listaAtractivos__contenido__distritos__borde'/>
                          </div>
                        })}
                        
                    </div>
                    <div className='listaAtractivos__contenido__lugares'>
                        <img className='listaAtractivos__contenido__lugares__flecha' src={left}/>
                        <div className='listaAtractivos__contenido__lugares__lista'>
                            {this.state.lugares ? (this.state.lugares.map((lugar) => (
                                // eslint-disable-next-line react/jsx-key
                                <Link className='listaAtractivos__contenido__lugares__lista__lugar' to={{
                                    pathname: "/atractivoTuristico",
                                    state: {
                                        nombre: lugar["nombre"],
                                        email: lugar["email"],
                                        telefono: lugar["telefono"],
                                        ubicacion: lugar["ubicacion"],
                                        horario: lugar["horario"],
                                        imgList: lugar["imgList"],
                                        info: lugar["info"]
                                          }
                                    }}>
                                    <img className='listaAtractivos__contenido__lugares__lista__lugar__imagen' src={lugar["img"]}/>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__fondo'/>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__caja'/>
                                    <div className='listaAtractivos__contenido__lugares__lista__lugar__top'>
                                        <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                        <h1 className='listaAtractivos__contenido__lugares__lista__lugar__top__nombre'>
                                            {lugar["nombre"]}
                                        </h1>
                                        <div className='listaAtractivos__contenido__lugares__lista__lugar__top__raya'/>
                                    </div>
                                </Link>
                            ))) : (
                                <div></div>
                            )}
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