import {userManager} from "../model/index.js";

const getUsers = async()=>{
    return await userManager.getAll();
};

const saveUser = async(user)=>{
    return await userManager.create(user);
};



export {getUsers, saveUser};
