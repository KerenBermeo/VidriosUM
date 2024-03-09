import React from 'react'
import useSwiperEffect from './SwiperEffect';

import bano1 from '../image/pasamanos/bano/1.png';
import barandillas1 from '../image/pasamanos/barandillas/1.png'
import vidrio1 from '../image/pasamanos/vidrio/1.png'

export const SteelHandrail = () => {
    useSwiperEffect();

  return (
    <section className="divisiones" id="divisiones">
      <h1 className="heading">Pasamanos en <span> Acero </span></h1>

      <div className="swiper divisiones-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <img src={bano1} alt="" />
            <div className="content">
              <h3>Pasamanos para baño</h3>
              <p>
                <span className="fas fa-circle"></span> Barandas de seguridad
                <span className="fas fa-circle"></span> esenciales para baño
                <span className="fas fa-circle"></span> Acero inoxidable 1" y 1/2"
                <span className="fas fa-circle"></span> Garantía 1 año
              </p>
              
              <button className="btn pasamanoBano">Más detalles</button>
            </div>
          </div>

          <div className="swiper-slide box">
            <img src={barandillas1} alt="" />
            <div className="content">
              <h3>Pasamanos de barandilla</h3>
              <p>
                <span className="fas fa-circle"></span> Postes en 1" y 1/2"
                <span className="fas fa-circle"></span> Baranda superior 2"
                <span className="fas fa-circle"></span> Barandillas de 1/2"
                <span className="fas fa-circle"></span> Garantía 1 año
              </p>
              
              <button className="btn pasamanoBarandilla">Más detalles</button>
            </div>
          </div>

          <div className="swiper-slide box">
            <img src={vidrio1} alt="" />
            <div className="content">
              <h3>Pasamanos con vidrio</h3>
              <p>
                <span className="fas fa-circle"></span> Vidrio templado
                <span className="fas fa-circle"></span> 8 mm incoloro
                <span className="fas fa-circle"></span> Postes en 1" y 1/2"
                <span className="fas fa-circle"></span> Baranda superior 2"
                <span className="fas fa-circle"></span> Garantía 1 año
              </p>
              
              <button className="btn pasamanoVidrio">Más detalles</button>
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
