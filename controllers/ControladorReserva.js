import {ServicioReserva} from "../services/ServicioReserva.js"
export class ControladorReservas{
    constructor(){}

    async buscaTodas(request,response){
        try{
            let servicioReserva = new ServicioReserva()
            response.status(200).json({
                "estado": true,
                "mensaje": "Exito buscando los datos",
                "datos": await servicioReserva.buscaTodas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async buscarPorId(request,response){
            try{
            let servicioReserva =new ServicioReserva()
            let id=request.params.id
            response.status(200).json({
                "estado": true,
                "mensaje":"exito buscando los datos",
                "datos":await servicioReserva.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioReserva =new ServicioReserva()
            let id=request.params.id
            let datos=request.body
            await servicioReserva.modificar(id,datos)
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":"aca los datos" //como ver los datos
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async registrar(request,response){
        try{
            let servicioReserva =new ServicioReserva()
            let datos=request.body
            // tomar 2 fechas del objeto datos
            // la diferencia en dias de esa fecha
            //await servicioHabitacion.registrar(datos)
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":datos,
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
            let servicioReserva =new ServicioReserva()
            let id=request.params.id
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":"aca los datos"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
}