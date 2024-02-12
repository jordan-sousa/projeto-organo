import React from "react";
import AppRoutes from "./routes";
import UserServices from "../services/UserServices";

const userService = new UserServices()

const RotaProtegida = ({ children }) => {
    const usuarioAutenticado = userService.usuarioAutenticado()

    return !usuarioAutenticado ? children : <AppRoutes />
}

export default RotaProtegida