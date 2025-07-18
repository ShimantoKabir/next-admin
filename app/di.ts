import { LoginServiceImp } from "@/app/(auth)/login/services/login-imp.service";
import {
  LoginService,
  LoginServiceToken,
} from "@/app/(auth)/login/services/login.service";
import {
  CookieService,
  CookieServiceToken,
} from "@/app/utils/cookie/CookieService";
import { CookieServiceImp } from "@/app/utils/cookie/CookieServiceImp";
import {
  RegistrationService,
  RegistrationServiceToken,
} from "@/app/(auth)/registration/services/registration.service";
import { RegistrationServiceImp } from "@/app/(auth)/registration/services/registration-imp.service";
import { Container } from "inversify";

const container: Container = new Container();

container.bind<LoginService>(LoginServiceToken).to(LoginServiceImp);
container
  .bind<RegistrationService>(RegistrationServiceToken)
  .to(RegistrationServiceImp);
container.bind<CookieService>(CookieServiceToken).to(CookieServiceImp);

export { container };
