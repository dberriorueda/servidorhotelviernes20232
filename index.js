import {Api} from './Api.js'
import 'dotenv/config'
//console.log(process.env)

let servidor=new Api() //creando un objeto de la clase Api

//levantamos el servidor
servidor.levantarServidor()