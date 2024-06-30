import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

export interface AuthService {
	register(registerDto: RegisterDto): Promise<any>;
	login(loginDto: LoginDto): Promise<any>;
}
