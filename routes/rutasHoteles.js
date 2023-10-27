//espacio para definir las rutas
//o endpoints especificos de SU API
import express from "express";

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReservas} from '../controllers/ControladorReserva.js'


let controladorReservas = new ControladorReservas()
let controladorHabitaciones=new ControladorHabitacion()

export let rutasAPI = express.Router();

//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/habitaciones", controladorHabitaciones.registrar)
rutasAPI.get("/api/habitaciones", controladorHabitaciones.buscarTodas )
rutasAPI.get("/api/habitacion/:id", controladorHabitaciones.buscarPorId )
rutasAPI.put("/api/habitaciones/:id", controladorHabitaciones.modificar)
rutasAPI.delete("/api/habitaciones/:id", controladorHabitaciones.eliminar)

rutasAPI.post("/api/reservas", controladorReservas.registrar)
rutasAPI.get("/api/reservas", controladorReservas.buscaTodas)
rutasAPI.get("/api/reserva/:id", controladorReservas.buscarPorId)
rutasAPI.put("/api/reservas/:id", controladorReservas.modificar)
rutasAPI.post("/api/reservas/:id", controladorReservas.eliminar)
