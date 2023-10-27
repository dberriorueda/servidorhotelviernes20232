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
                "mensaje":"Habitacion modificada",
                "datos":await servicioHabitacion.modificar(id,datos)
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error.message
            })
        }
    }
    async registrar(request,response){
        try{
            let servicioHabitacion =new ServicioHabitacion()
            let datos=request.body
            let diferenciaDias= calcularDias(datos.fechaEntrada)
            response.status(200).json({
                "mensaje":"Habitacion registrada",
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
            const resultado = await servicioHabitacion.eliminar(id)

            if (resultado){
                response.status(200).json({
                    "mensaje":"Habitacion eliminada"
                })
            }else{
                response.status(404).json({
                    "mensaje":"La habitacion no fue encontrada"
                })
            }
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error.message,
                "datos": await ServicioHabitacion.eliminar(id)
            })
        }
    }
}

function calcularDias(datos){
    let fechaEntrada = new Date(datos.fechaEntrada)
    let fechaSalida = new Date(datos.fechaSalida)

    let diferenciasMilisegundos = fechaSalida - fechaEntrada

    let diferenciaDias = diferenciasMilisegundos / (1000 * 60 * 60 * 24)

    return diferenciaDias
}
 const habitacion = {
    fechaEntrada: "2023-10-01",
    fechaSalida: "2023-10-15",
 }

 const diferenciaDias = calcularDias(habitacion)
 console.log("Diferencia en dias:", diferenciaDias)