import "reflect-metadata";
import { container } from "tsyringe";
import { LoginServiceImp } from "@/app/(auth)/login/services/login-imp.service";
import { LoginServiceToken } from "@/app/(auth)/login/services/login.service";
import { CookieServiceToken } from "@/app/utils/cookie/CookieService";
import { CookieServiceImp } from "@/app/utils/cookie/CookieServiceImp";
import { RegistrationServiceToken } from "@/app/(auth)/registration/services/registration.service";
import { RegistrationServiceImp } from "@/app/(auth)/registration/services/registration-imp.service";

container.register(LoginServiceToken, { useClass: LoginServiceImp });
container.register(RegistrationServiceToken, {
  useClass: RegistrationServiceImp,
});
container.register(CookieServiceToken, { useClass: CookieServiceImp });

export { container };
