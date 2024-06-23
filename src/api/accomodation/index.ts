import {AccommodationController} from "./accommodation.controller";
import {AccommodationService} from "./accommodation.service";
import {AccommodationServiceImpl} from "./accommodation.service.impl";

const accommodationServiceImpl = new AccommodationServiceImpl()

const accommodationService = new AccommodationService(accommodationServiceImpl)

const accommodationController = new AccommodationController(accommodationService)

export { accommodationService, accommodationController }