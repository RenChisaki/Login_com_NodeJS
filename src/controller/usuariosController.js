const db = require("../Connection/conexaoBD");
const usuarios = require("../models/usuariosModel");

const brcypt = require("bcrypt");

const cadastro = async (req,res) =>{
    db.sync();
    const usuario = req.body;
    brcypt.hash(usuario.password, 10, async (errBrcypt, hash) =>{
        if(errBrcypt){return ({error: errBrcypt})};
            const novoUsuario = await usuarios.create({
            email: usuario.email,
            password: hash
        }).then(
            res.status(200).send({
                mensagem: "usuario criado com sucesso",
                email: usuario.email
            })
        )
        .catch((error) => {
          console.log(error);
        });

       });    
};
   
module.exports ={
    cadastro
}