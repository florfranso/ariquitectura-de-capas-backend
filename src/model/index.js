import UserManagerMongo from "./manager/user.manager";
import { UserModel } from "./dbModels/user.model";

const userManager = new UserManagerMongo(UserModel);

export default userManager;