import { CreateBookingDto } from "./dtos/create-booking.dto";
import { UpdateBookingDto } from "./dtos/update-booking.dto";
import {Booking} from "@prisma/client";

export interface BookingRepository {
	findAll(): Promise<Booking[]>;
	findOne(id: string): Promise<Booking | null>;
	create(data: CreateBookingDto): Promise<Booking>;
	update(id: string, data: UpdateBookingDto): Promise<Booking | null>;
	delete(id: string): Promise<Booking>;
}
