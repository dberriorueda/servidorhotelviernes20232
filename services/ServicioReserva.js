import { modeloReserva } from "../models/modeloReserva.js";
export class ServicioReserva{

    constructor() {}

    async buscarTodas(){
        return await modeloReserva.find()
    }
    async buscarPorId(id){
        return await modeloReserva.findById()
    }
    async registrar(datos){
        let nuevaReserva = new modeloReserva(datos)
        return await nuevaReserva.save()
    }
    async modificar(id, datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }
}