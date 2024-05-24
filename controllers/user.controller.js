import { check, validationResult } from "express-validator";
import Users from "../models/users.js";
// Template enginee
const formLogin = (req, res) => {
    res.render("auth/login", {
        page: 'Iniciar sesion'
    });
}
const formRegister = (req, res) => {
    res.render("auth/register", {
        page: 'Crear cuenta'
    })
}
const formForgotPassword = (req, res) => {
    res.render("auth/forgot-password", {
        page: 'Recupera tu acceso a'
    })
}

// Endpoints action
const register = async (req, res) => {

    // validaciones
    await check("name").notEmpty().withMessage("El campo es obligatorio").run(req);
    await check("email").isEmail().withMessage("Eso no parece un email").run(req);
    await check("password").isLength({ min: 6 }).withMessage("El password debe tener al menos 6 caracteres").run(req);
    await check("password_repited").equals('password').withMessage("Las contrasenas no son iguales").run(req);


    let result = validationResult(req)
    //  res.json(result.array())
    // console.log("!#@@!#!@#!@#!@#!@", !result.isEmpty())
    // return;
    // verficar que el resultado este vacio
    // const data = req.body;
    if (!result.isEmpty()) {
        console.log("ETTTTTTTT")
        return res.render("auth/register", {
            page: 'Crear cuenta',
            errors: result.array(),
        })
    }
    const user = await Users.create(req.body);
    res.json(user)
}


export {
    formLogin,
    formRegister,
    formForgotPassword,
    register
}