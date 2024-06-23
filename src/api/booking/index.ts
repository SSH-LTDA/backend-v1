import {BookingController} from "./booking.controller";
import {BookingService} from "./booking.service";
import {BookingServiceImpl} from "./booking.service.impl";

const bookingServiceImpl = new BookingServiceImpl()

const bookingService = new BookingService(bookingServiceImpl)

const bookingController = new BookingController(bookingService)

export { bookingService, bookingController }