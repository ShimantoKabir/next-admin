import { ErrorResponseDto } from "@/app/network/error-response.dto";
import { LoginRequestDto } from "../dtos/login-request.dto";
import { LoginResponseDto } from "../dtos/login-response.dto";

export interface LoginService {
  onLogin: (
    loginRequestDto: LoginRequestDto
  ) => Promise<LoginResponseDto | ErrorResponseDto>;
}

export const LoginServiceToken = Symbol("LoginService");
