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

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="form">
          <p className="form__contactenos">
            Contáctenos
          </p>
          <div className="form__datos">
            <div className="form__datos__labels">
              <p className="form__datos__labels__tag">
                Nombre completo (*)
              </p>
              <p className="form__datos__labels__tag">
                Correo electrónico (*)
              </p>
              <p className="form__datos__labels__tag">
                Teléfono (*)
              </p>
              <p className="form__datos__labels__tag">
                Comentarios (*)
              </p>
            </div>
            <div className="form__datos__inputs">
              <input className="form__datos__inputs__info" type="text" name="nombre"/>
              <input className="form__datos__inputs__info" type="email" name="correo"/>
              <input className="form__datos__inputs__info" type="tel" name="telefono" pattern="[6-8]{1}[0-9]{3}-[0-9]{4}"/>
              <textarea className="form__datos__inputs__textarea" name="comentarios"/>
            </div>
          </div>
          <p className="form__nota">
            Nota: Los campos con (*) son obligatorios
          </p>
          <Button className="form__enviar">
            Enviar
          </Button>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}


export default Form;