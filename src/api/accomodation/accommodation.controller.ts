import {Request, Response} from "express";
import {AccommodationService} from "./accommodation.service";
import { Accommodation } from "@prisma/client";
import {CreateAccommodationDto} from "./dtos/create-accommodation.dto";
import {UpdateAccommodationDto} from "./dtos/update-accommodation.dto";

export class AccommodationController {
	constructor(private accommodationService: AccommodationService) {}

	async findAll(req: Request, res: Response): Promise<Response<Accommodation[]>> {
		const accommodations = await this.accommodationService.findAll()

		return res.status(200).send(accommodations)
	}

	async findOne(req: Request<{ id: string }>, res: Response): Promise<Response<Accommodation>> {
		const {id} = req.params
		const accommodation = await this.accommodationService.findOne(id)

		return res.status(200).send(accommodation)
	}

	async create(req: Request, res: Response): Promise<Response<Accommodation>> {
		return res.status(200).send(await this.accommodationService.create(req.body as CreateAccommodationDto))
	}

	async update(req: Request<{ id: string }, never, UpdateAccommodationDto>, res: Response): Promise<Response<Accommodation>> {
		const {id} = req.params;

		return res.status(200).send(await this.accommodationService.update(id, req.body as UpdateAccommodationDto))
	}

	async delete(req: Request<{ id: string }>, res: Response): Promise<Response<Accommodation>> {
		const {id} = req.params;

		return res.status(200).send(await this.accommodationService.delete(id))
	}


}