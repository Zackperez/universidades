import Controlador from "../Controlador/controlador-formulario.js";
const Vista = {
  registrarUsuario() {
    const buttoRegistrar = document.getElementById('enviar');
    buttoRegistrar.addEventListener('click', () => {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro?',
        text: 'Deseas ingresar los datos a la BD',
        icon: 'warning',
        html: `
            <div style="text-align: left;">
                <b>Nombre:</b> ${nombre.value}<br>
                <b>Apellido:</b> ${apellido.value}<br>
                <b>Correo:</b> ${correo.value}<br>
                <b>Telefono:</b> ${telefono.value}<br>
            </div>
            `,
        showCancelButton: true,
        confirmButtonClass: 'swal-custom-confirm-button',
        cancelButtonClass: 'swal-custom-cancel-button',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          const nombre = document.getElementById('nombre').value;
          const apellido = document.getElementById('apellido').value;
          const correo = document.getElementById('correo').value;
          const telefono = document.getElementById('telefono').value;


          // Verificar campos vacíos
          if (nombre === '' || apellido === '' || correo === '' || telefono === '') {
            Swal.fire({
              icon: 'error',
              title: 'Campos vacíos',
              text: 'Por favor, completa todos los campos.',
            });
            return;
          }

          Controlador.insertarDatos(nombre, apellido, correo, telefono);

          document.getElementById('nombre').value = '';
          document.getElementById('apellido').value = '';
          document.getElementById('correo').value = '';
          document.getElementById('telefono').value = '';

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se ha ingresado nada',
            'error'
          );
        }
      });

    })

  },
  transitionSmooth: function () {

    var smoothScrollLinks = document.getElementsByClassName('smooth-scroll');

    // Itera sobre los enlaces
    for (var i = 0; i < smoothScrollLinks.length; i++) {
      // Agrega un evento de clic a cada enlace
      smoothScrollLinks[i].addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtiene el destino del enlace a través del atributo href
        var target = this.getAttribute('href');

        // Utiliza el método 'scrollIntoView' para desplazarse suavemente hacia el destino
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  },
  mostrarMensajeError(mensaje) {
    Swal.fire({
      icon: 'error',
      title: 'Algo salió mal',
      text: mensaje,
    })
  },

  mostrarAlertaSatisfactorio(mensaje) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  },
}
export default Vista
document.addEventListener('DOMContentLoaded', function () {

  /*CONTROLADOR*/
  Vista.registrarUsuario();
  Vista.transitionSmooth();

})