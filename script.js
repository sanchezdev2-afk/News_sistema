const cardsData = [
  {
    title: "1.Autogestión de Proveedores - Área de tesorería - Gerente de Tesorería y Cartera",
    subtitle: "Portal de gestión tributaria autónoma para proveedores",
    icon: "fa-solid fa-truck",
    content: `
      <p>El <strong>Portal de Autogestión de Proveedores</strong> es una herramienta diseñada para que los proveedores gestionen de manera autónoma sus certificados de impuestos. 
      Facilita el acceso a documentos tributarios y agiliza los procesos administrativos sin depender de la intervención del área contable.</p>
      <center><img src="img/proveedores/ingreso.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Puede ingresar al <strong>Portal de Autogestión de Proveedores</strong> siguiendo este link:</p>
      <p><a href="https://app.corporativo-colombia.co/mtk/r/wsmtk/f_autprov/login?session=11422904504509">https://app.corporativo-colombia.co/mtk/r/wsmtk/f_autprov/login?session=11422904504509</a></p>
      <p>Para mas información puede descargar el <strong>Manual</strong> aqui: 
           <a href="img/proveedores/Manual_proveedores.pdf" download="Manual_proveedores.pdf" class="download-button">
               Descargar Manual
           </a>
       </p>
    `
  },
  {
    title: "2.Cambios en Fiduciaria (Cuentas por Pagar) - Área de tesorería - Gerente de Tesorería y Cartera",
    subtitle: "Nuevo campo para identificación de facturas",
    icon: "fa-solid fa-file-invoice-dollar",
    content: `
      <p>Se implementa un nuevo campo en el módulo de <strong>Cuentas por Pagar - Fiducia</strong>, 
      el cual permite identificar las facturas asociadas al campo <em>Pagador Alterno</em>. 
      Esta mejora busca optimizar la trazabilidad de las obligaciones y la gestión de pagos dentro del sistema.</p>
      <p>En la pantalla de CXP - Proveedores se implementó el campo de "Pagador alterno" que al marcarse como si debiera indicar el Pagador Alterno.</p>
      <center><img src="img/fiducia/paga_alter.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Esto se aplica de la siguiente manera:</p>
      <p>En la sigueinte pantalla del modulo CXP:</p>
      <center><img src="img/fiducia/menu.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Deberá consultar la persona del proveedor con facturas y, al marcarlas, mostrará el pagador alterno que tiene configurado en la pantalla anterior.</p>
      <center><img src="img/fiducia/proceso.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Este proceso permite que, en caso de que el proveedor disponga de una factura, el pago correspondiente se realice a su favor, pero se transfiera a la cuenta de un pagador alternativo, cumpliendo con la instrucción de redirigir el pago hacia dicha cuenta.</p>
    `
  },
  {
    title: "3.Pagador Alterno en Pagos de Cuentas por Pagar - Área de tesorería - Gerente de Tesorería y Cartera",
    subtitle: "Identificación individual de facturas con pagador alterno",
    icon: "fa-solid fa-user-tag",
    content: `
      <p>Se implementa el mismo proceso del módulo anterior, pero de forma 1 a 1, permitiendo actualizar el pagador alterno según sea necesario.</p>
      <p>En la pantalla de CXP - Proveedores se implementó el campo de "Pagador alterno" que al marcarse como si debiera indicar el Pagador Alterno.</p>
      <center><img src="img/fiducia/paga_alter.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Esto se aplica de la siguiente manera:</p>
      <p>En la sigueinte pantalla del modulo CXP:</p>
      <center><img src="img/fiducia/menu.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Deberá consultar la persona del proveedor con facturas y, al marcarlas, mostrará el pagador alterno que podrá ser modificado al desplegar la lista de valores.</p>
      <center><img src="img/fiducia/cambio_alter.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Permitiendo el envío a diferentes cuentas según sea necesario.</p>
      <p><strong>Nota: Se nos informó que no se realizará el proceso de esta forma hasta próximas validaciones.</strong></p>
    `
  },
  {
    title: "4.Diferencia en Cambio Reexpresada - Área Contraloría financiera - Contralor financiero",
    subtitle: "Revisión contable de valores reexpresados en PYG",
    icon: "fa-solid fa-chart-line",
    content: `
      <p>Se incorpora una validación contable solicitada por la Dirección Financiera para el seguimiento del <strong>PYG en compras de divisas</strong>. 
      Este proceso realiza una doble validación de los valores contables entre los reportes estándar y los reexpresados, 
      garantizando la exactitud en los registros de diferencia en cambio.</p>
      <p>Se implementan los campos de Diferencia en cambio reexpresada en la pantalla de Cuentas contables, que indica </p>
      <center><img src="img/difer_rex/cuentas.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
    `
  },
  {
    title: "5.Diferencia en Cambio Ejecutada - Área Contraloría financiera - Contralor financiero",
    subtitle: "Control reforzado en registros contables de pagos",
    icon: "fa-solid fa-coins",
    content: `
      <p>Se actualiza el proceso de registro de pagos en moneda extranjera, 
      incorporando una <strong>doble marca de control</strong> para evitar duplicidad de registros. 
      Esta mejora responde a la necesidad de fortalecer la trazabilidad y exactitud en los movimientos contables asociados a la diferencia en cambio.</p>
    `
  },
  {
    title: "6.Autorizaciones para Actualización de Cuentas Bancarias - Área de tesorería - Gerente de Tesorería y Cartera",
    subtitle: "Gestión segura de información financiera de terceros",
    icon: "fa-solid fa-user-shield",
    content: `
      <p>Se implementa un sistema de <strong>autorizaciones por usuario</strong> para modificar cuentas bancarias de clientes, empleados y proveedores. 
      Esta funcionalidad garantiza que solo usuarios con permisos explícitos puedan realizar modificaciones sensibles, 
      reforzando la seguridad de los datos financieros.</p>
      <p>En el módulo de CXP se implementaron nuevas autorizaciones para permitir la actualización de cuenta bancaria de los proveedores.</p>
      <p>Las autorizaciones implementadas para este módulo son:</p>
      <ul>
        <li><strong>CXP-MCB:</strong> Este permiso otorga al usuario autorizado la capacidad de modificar las cuentas bancarias de los proveedores.</li>
        <center><img src="img/bancaria/poveedor.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
        <li><strong>CXP-MCBEMP</strong> Este permiso otorga al usuario autorizado la capacidad de modificar las cuentas bancarias de aquellas personas que estén registradas tanto como proveedor como empleado en la sección de personas. Este permiso debe ser asignado exclusivamente a personal del área de Nómina.</li>
        <center><img src="img/bancaria/personas.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
        <center><img src="img/bancaria/prove_emp.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
        <p>Si el usuario que ingresa no dispone del permiso correspondiente, la opción aparecerá bloqueada, tal como se ilustra en la imagen:</p>
        <center><img src="img/bancaria/sin_permiso.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      </ul>

      <p>En el módulo de CXC se implementaron nuevas autorizaciones para permitir la actualización de cuenta bancaria de los clientes.</p>
      <p>Las autorizaciones implementadas para este módulo son:</p>
      <ul>
        <li><strong>CXC-MCB:</strong> Este permiso otorga al usuario autorizado la capacidad de modificar las cuentas bancarias de los clientes.</li>
        <center><img src="img/bancaria/cliente.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
        <li><strong>CXC-MCBEMP</strong> Este permiso otorga al usuario autorizado la capacidad de modificar las cuentas bancarias de aquellos clientes que se encuentren marcados con la clase "EMP".</li>
        <center><img src="img/bancaria/clie_emple.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
        <p>Si el usuario que ingresa no dispone del permiso correspondiente, la opción aparecerá bloqueada, tal como se ilustra en la imagen:</p>
        <center><img src="img/bancaria/sin_permiso_cliente.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      </ul>
      <p>Se recomienda que las personas que dispongan de ambos permisos efectúen los cambios en la siguiente pantalla:</p>
      <center><img src="img/bancaria/menu_doble.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Dado que en esta pantalla podrán consultar y editar las cuentas bancarias tanto de los clientes como de los proveedores, accediendo a ellas mediante el número de persona, como se ilustra en la imagen.</p>
      <center><img src="img/bancaria/cuentas_dobles.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Adicionalmente, con el fin de llevar un control y registro detallado de los cambios realizados en estas cuentas bancarias, se implementó el siguiente menú:</p>
      <center><img src="img/bancaria/aconte_menu.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p>Dentro de ese menú se encontrará la pantalla de acontecimientos, donde podrá consultar los cambios realizados a un proveedor al consultarlo.</p>
      <center><img src="img/bancaria/acontecimientos.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>
      <p><strong>Nota importante:</strong> Esta pantalla guarda únicamente los campos Clase, #Cta. Bancaria, Banco, Tipo cuenta bancaria, Plazo y pagador alterno. Estos campos podrían cambiar a futuro.</p>
      <p>Los campos que guarda son los siguientes indicados en la imagen:</p>
      <center><img src="img/bancaria/campos.jpg" alt="foto" style="width: 90%; height: auto; border-radius: 10px;"></center>

    `
  },
  {
    title: "7.Límites y Contratos con Autorizaciones en Compras de Servicios - Área Contraloría financiera - Contralor financiero",
    subtitle: "Control de montos y contratos según perfil de usuario",
    icon: "fa-solid fa-file-contract",
    content: `
      <p>Se establece una política de <strong>límites por usuario</strong> en el módulo de Compras e Importaciones. </p>
      <ul>
      <li><p>Los usuarios sin autorización especial podrán aprobar montos de hasta 6 millones. </p></li>
      <li><p>Para valores superiores a 6 millones, se debera cargar adjuntos con minimo 3 cotizaciones.</p></li>
      <li><p>Para montos superiores a 10 millones, se debera adjuntar un contrato, en caso contrario no permite realizar la orden.</p></li>
      </ul>
      <p>El usuario deberá contar con el permiso COM-LOS con moneda y montos definidos para poder realizar el proceso. En caso de no contar con el permiso, el sistema generará el siguiente mensaje:</p>
      <center><img src="img/ordenes/autori_men.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <center><img src="img/ordenes/diagrama.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <h1>Se deja a espera de solución con mensajes de error errados.</h1>
    `
  },
  {
    title: "8.Cruce de Traslados entre Terceros - Área Contraloría financiera - Contralor financiero",
    subtitle: "Autorización requerida para cruces entre diferentes clientes",
    icon: "fa-solid fa-arrows-left-right",
    content: `
      <p>Se agrega una validación de seguridad para los <strong>traslados entre terceros</strong>, 
      que requerirá la autorización <strong>NSS - CXC-CRT</strong> para su ejecución. 
      En ausencia de dicho permiso, los usuarios solo podrán generar la carta de cruce sin aplicarlo directamente.</p>
      <p>Los parámetros involucrados incluyen las transacciones <strong>CRUDIS</strong>, <strong>CRUDIA</strong> y <strong>CRUAUM</strong>, 
      que se ajustarán en futuras actualizaciones según los nuevos tipos definidos por el área contable.</p>
      <br>
      <p>1. Creación de parametro en el <strong>MODULO GENERAL</strong></p>
      <center><img src="img/cruce_terceros/tran_general.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>2. Ingresar a menú <strong>CRUCE TERCEROS</strong></p>
      <center><img src="img/cruce_terceros/menu_cruce_ter.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>3. Diligenciar datos de los <strong>CLIENTES</strong></p>
      <center><img src="img/cruce_terceros/diligen_con_mano.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>4. Diligenciar vin/chasis del <strong>VEHICULO</strong></p>
      <center><img src="img/cruce_terceros/vin_pant_4.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>5. Validar que todos los montos sean <strong>IGUALES</strong></p>
      <center><img src="img/cruce_terceros/valores_iguales_2_pantalla.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>6. Dar click en el boton de <strong>SOLICITUD</strong> para generar el documento a firmar por el cliente que Autoriza</p>
      <center><img src="img/cruce_terceros/boton_soli_3_panta.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>7. Documento que se genera para la <strong>FIRMA</strong></p>
      <center><img src="img/cruce_terceros/solicitud_generada.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>8. Debe adjuntar la carta firmada para poder <strong>APLICAR LA TRANSACCIÓN</strong></p>
      <p>8.1 Error al no tener adjunto</p>
      <center><img src="img/cruce_terceros/mensaj_sin_adjunt.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>8.2 Dar click en el boton "Adjuntos"</p>
      <center><img src="img/cruce_terceros/boton_adjunt.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>8.3 Cargar Adjunto</p>
      <center><img src="img/cruce_terceros/pantalla_carga.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>8.4 Mensaje de Exito</p>
      <center><img src="img/cruce_terceros/mensaje_exito.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>9. Dar click en el botón de <strong>APLICAR</strong></p>
      <center><img src="img/cruce_terceros/boton_aplicar.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>9.1 Generación del <strong>DOCUMENTO DEL CRUCE</strong></p>
      <center><img src="img/cruce_terceros/finalizar_proce.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
    `
  },
  {
    title: "9.Facturación en USD y Envío a DIAN con Copropietarios - Área Impuestos - Gerente de Impuestos",
    subtitle: "Actualización en la facturación electrónica de vehículos",
    icon: "fa-solid fa-dollar-sign",
    content: `
      <p>Se amplía la funcionalidad del módulo de facturación para incluir la información de los <strong>copropietarios</strong> en operaciones en dólares. 
      En la representación gráfica se visualizarán hasta cuatro copropietarios, asegurando un correcto envío de la información a la <strong>DIAN</strong>.</p>
    `
  },
  {
    title: "10.Campo en Tipos de Transacción de Cartera (CXC - Itemizado) - Área Contraloría financiera - Contralor financiero",
    subtitle: "Control obligatorio de chasis en transacciones específicas",
    icon: "fa-solid fa-receipt",
    content: `
      <p>Se incorpora un nuevo campo en los <strong>tipos de transacción de cartera</strong> que obliga a registrar el número de chasis 
      para aquellas operaciones marcadas como <em>itemizadas</em>. 
      Esta medida mejora la trazabilidad de las operaciones relacionadas con inventarios de vehículos.</p>
      <p>En la pantalla de tipos de transacciones del módulo <em>Cuentas X Cobrar⁣.</em></p>
      <center><img src="img/cxctran/ruta.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>Se agrego el campo <strong>Itemizado</strong> para que las transacciones marcadas como Itemizados soliciten de forma obligatoria que sea asociado a un vin.</p>
      <center><img src="img/cxctran/trans.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>En caso de no asociarlo, mostrará el siguiente mensaje:</p>
      <center><img src="img/cxctran/mensaje.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
    `
  },
  {
    title: "11.Contratos en Módulo Bancos para Anticipos de Proveedores - Área Contraloría financiera - Contralor financiero",
    subtitle: "Integración con contratos de proveedor en el flujo de pagos",
    icon: "fa-solid fa-handshake",
    content: `
      <p>Se añade una nueva opción en el módulo de <strong>Bancos</strong> que permite consultar y vincular los contratos 
      asociados a cada proveedor durante la creación de anticipos. 
      Esto proporciona mayor control sobre los pagos anticipados y su relación contractual.</p>
    `
  },
  {
    title: "12.Módulo de Cajeros - Recibos de Caja Independientes - Área Contraloría financiera - Contralor financiero",
    subtitle: "Optimización de permisos en el módulo de caja",
    icon: "fa-solid fa-cash-register",
    content: `
      <p>Con el fin de fortalecer la seguridad y la integridad de la información, 
      se desactiva la edición y creación de registros en el <strong>Módulo de Cajeros</strong>. 
      A partir de ahora, este módulo operará únicamente en modo consulta.</p>
      <center><img src="img/recibos/modulo.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>En esta ruta solo se podrá ejecutar la pantalla en modo consulta, de lo contrario mostrará este mensaje:</p>
      <center><img src="img/recibos/mensaje.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
    `
  },
  {
    title: "13.Marcador de Sesiones Activas en SOCASE - Área Tecnología - Director TIC",
    subtitle: "Monitoreo en tiempo real de usuarios conectados",
    icon: "fa-solid fa-network-wired",
    content: `
      <p>En la pantalla principal del módulo <strong>SOCASE</strong> se habilita una nueva función que permite visualizar 
      las <strong>sesiones activas</strong> de usuarios en tiempo real. 
      Esta herramienta facilita la supervisión de accesos y cantidad de pantallas de SOCASE activas de cada usuario.</p>
      <center><img src="img/sesiones/sesiones.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
    `
  }
];

// ===========================================
//  GENERACIÓN DINÁMICA DE TARJETAS
// ===========================================
const container = document.getElementById('cards-container');

cardsData.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'card';

  // Estructura base
  card.innerHTML = `
    <div class="card-header">
      <i class="${item.icon} icon"></i>
      <div>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
      </div>
    </div>
    <div class="card-content" id="content-${index}">
      ${item.content}
    </div>
  `;

  // Evento de abrir/cerrar tarjeta
  card.addEventListener('click', () => toggleContent(index));

  // Evitar cierre al hacer clic en imagen
  const contentEl = card.querySelector(`#content-${index}`);
  const imgs = contentEl.querySelectorAll('img');

  imgs.forEach(img => {
    img.addEventListener('click', (event) => {
      event.stopPropagation();
      openModal(img.src, img.alt);
    });
  });

  container.appendChild(card);
});

// ===========================================
//  ABRIR / CERRAR TARJETAS
// ===========================================
function toggleContent(index) {
  const content = document.getElementById(`content-${index}`);
  const isOpen = content.classList.contains('open');
  document.querySelectorAll('.card-content').forEach(c => c.classList.remove('open'));
  if (!isOpen) content.classList.add('open');
}

// ===========================================
//  MODAL DE IMAGEN (con zoom de rueda)
// ===========================================
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeModal = document.getElementsByClassName('close')[0];

let zoomLevel = 1; // Nivel actual de zoom

function openModal(src, alt) {
  modal.style.display = 'block';
  modalImg.src = src;
  captionText.textContent = alt || '';
  zoomLevel = 1;
  modalImg.style.transform = `scale(${zoomLevel})`;
}

// Cerrar modal al hacer clic en la "X"
closeModal.onclick = function () {
  modal.style.display = 'none';
};

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// 🔍 Manejar el zoom con la rueda del mouse
modalImg.addEventListener('wheel', function (event) {
  event.preventDefault();
  
  const zoomSpeed = 0.1; // velocidad del zoom
  if (event.deltaY < 0) {
    // acercar
    zoomLevel = Math.min(zoomLevel + zoomSpeed, 3); // máximo 3x
  } else {
    // alejar
    zoomLevel = Math.max(zoomLevel - zoomSpeed, 1); // mínimo 1x
  }

  modalImg.style.transform = `scale(${zoomLevel})`;
});

// Permitir arrastrar la imagen si está ampliada
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

modalImg.addEventListener('mousedown', (e) => {
  if (zoomLevel > 1) {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    modalImg.style.cursor = 'grabbing';
  }
});

modalImg.addEventListener('mouseup', () => {
  isDragging = false;
  modalImg.style.cursor = 'grab';
});

modalImg.addEventListener('mouseleave', () => {
  isDragging = false;
});

modalImg.addEventListener('mousemove', (e) => {
  if (isDragging && zoomLevel > 1) {
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    modalImg.style.transform = `scale(${zoomLevel}) translate(${translateX / zoomLevel}px, ${translateY / zoomLevel}px)`;
  }
});

// Reset posición cuando se cierra
function resetZoomAndPosition() {
  zoomLevel = 1;
  translateX = 0;
  translateY = 0;
  modalImg.style.transform = 'scale(1)';
  modalImg.style.cursor = 'zoom-in';
}