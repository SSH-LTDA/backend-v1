import {CreateBookingDto} from "./dtos/create-booking.dto";
import {UpdateBookingDto} from "./dtos/update-booking.dto";
import {BookingRepository} from "./booking.repository";
import {PrismaClient, Booking} from "@prisma/client";
import {NotFoundError} from "../../errors/not-found.error";

export class BookingServiceImpl implements BookingRepository {

	private prismaService = new PrismaClient()

	async findAll(): Promise<Booking[]> {
		return this.prismaService.booking.findMany();
	}

	async findOne(id: string): Promise<Booking> {
		const booking = await this.prismaService.booking.findUnique({
			where: {id}
		});

		if (!booking) {
			throw new NotFoundError("not_found", "Booking not found");
		}

		return booking;
	}

	async create(data: CreateBookingDto): Promise<Booking> {
		return this.prismaService.booking.create({data});
	}

	async update(id: string, data: UpdateBookingDto): Promise<Booking> {
		return this.prismaService.booking.update({
			where: {id},
			data
		});
	}

	async delete(id: string): Promise<Booking> {
		const booking = await this.prismaService.booking.findUnique({where: {id}});

		if (!booking) {
			throw new NotFoundError("not_found", "Booking not found");
		}

		return this.prismaService.booking.delete({where: {id}});
	}
}
