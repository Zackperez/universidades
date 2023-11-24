import Modelo from "../Modelo/Modelo-Formulario.js"
import Vista from "../Vista/index.js"
const Controlador ={
    async insertarDatos(nombre,  apellido,  correo,  telefono){
        try{
            const res = await Modelo.registroUsuarios(nombre, apellido, correo, telefono)
            let mensaje = "Los datos fueron insertados correctamente"
            Vista.mostrarAlertaSatisfactorio(mensaje)
        }catch(error){
            Vista.mostrarMensajeError();
            console.log(error)
            
        }
    }

}
export default Controlador