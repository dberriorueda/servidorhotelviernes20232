import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControladorHabitacion{
    constructor(){}

    async buscarTodas(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            response.status(200).json({
                "estado": true,
                "mensaje":"exito buscando los datos",
                "datos":await servicioHabitacion.buscarTodas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async buscarPorId(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            let id=request.params.id
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":await servicioHabitacion.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            let id=request.params.id
            let datos=request.body
            await servicioHabitacion.modificar(id,datos)
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":await servicioHabitacion.modificar(id,datos)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async registrar(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            let datos=request.body
            // tomar 2 fechas del objeto datos
            // la diferencia en dias de esa fecha
            //await servicioHabitacion.registrar(datos)
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":datos.precio,
                "diferencia":"diferencia en dias calculada"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async eliminar(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            let id=request.params.id
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos": servicioHabitacion.eliminar(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error,
                "datos": await servicioHabitacion.eliminar(id)
            })
        }
    }
}