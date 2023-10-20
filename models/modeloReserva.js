import mongoose from "mongoose"

const Schema = mongoose.Schema

const Reserva = new Schema({
    nombreCliente:{
        type:String,
        required:true
    },
    apellidoCliente:{
        type:String,
        required:true

    },
    telefono:{
        type:Number,
        required:true
        
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFinal:{
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})

export const modeloReserva = mongoose.model('reserva',Reserva)