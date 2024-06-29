import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import UserService from "../users/user.service.impl";

export class AuthServiceImpl implements AuthService {
	async register(registerDto: RegisterDto): Promise<any> {
		return await UserService.create(registerDto);
	}

	async login(loginDto: LoginDto): Promise<any> {
		const { email, password } = loginDto;
		const user = await UserService.findByEmail(email);
		if (!user || password !== user.password) {
			throw new Error('Invalid email or password');
		}
		return user;
	}
}
