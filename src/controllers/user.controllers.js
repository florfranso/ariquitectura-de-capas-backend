//importar capa de servicio
import { getUsers, saveUser } from "../services/user.service.js";
import passport from 'passport';
import { Strategy } from "passport-local";
import { checkLogged, userNotLogged } from '../middlewares/auth.js';
import bcrypt from 'bcrypt';

//funcion para encriptar la contrase;a
const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

//serailizar y deserailizar el usuario que se autentica
passport.serializeUser((user,done)=>{
    return done(null, user.id)
});//con esta serializacion estamos guardando el id del usuario en la session, req.session.passport.user={id}

passport.deserializeUser((id,done)=>{
    UserModel.findById(id,(error, userFound)=>{
        return done(error, userFound)
    })
});//req.user=userFound

const LocalStrategy = Strategy;
//estrategia de registro del usuario
passport.use("signupStrategy", new LocalStrategy(
    {
        passReqToCallback:true,
        usernameField:"email"
    },
    (req,username,password, done)=>{
        //logica de registro y autenticacion
        //1.Verfiicar si el usuario existe en la base de datos
        UserModel.findOne({email:username},(error, user)=>{
            if(error) return done(null, false, {message:`Error buscando el usuario ${error}`});
            if(user) return done(null, false, {message:"El usuario ya esta registrado"});
            //2. si el usuario no existe, registramos al usuario, y guardamos al usuario en la db
            const newUser = {
                email:username,
                password:createHash(password),
                nombre:req.body.nombre,
                direccion: req.body.direccion,
                edad: req.body.edad,
                celular:req.body.celular,
                avatar:req.body.avatar
            }
            //procedemos a guardar al usuario en la base de datos
            UserModel.create(newUser,(error, userCreated)=>{
                //userCreated es el usuario con id generado en la db
                if(error) return done(null, false, {message:`Error registrando el usuario ${error}`});
                return done(null, userCreated,{message:"Usuario registrado exitosamente"})
            })
        })
    }
));

/*authRouter.post("/register", passport.authenticate("signupStrategy",{
    failureRedirect:"/registro-error",
    failureMessage:true
}), (req,res)=>{
    res.send("usuario registrado y autenticado")
    res.redirect ("/home")
});
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/perfil', 
    failureRedirect: '/login-error'
}));
authRouter.get('/perfil', checkLogged,(req, res) => {
    const user = {
        nombre: req.user.nombre,
        telefono: req.user.celular,
        avatar: req.user.avatar
    }
    res.render('datos', { datos: datosUsuario });
    res.send(`Usted inicio sesion ${JSON.stringify(user)}`)
})


/*authRouter.get("/signupError",(req,res)=>{
    const erroMessage = req.session.messages[0] || '';
    req.session.messages = [];
    res.json({error:erroMessage})
});*/

/*authRouter.post("/logout",(req,res)=>{
    req.logOut(err=>{
        if(err) return res.status(400).json({error:"No se pudo cerrar la sesion"});
        req.session.destroy(err=>{
            if(err) return res.status(400).json({error:"Error al cerrar la sesion"});
            res.status(200).json({message:"sesion finalizada"})
        });
    });
});*/
/*
authRouter.get("/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.redirect("/")
        } else {
            res.render("/logout")
        }
    })
});
authRouter.get("/home",(req,res)=>{
    res.send("prueba rutas autenticacion")
});


*/





const getUsersController = async(req,res)=>{
    try {
        const users = await getUsers();
        res.json({status:"success",data:users});
    } catch (error) {
        console.log(error);
        res.json({status:"error",message:error.message});
    }
};

const postUserController = async(req,res)=>{
    try {
        const user = await saveUser(req.body);
        res.json({status:"success", data:user});
    } catch (error) {
        console.log(error);
        res.json({status:"error",message:error.message});
    }
};

/*const UsersLogoutController = async(req, res)=> {
    try {
        
    } catch (error) {
        
    }
};
const  = async(req, res)=> {
    try {
        
    } catch (error) {
        
    }
};
const  = async(req, res)=> {
    try {
        
    } catch (error) {
        
    }
};
const  = async(req, res)=> {
    try {
        
    } catch (error) {
        
    }
};
const  = async(req, res)=> {
    try {
        
    } catch (error) {
        
    }
};*/



export {getUsersController, postUserController};