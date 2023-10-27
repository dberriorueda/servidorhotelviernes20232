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
        try {
            const resultado = await modeloHabitacion.findByIdAndRemove(id)
            if(!resultado){
                throw new Error("No se encontro la habitacion con el id proporcinado")
            }
            return {mensaje: "Habitacion eliminada", id: resultado._id}
        }catch(error){
            throw new Error("Error al eliminar la habitacion:" + error.message)
        }
    }
}
