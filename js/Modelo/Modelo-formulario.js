import config from '../supabase/config.js'
const Modelo = {
    async registroDatos(nombre, apellido, correo, telefono){
        const datos_insertar = {
             nombre: nombre,
             apellido: apellido,
             correo: correo,
             celular: telefono,
         }
         const rest = await axios({
             method: 'POST',
             url: 'https://xcxfttbcteqauszdyhrw.supabase.co/rest/v1/usuarios',
             data: datos_insertar,
             headers: config.headers
         });
 
         return rest;
     }

}
export default Modelo