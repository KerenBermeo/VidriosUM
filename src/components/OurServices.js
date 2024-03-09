import React from 'react';

export const OurServices = () => {
  
  const solicitud = (service) => {
    if (service === 1) {
      return "requiero un servicio de venta";
    } else if (service === 2) {
      return "requiero un servicio de mantenimiento";
    } else if (service === 3) {
      return "requiero un servicio de instalación";
    } else if (service === 4) {
      return "requiero un servicio de asesoría";
    } else if (service === 5) {
      return "requiero un servicio de soporte";
    }
  };
  
  const handleSolicitudClick = (service) => {
    const solicitudText = solicitud(service);
    console.log(solicitudText); // Aquí puedes realizar cualquier acción que necesites con el texto de solicitud
    // Por ejemplo, podrías abrir un modal con el texto de solicitud
  };

  return (
    <section className="services" id="services">
      <h1 className="heading">Nuestros <span>servicios</span></h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-handshake"></i>
          <h3>Ventas</h3>
          <p>
            Ofrecemos servicio de venta de varios productos con los que trabajamos
            📌 Divisiones de baño y oficina
            📌 Puertas, ventanas y fachadas
            📌 Balcones barandas y pasamanos
            📌 Repisas, espejos y techos 
          </p>
          <button onClick={() => handleSolicitudClick(1)} className="btn">Solicitar</button>
        </div>

        <div className="box">
          <i className="fas fa-tools"></i>
          <h3>Mantenimientos</h3>
          <p>
            Trabajamos con servicios de mantenimientos para sus divisiones de baño, ventanas,
             puertas, entre los diferentes productos que manejamos
          </p>
          <button onClick={() => handleSolicitudClick(2)} className="btn">Solicitar</button>
        </div>

        {/* Los demás elementos de servicios seguirían el mismo patrón */}
      </div>
    </section>
  );
};

