import cors from "cors";
import express from "express";
import { configDotenv } from "dotenv";
import http from "http";
import helmet from "helmet";
import { ErrorHandlerMiddleware } from "./middlewares/error-handler.middleware";
import bodyParser from "body-parser";
import { router } from "./routes";

configDotenv();

class App {
	private readonly app: express.Express = express();
	private readonly server: http.Server<
		typeof http.IncomingMessage,
		typeof http.ServerResponse
	>;
	constructor() {
		this.server = http.createServer(this.app);
		this.setupMiddlewares();
		this.setupRoutes();
		this.setupErrorHandler();
	}

	private setupMiddlewares() {
		this.app.use(helmet());
		this.app.use(bodyParser.json());
	}

	private setupRoutes() {
		this.app.get("/health-check", (request, response) => {
			return response.status(200).send("Health Checked");
		});
		this.app.use(cors(), router);
	}

	private setupErrorHandler() {
		this.app.use(ErrorHandlerMiddleware());
	}

	public startServer(port: number, callback: () => unknown) {
		this.app.listen(port, callback);
	}
}

export const app = new App();
