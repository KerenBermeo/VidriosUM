import React from 'react';
import useSwiperEffect from './SwiperEffect';

import glassvit2 from '../image/divisiones/glassvit/2.png';
import batiente1 from '../image/divisiones/batiente/1.png';
import otroglassvit2 from '../image/divisiones/otroGlassvit/2.png';

export const BathroomPartitions = () => {
    useSwiperEffect();

  return (
    <section className="divisiones" id="divisiones">
      <h1 className="heading"><span>Divisiones para baño</span></h1>

      <div className="swiper divisiones-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <img src={glassvit2} alt="" />
            <div className="content">
              <h3>Glassvit</h3>
              <p>
                <span className="fas fa-circle"></span> 2 Vidrios templados
                <span className="fas fa-circle"></span> 8 mm incoloros
                <span className="fas fa-circle"></span> Acero inoxidable
                <span className="fas fa-circle"></span> Accesorios tipo A
                <span className="fas fa-circle"></span> Garantía 1 año
              </p>
              <button className="btn glassvit">Más detalles</button>
            </div>
          </div>

          <div className="swiper-slide box">
            <img src={batiente1} alt="" />
            <div className="content">
              <h3>Batiente</h3>
              <p>
                <span className="fas fa-circle"></span> 2 Vidrios templados
                <span className="fas fa-circle"></span> 8 mm
                <span className="fas fa-circle"></span> Accesorios F5
                <span className="fas fa-circle"></span> Garantía 1 año
              </p>
              <button className="btn batiente">Más detalles</button>
            </div>
          </div>

          <div className="swiper-slide box">
            <img src={otroglassvit2} alt="" />
            <div className="content">
              <h3>Glassvit en L</h3>
              <p>
                <span className="fas fa-circle"></span> 3 o 4 Vidrios templados
                <span className="fas fa-circle"></span> 8 mm
                <span className="fas fa-circle"></span> Acero inoxidable
                <span className="fas fa-circle"></span> Accesorios tipo A
                <span className="fas fa-circle"></span> Garantía 1 año
              </p>
              <button className="btn en_l">Más detalles</button>
            </div>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
