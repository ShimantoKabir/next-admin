import "reflect-metadata";
import { LoginRequestDto } from "../dtos/login-request.dto";
import { LoginResponseDto } from "../dtos/login-response.dto";
import { LoginService } from "./login.service";
import { injectable } from "tsyringe";
import { ErrorResponseDto } from "@/app/network/error-response.dto";
import api from "@/app/network/interceptor";

@injectable()
export class LoginServiceImp implements LoginService {
  onLogin = async (
    loginRequestDto: LoginRequestDto
  ): Promise<LoginResponseDto | ErrorResponseDto> => {
    try {
      const response = await api.post<LoginResponseDto>(
        "/auth/login",
        loginRequestDto
      );

      return response.data;
    } catch (error) {
      return error as ErrorResponseDto;
    }
  };
}
