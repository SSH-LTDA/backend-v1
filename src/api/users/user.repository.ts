import { CreateUserDTO } from "./dtos/create-user.dto";
import { UpdateUserDTO } from "./dtos/update-user.dto";
import {User} from "@prisma/client";

export interface UserRepository {
	findAll(): Promise<User[]>;
	findOne(id: string): Promise<User | null>;
	create(user: CreateUserDTO): Promise<User>;
	update(id: string, user: UpdateUserDTO): Promise<User | null>;
	delete(id: string): Promise<User>;
}
