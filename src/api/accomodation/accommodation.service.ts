import {AccommodationRepository} from "./accommodation.repository";
import {Accommodation} from "@prisma/client";
import {CreateAccommodationDto} from "./dtos/create-accommodation.dto";
import {UpdateAccommodationDto} from "./dtos/update-accommodation.dto";
import {NotFoundError} from "../../errors/not-found.error";

export class AccommodationService implements AccommodationRepository {
	constructor(private accommodationRepository: AccommodationRepository) {
	}

	async findAll(): Promise<Accommodation[]> {
		return this.accommodationRepository.findAll();
	}

	async findOne(id: string): Promise<Accommodation> {
		const accommodation = await this.accommodationRepository.findOne(id);

		if (!accommodation) {
			throw new NotFoundError("not_found", "Accommodation not found");
		}

		return accommodation;
	}

	async create(data: CreateAccommodationDto): Promise<Accommodation> {
		return await this.accommodationRepository.create(data);
	}

	async update(id: string, data: UpdateAccommodationDto): Promise<Accommodation> {
		const updatedAccommodation = await this.accommodationRepository.update(id, data);

		if (!updatedAccommodation) {
			throw new NotFoundError("not_found", "Accommodation not found");
		}

		return updatedAccommodation;
	}

	async delete(id: string): Promise<Accommodation> {
		const accommodation = await this.accommodationRepository.findOne(id);

		if (!accommodation) {
			throw new NotFoundError("not_found", "Accommodation not found");
		}

		return await this.accommodationRepository.delete(id);
	}
}
