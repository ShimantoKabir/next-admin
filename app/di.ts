import "reflect-metadata";
import { container } from "tsyringe";
import { LoginServiceImp } from "@/app/(auth)/login/services/login-imp.service";
import { LoginServiceToken } from "@/app/(auth)/login/services/login.service";
import { CookieServiceToken } from "./utils/cookie/CookieService";
import { CookieServiceImp } from "./utils/cookie/CookieServiceImp";

container.register(LoginServiceToken, { useClass: LoginServiceImp });
container.register(CookieServiceToken, { useClass: CookieServiceImp });

export { container };
