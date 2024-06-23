import {Request, Response} from "express";
import {BookingService} from "./booking.service";
import { Accommodation } from "@prisma/client";
import {CreateBookingDto} from "./dtos/create-booking.dto";
import {UpdateBookingDto} from "./dtos/update-booking.dto";

export class BookingController {
	constructor(private bookingService: BookingService) {}

	async findAll(req: Request, res: Response): Promise<Response<Accommodation[]>> {
		const bookings = await this.bookingService.findAll()

		return res.status(200).send(bookings)
	}

	async findOne(req: Request<{ id: string }>, res: Response): Promise<Response<Accommodation>> {
		const {id} = req.params
		const booking = await this.bookingService.findOne(id)

		return res.status(200).send(booking)
	}

	async create(req: Request, res: Response): Promise<Response<Accommodation>> {
		return res.status(200).send(await this.bookingService.create(req.body as CreateBookingDto))
	}

	async update(req: Request<{ id: string }, never, UpdateBookingDto>, res: Response): Promise<Response<Accommodation>> {
		const {id} = req.params;

		return res.status(200).send(await this.bookingService.update(id, req.body))
	}

	async delete(req: Request<{ id: string }>, res: Response): Promise<Response<Accommodation>> {
		const {id} = req.params;

		return res.status(200).send(await this.bookingService.delete(id))
	}


}