import { modeloHabitacion } from "../models/modeloHabitacion.js"
export class ServicioHabitacion{
    
    constructor(){}

    async buscarTodas(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones
    }
    async buscarPorId(id){
        let habitacion = await modeloHabitacion.findById(id)
        return habitacion
    }
    async modificar(id, datos){
        return await modeloHabitacion.findByIdIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let HabitacionNueva = new modeloHabitacion(datos)
        return await HabitacionNueva.save()
    }
    async eliminar(id){
        // como eliminar
    }
}
