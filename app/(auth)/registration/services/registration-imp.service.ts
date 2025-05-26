import "reflect-metadata";
import { injectable } from "tsyringe";
import api from "@/app/network/interceptor";
import { RegistrationService } from "./registration.service";
import { ErrorResponseDto } from "@/app/network/error-response.dto";
import { RegistrationRequestDto } from "../dtos/registration-request.dto";
import { RegistrationResponseDto } from "../dtos/registration-response.dto";
import { OtpRequestDto } from "../dtos/otp-request.dto";
import { OtpResponseDto } from "../dtos/otp-response.dto";

@injectable()
export class RegistrationServiceImp implements RegistrationService {
  onOtpVerify = async (
    otpRequestDto: OtpRequestDto
  ): Promise<OtpResponseDto | ErrorResponseDto> => {
    try {
      const response = await api.post<RegistrationResponseDto>(
        "/users/verify",
        otpRequestDto
      );

      return response.data;
    } catch (error) {
      return error as ErrorResponseDto;
    }
  };

  onRegistration = async (
    registrationRequestDto: RegistrationRequestDto
  ): Promise<RegistrationResponseDto | ErrorResponseDto> => {
    try {
      const response = await api.post<RegistrationResponseDto>(
        "/users/registration",
        registrationRequestDto
      );

      return response.data;
    } catch (error) {
      return error as ErrorResponseDto;
    }
  };
}
