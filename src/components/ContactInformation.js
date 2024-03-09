import React, { useState } from 'react';

const ContactInformation = () => {

    const [ciudad, setCiudad] = useState("");
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
  
    const mapUrls = {
      cali: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248.92081216877153!2d-76.50950494679482!3d3.415114499292987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6da3e649f61%3A0x6036c9818542062e!2sCra.%2041%20%2338-90%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1662421535441!5m2!1ses!2sco",
      rozo: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7963.752512710334!2d-76.39247237657965!3d3.615761939475561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a01bd62ef1bd5%3A0x535db8634970cb!2sRozo%2C%20Palmira%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1662427932565!5m2!1ses!2sco",
      palmira: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63715.83667066188!2d-76.33044510678629!3d3.5320128919331024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a04e892ee5ced%3A0x641d628b9da7937a!2sPalmira%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1662432428534!5m2!1ses!2sco",
      yumbo: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63714.92043474143!2d-76.5300461567755!3d3.5453362894634153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30aa49a2424267%3A0xefb31cae81bea000!2sYumbo%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1662432480798!5m2!1ses!2sco",
      buga: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63689.33250527992!2d-76.3345815564756!3d3.899098773942295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39ec93c47a211b%3A0xade3dc568e433f40!2sGuadalajara%20de%20Buga%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1662432554492!5m2!1ses!2sco",
      popayan: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63778.38780089694!2d-76.6349536575194!3d2.4573844915531597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300311c028d47d%3A0x880bd67f0987a54e!2zUG9wYXnDoW4sIENhdWNh!5e0!3m2!1ses!2sco!4v1662432585020!5m2!1ses!2sco"
    };
  
    const mapSelector = (ciudad) => {
      setCiudad(ciudad);
      window.location.href = mapUrls[ciudad];
    };
  
    const sendMessage = (e) => {
      e.preventDefault();
      let texto = "";
      if (body !== "" && name !== "") {
        texto = `Hola mi nombre es ${name}, ${body}`;
      } else if (body !== "") {
        texto = body;
      } else {
        texto = "Deseo adquirir alguno de sus servicios";
      }
      window.open(`https://wa.me/573167120802?text=${encodeURIComponent(texto)}`);
    };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading"><span>Contáctenos</span></h1>

        <div className="row">
          <iframe
            id="mapRender"
            title="Mapa"
            src={mapUrls[ciudad] || mapUrls['cali']}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <form onSubmit={sendMessage} className="waMessage">
            <h3>Cotice con nosotros</h3>
            <input
              type="text"
              placeholder="su nombre"
              className="box name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Escriba aquí descripciones del producto (medidas, colores, diseños, etc...)"
              className="box body"
              cols="30"
              rows="10"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <input type="submit" value="enviar mensaje" className="btn" />
          </form>
        </div>
      </section>

      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <h3>Sectores disponibles</h3>
            <a
            href="#footer"
            onClick={() => mapSelector('cali')}
            tabIndex={0} // Agregar esta línea
            >
            <i className="fas fa-map-marker-alt"></i> Cali
            </a>
            <a
            href="#footer"
            onClick={() => mapSelector('rozo')}
            tabIndex={0} // Agregar esta línea
            >
            <i className="fas fa-map-marker-alt"></i> Rozo
            </a>
            <a
            href="#footer"
            onClick={() => mapSelector('palmira')}
            tabIndex={0} // Agregar esta línea
            >
            <i className="fas fa-map-marker-alt"></i> Palmira
            </a>
            <a
            href="#footer"
            onClick={() => mapSelector('yumbo')}
            tabIndex={0} // Agregar esta línea
            >
            <i className="fas fa-map-marker-alt"></i> Yumbo
            </a>
            <a
            href="#footer"
            onClick={() => mapSelector('buga')}
            tabIndex={0} // Agregar esta línea
            >
            <i className="fas fa-map-marker-alt"></i> Buga
            </a>
            <a
            href="#footer"
            onClick={() => mapSelector('popayan')}
            tabIndex={0} // Agregar esta línea
            >
            <i className="fas fa-map-marker-alt"></i> Popayan
            </a>
          </div>

          <div className="box">
            <h3>Enlaces rápidos</h3>
            <a href="#home"> <i className="fas fa-arrow-right"></i> Inicio </a>
            <a href="#divisiones">
              <i className="fas fa-arrow-right"></i> productos
            </a>
            <a href="#services"> <i className="fas fa-arrow-right"></i> servicios </a>
            <a href="#contact"> <i className="fas fa-arrow-right"></i> contacto </a>
          </div>

          <div className="box">
            <h3>Nuestra información</h3>
            <a href="#footer"> <i className="fas fa-phone"></i> +57 3167120802 </a>
            <a href="#footer"> <i className="fas fa-phone"></i> +57 3184012623 </a>
            <a href="#footer"> <i className="fas fa-envelope"></i> vidriosum@gmail.com </a>
            <a href="#footer">
              <i className="fas fa-map-marker-alt"></i> Cl. 39 #41-16, Cali, Valle del
              Cauca
            </a>
          </div>

          <div className="box">
            <h3>Nuestras redes</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/VidriosdeseguridadUM/"
            >
              <i className="fab fa-facebook-f"></i> facebook
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/vidrioseguridadum/"
            >
              <i className="fab fa-instagram"></i> instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=573167120802&app=facebook&entry_point=page_cta&fbclid=IwAR3fz_XhVTpDeYdgV9mmxbwao87ke7eFHeFyMAELuBwLcu3GcsKteiN8taE"
            >
              <i className="fab fa-whatsapp"></i> whatsapp
            </a>
          </div>
        </div>

        <div className="credit">Created by Hanier Peña and Keren Bermeo | all rights reserved</div>
      </section>
    </>
  );
};

export default ContactInformation;


