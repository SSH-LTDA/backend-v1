import {Request, Response} from "express";
import {UserService} from "./user.service";
import {User} from "@prisma/client";
import {CreateUserDTO} from "./dtos/create-user.dto";
import {UpdateUserDTO} from "./dtos/update-user.dto";

export class UserController {
	constructor(private userService: UserService) {}

	async findAll(req: Request, res: Response): Promise<Response<User[]>> {
		const users = await this.userService.findAll()

		return res.status(200).send(users)
	}

	async findOne(req: Request<{ id: string }>, res: Response): Promise<Response<User>> {
		const {id} = req.params
		const user = await this.userService.findOne(id)

		return res.status(200).send(user)
	}

	async create(req: Request, res: Response): Promise<Response<User>> {
		return res.status(200).send(await this.userService.create(req.body as CreateUserDTO))
	}

	async update(req: Request<{ id: string }, never, UpdateUserDTO>, res: Response): Promise<Response<User>> {
		const {id} = req.params;

		return res.status(200).send(await this.userService.update(id, req.body))
	}

	async delete(req: Request<{ id: string }>, res: Response): Promise<Response<User>> {
		const {id} = req.params;

		return res.status(200).send(await this.userService.delete(id))
	}


}