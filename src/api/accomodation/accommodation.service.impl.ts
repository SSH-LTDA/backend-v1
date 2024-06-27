import {CreateAccommodationDto} from "./dtos/create-accommodation.dto";
import {UpdateAccommodationDto} from "./dtos/update-accommodation.dto";
import {AccommodationRepository} from "./accommodation.repository";
import {Accommodation, PrismaClient} from "@prisma/client";
import {NotFoundError} from "../../errors/not-found.error";

export class AccommodationServiceImpl implements AccommodationRepository {

	private prismaService = new PrismaClient()

	async findAll(): Promise<Accommodation[]> {
		return this.prismaService.accommodation.findMany({
			include: {
				bookings: true
			}
		});
	}

	async findOne(id: string): Promise<Accommodation> {
		const accommodation = await this.prismaService.accommodation.findUnique({
			where: {id}
		});

		if (!accommodation) {
			throw new NotFoundError("not_found", "Accommodation not found");
		}

		return accommodation;
	}

	async create(data: CreateAccommodationDto): Promise<Accommodation> {
		return this.prismaService.accommodation.create({data});
	}

	async update(id: string, data: UpdateAccommodationDto): Promise<Accommodation> {
		return this.prismaService.accommodation.update({
			where: {id},
			data
		});
	}

	async delete(id: string): Promise<Accommodation> {
		const accommodation = await this.prismaService.accommodation.findUnique({where: {id}});

		if (!accommodation) {
			throw new NotFoundError("not_found", "Accommodation not found");
		}

		return this.prismaService.accommodation.delete({where: {id}});
	}
}
