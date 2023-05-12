import { getUsers, saveUser } from "../services/user.service.js";

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
}

export {getUsersController,postUserController}

