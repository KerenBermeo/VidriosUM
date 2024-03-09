import React from 'react'
import puerta1 from '../image/ventanas/puertas/1.png';
import ventanaAluminio1 from '../image/ventanas/ventanaAluminio/1.png'

export const AluminumWindows = () => {
  return (
    <section className="divisiones" id="divisiones">
      <h1 className="heading">Ventanería en <span> Aluminio </span></h1>

      <div className="swiper divisiones-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <img src={puerta1} alt="" />
            <div className="content">
              <h3>Puerta ventana</h3>
              <p>
                <span className="fas fa-circle"></span> Puertas corredizas en aluminio
                <span className="fas fa-circle"></span> Con perfiles en la 80-25
                <span className="fas fa-circle"></span> Vidrios de 5mm incoloros
                <span className="fas fa-circle"></span> Crudos o templados
                <span className="fas fa-circle"></span> Garantía 1 año
              </p>
              <button className="btn ventanaPuerta">Más detalles</button>
            </div>
          </div>

          <div className="swiper-slide box">
            <img src={ventanaAluminio1} alt="" />
            <div className="content">
              <h3>Ventanas en aluminio</h3>
              <p>
                <span className="fas fa-circle"></span> Perfiles con referencia 744
                <span className="fas fa-circle"></span> Vidrios de 4mm incoloros
                <span className="fas fa-circle"></span> Crudos o templados
                <span className="fas fa-circle"></span> Garantía 1 año
              </p>
              <button className="btn ventanaAluminio">Más detalles</button>
            </div>
          </div>

        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  )
}
