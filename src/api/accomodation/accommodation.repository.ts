import { CreateAccommodationDto } from "./dtos/create-accommodation.dto";
import { UpdateAccommodationDto } from "./dtos/update-accommodation.dto";
import {Accommodation} from "@prisma/client";

export interface AccommodationRepository {
	findAll(): Promise<Accommodation[]>;
	findOne(id: string): Promise<Accommodation | null>;
	create(data: CreateAccommodationDto): Promise<Accommodation>;
	update(id: string, data: UpdateAccommodationDto): Promise<Accommodation | null>;
	delete(id: string): Promise<Accommodation>;
}
