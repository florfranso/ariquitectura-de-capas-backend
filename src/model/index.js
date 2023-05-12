import {UserManagerMongo} from "./manager/user.manager.js";
import {ProductManagerMongo} from './manager/product.manager.js';
import {CarritosManagerMongo} from './manager/carts.manager.js'
import { UserModel } from "./dbModels/user.model.js";
import { ProductModel } from './dbModels/product.model.js';
import { CarritoModel} from './dbModels/carts.model.js'

const userManager = new UserManagerMongo(UserModel);
const productManager = new ProductManagerMongo(ProductModel);
const carritosManager = new CarritosManagerMongo(CarritoModel)



export {userManager, productManager, carritosManager};

