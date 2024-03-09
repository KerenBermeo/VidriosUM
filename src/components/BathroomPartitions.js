import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Importa el CSS de Swiper

import glassvit2 from '../image/divisiones/glassvit/2.png';
import batiente1 from '../image/divisiones/batiente/1.png';
import otroglassvit2 from '../image/divisiones/otroGlassvit/2.png';

export const BathroomPartitions = () => {
    useEffect(() => {
        let swiper; // Declaramos swiper fuera del bloque try-catch para que esté disponible en el bloque de retorno
    
        try {
          // Inicializa Swiper cuando el componente se monta
          swiper = new Swiper('.divisiones-slider', {
            slidesPerView: 'auto',
            grabCursor: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            keyboard: true,
          });
          console.log('Swiper inicializado correctamente:', swiper);
        } catch (error) {
          // Captura y maneja cualquier error que ocurra durante la inicialización de Swiper
          console.error('Error al inicializar Swiper:', error);
        }
    
        // Destruye Swiper cuando el componente se desmonta
        return () => {
          try {
            swiper.destroy();
          } catch (error) {
            // Captura y maneja cualquier error que ocurra durante la destrucción de Swiper
            console.error('Error al destruir Swiper:', error);
          }
        };
  }, []); // La dependencia vacía asegura que useEffect solo se ejecute una vez

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
