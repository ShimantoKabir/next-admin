import "reflect-metadata";
import { container } from "tsyringe";
import { LoginServiceImp } from "@/app/(auth)/login/services/login-imp.service";
import { LoginServiceToken } from "@/app/(auth)/login/services/login.service";

container.register(LoginServiceToken, { useClass: LoginServiceImp });

export { container };
