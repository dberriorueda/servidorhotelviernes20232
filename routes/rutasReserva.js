import { Express } from "express";

import {ControladorReservas} from '../controllers/ControladorReserva.js'
let controlador = new ControladorReservas()

export let rutasAPI = express.router()

rutasAPI.post("/api/reservas", controlador.registrar)
rutasAPI.get("/api/reservas", controlador.buscaTodas)
rutasAPI.get("/api/reserva/:id", controlador.buscarPorId)
rutasAPI.put("/api/reservas/:id", controlador.modificar)
rutasAPI.post("/api/reservas/:id", controlador.eliminar)