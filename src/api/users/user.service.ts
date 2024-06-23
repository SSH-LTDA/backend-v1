import {UserRepository} from "./user.repository";
import {User} from "@prisma/client";
import {CreateUserDTO} from "./dtos/create-user.dto";
import {UpdateUserDTO} from "./dtos/update-user.dto";
import {NotFoundError} from "../../errors/not-found.error";

export class UserService implements UserRepository {
	constructor(private userRepository: UserRepository) {
	}

	async findAll(): Promise<User[]> {
		return this.userRepository.findAll();
	}

	async findOne(id: string): Promise<User> {
		const user = await this.userRepository.findOne(id);

		if (!user) {
			throw new NotFoundError("not_found", "User not found");
		}

		return user;
	}

	async create(data: CreateUserDTO): Promise<User> {
		return await this.userRepository.create(data);
	}

	async update(id: string, data: UpdateUserDTO): Promise<User> {
		const updatedUser = await this.userRepository.update(id, data);

		if (!updatedUser) {
			throw new NotFoundError("not_found", "User not found");
		}

		return updatedUser;
	}

	async delete(id: string): Promise<User> {
		const user = await this.userRepository.findOne(id);

		if (!user) {
			throw new NotFoundError("not_found", "User not found");
		}

		return await this.userRepository.delete(id);
	}
}
