import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {UserServiceImpl} from "./user.service.impl";

const userServiceImpl = new UserServiceImpl()

const userService = new UserService(userServiceImpl)

const userController = new UserController(userService)

export { userService, userController }