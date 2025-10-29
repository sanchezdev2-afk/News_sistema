const cardsData = [
  {
    title: "Autogestión de Proveedores",
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
    title: "Cambios en Fiduciaria (Cuentas por Pagar)",
    subtitle: "Nuevo campo para identificación de facturas",
    icon: "fa-solid fa-file-invoice-dollar",
    content: `
      <p>Se implementa un nuevo campo en el módulo de <strong>Cuentas por Pagar - Fiducia</strong>, 
      el cual permite identificar las facturas asociadas al campo <em>Pagador Alterno</em>. 
      Esta mejora busca optimizar la trazabilidad de las obligaciones y la gestión de pagos dentro del sistema.</p>
    `
  },
  {
    title: "Pagador Alterno en Pagos de Cuentas por Pagar",
    subtitle: "Identificación individual de facturas con pagador alterno",
    icon: "fa-solid fa-user-tag",
    content: `
      <p>Ahora el sistema permite registrar y visualizar el <strong>Pagador Alterno</strong> en facturas individuales del módulo 
      <strong>CXP Fiducia</strong>. Esta actualización mejora el control sobre las transacciones y 
      proporciona mayor transparencia en la gestión de pagos específicos.</p>
    `
  },
  {
    title: "Diferencia en Cambio Reexpresada",
    subtitle: "Revisión contable de valores reexpresados en PYG",
    icon: "fa-solid fa-chart-line",
    content: `
      <p>Se incorpora una validación contable solicitada por la Dirección Financiera para el seguimiento del <strong>PYG en compras de divisas</strong>. 
      Este proceso realiza una doble validación de los valores contables entre los reportes estándar y los reexpresados, 
      garantizando la exactitud en los registros de diferencia en cambio.</p>
    `
  },
  {
    title: "Doble Marca en Pagos por Diferencia en Cambio Ejecutada",
    subtitle: "Control reforzado en registros contables de pagos",
    icon: "fa-solid fa-coins",
    content: `
      <p>Se actualiza el proceso de registro de pagos en moneda extranjera, 
      incorporando una <strong>doble marca de control</strong> para evitar duplicidad de registros. 
      Esta mejora responde a la necesidad de fortalecer la trazabilidad y exactitud en los movimientos contables asociados a la diferencia en cambio.</p>
    `
  },
  {
    title: "Autorizaciones para Actualización de Cuentas Bancarias",
    subtitle: "Gestión segura de información financiera de terceros",
    icon: "fa-solid fa-user-shield",
    content: `
      <p>Se implementa un sistema de <strong>autorizaciones por usuario</strong> para modificar cuentas bancarias de clientes, empleados y proveedores. 
      Esta funcionalidad garantiza que solo usuarios con permisos explícitos puedan realizar modificaciones sensibles, 
      reforzando la seguridad de los datos financieros.</p>
      <p>Para la pantalla CXP-Proveedores se debe solicitar el permiso para poder modificar cuentas bancarias de proveedores; en caso de no tenerlo, verá el campo bloqueado.</p>
      <center><img src="img/cbanc/proveedores.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>
      <p>En el caso de la pantalla CXC-Clientes se deberá solicitar el permiso para poder modificar cuentas de clientes o empleados dependiendo la clase del cliente, de lo contrario la cuenta bancaria se mostrara bloqueada.</p>
      <center><img src="img/cbanc/clientes.jpg" alt="foto" style="width: 100%; height: auto; border-radius: 10px;"></center>

    `
  },
  {
    title: "Límites y Contratos con Autorizaciones en Compras de Servicios",
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
    `
  },
  {
    title: "Cruce de Traslados entre Terceros",
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
    title: "Facturación en USD y Envío a DIAN con Copropietarios",
    subtitle: "Actualización en la facturación electrónica de vehículos",
    icon: "fa-solid fa-dollar-sign",
    content: `
      <p>Se amplía la funcionalidad del módulo de facturación para incluir la información de los <strong>copropietarios</strong> en operaciones en dólares. 
      En la representación gráfica se visualizarán hasta cuatro copropietarios, asegurando un correcto envío de la información a la <strong>DIAN</strong>.</p>
    `
  },
  {
    title: "Campo en Tipos de Transacción de Cartera (CXC - Itemizado)",
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
    title: "Contratos en Módulo Bancos para Anticipos de Proveedores",
    subtitle: "Integración con contratos de proveedor en el flujo de pagos",
    icon: "fa-solid fa-handshake",
    content: `
      <p>Se añade una nueva opción en el módulo de <strong>Bancos</strong> que permite consultar y vincular los contratos 
      asociados a cada proveedor durante la creación de anticipos. 
      Esto proporciona mayor control sobre los pagos anticipados y su relación contractual.</p>
    `
  },
  {
    title: "Módulo de Cajeros - Recibos de Caja Independientes",
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
    title: "Marcador de Sesiones Activas en SOCASE",
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

// Crear dinámicamente las tarjetas
const container = document.getElementById('cards-container');

cardsData.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-header">
      <i class="${item.icon} icon"></i> <!-- FontAwesome icon -->
      <div>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
      </div>
    </div>
    <div class="card-content" id="content-${index}">
      ${item.content}
    </div>
  `;
  card.addEventListener('click', () => toggleContent(index));
  container.appendChild(card);
});

// Mostrar/ocultar contenido
function toggleContent(index) {
  const content = document.getElementById(`content-${index}`);
  const isOpen = content.classList.contains('open');
  document.querySelectorAll('.card-content').forEach(c => c.classList.remove('open'));
  if (!isOpen) content.classList.add('open');
}
