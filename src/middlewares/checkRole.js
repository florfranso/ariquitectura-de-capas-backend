// permisos de administrador
/*const isAdmin = true;

const adminValidationError = ()=>{
    const error = {
        error: -1,
        descripcion: 'no autorizado',
    }
    return error;
}

export const checkAdminRole = (req, res, next) => {
    if (!isAdmin) {
        res.json(adminValidationError());
    } else {
        next();
    }
}*/
const isAuth= (req, res, next) =>{
    if(req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/login')
    }
}