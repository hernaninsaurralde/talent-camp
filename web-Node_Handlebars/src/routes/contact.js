const router = require("express").Router()
const nodemailer = require("nodemailer")
const { validateForm } = require("../../validators/formValidator")
const { formCtrlPost, formCtrlGet } = require("../ctrl/formCtrl")

//configuración del método transport para enviar el contenido del formulario
//al servidor de correo (mailtrap en este caso). Los datos de configuración los
//obtenemos del propio servidor de mailtrap (o cualquiera que utilicemos)
const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


//esta ruta (con GET)  nos entrega el form
router.get("/", formCtrlGet)

//esta ruta (con POST)  recibe los datos enviados desde el form
//aquí vamos a aplicar un middleware de Express-Validator (le pusimos validationRules)
router.post("/", validateForm, formCtrlPost)


module.exports = router
