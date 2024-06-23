import {BookingRepository} from "./booking.repository";
import {Booking} from "@prisma/client";
import {CreateBookingDto} from "./dtos/create-booking.dto";
import {UpdateBookingDto} from "./dtos/update-booking.dto";
import {NotFoundError} from "../../errors/not-found.error";

export class BookingService implements BookingRepository {
	constructor(private bookingRepository: BookingRepository) {
	}

	async findAll(): Promise<Booking[]> {
		return this.bookingRepository.findAll();
	}

	async findOne(id: string): Promise<Booking> {
		const booking = await this.bookingRepository.findOne(id);

		if (!booking) {
			throw new NotFoundError("not_found", "Booking not found");
		}

		return booking;
	}

	async create(data: CreateBookingDto): Promise<Booking> {
		return await this.bookingRepository.create(data);
	}

	async update(id: string, data: UpdateBookingDto): Promise<Booking> {
		const updatedUser = await this.bookingRepository.update(id, data);

		if (!updatedUser) {
			throw new NotFoundError("not_found", "Booking not found");
		}

		return updatedUser;
	}

	async delete(id: string): Promise<Booking> {
		const booking = await this.bookingRepository.findOne(id);

		if (!booking) {
			throw new NotFoundError("not_found", "Booking not found");
		}

		return await this.bookingRepository.delete(id);
	}
}
