import { CreateUserDTO } from "./dtos/create-user.dto";
import { UpdateUserDTO } from "./dtos/update-user.dto";
import { UserRepository } from "./user.repository";
import { PrismaClient, User } from "@prisma/client";
import { NotFoundError } from "../../errors/not-found.error";

export class UserServiceImpl implements UserRepository {
	private prismaService = new PrismaClient();

	async findAll(): Promise<User[]> {
		return this.prismaService.user.findMany();
	}

	async findOne(id: string): Promise<User> {
		const user = await this.prismaService.user.findUnique({
			where: { id },
		});

		if (!user) {
			throw new NotFoundError("not_found", "User not found");
		}

		return user;
	}

	async create(data: CreateUserDTO): Promise<User> {
		return this.prismaService.user.create({ data });
	}

	async update(id: string, data: UpdateUserDTO): Promise<User> {
		return this.prismaService.user.update({
			where: { id },
			data,
		});
	}

	async delete(id: string): Promise<User> {
		const user = await this.prismaService.user.findUnique({ where: { id } });

		if (!user) {
			throw new NotFoundError("not_found", "User not found");
		}

		return this.prismaService.user.delete({ where: { id } });
	}

	async findByEmail(email: string): Promise<User> {
		const user = await this.prismaService.user.findUnique({ where: { email } });

		if (!user) {
			throw new NotFoundError("not_found", "User not found");
		}

		return user;
	}
}

export default new UserServiceImpl();
