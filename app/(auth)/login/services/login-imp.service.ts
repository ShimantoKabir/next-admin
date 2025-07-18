import { LoginRequestDto } from "../dtos/login-request.dto";
import { LoginResponseDto } from "../dtos/login-response.dto";
import { LoginService } from "./login.service";
import { ErrorResponseDto } from "@/app/network/error-response.dto";
import api from "@/app/network/interceptor";
import {
  CookieService,
  CookieServiceToken,
} from "@/app/utils/cookie/CookieService";
import { container } from "@/app/di";

export class LoginServiceImp implements LoginService {
  cookieService = container.get<CookieService>(CookieServiceToken);

  onLogin = async (
    loginRequestDto: LoginRequestDto
  ): Promise<LoginResponseDto | ErrorResponseDto> => {
    try {
      const response = await api.post<LoginResponseDto>(
        "/auth/login",
        loginRequestDto
      );

      this.cookieService.setCookie(
        "access-token",
        response.data.accessToken,
        1
      );
      this.cookieService.setCookie(
        "refresh-token",
        response.data.refreshToken,
        1
      );

      return response.data;
    } catch (error) {
      return error as ErrorResponseDto;
    }
  };
}
