import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const useSwiperEffect = () => {
  useEffect(() => {
    let swiper;

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
  }, []);
};

export default useSwiperEffect;
