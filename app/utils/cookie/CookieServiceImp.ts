import { CookieService } from "./CookieService";

export class CookieServiceImp implements CookieService {
  getCookie = (name: string): string | null => {
    let cname = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cname) == 0) {
        return c.substring(cname.length, c.length);
      }
    }
    return null;
  };

  setCookie = (name: string, value: string, expiredDays: number): boolean => {
    const d = new Date();
    d.setTime(d.getTime() + expiredDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
    return true;
  };

  deleteCookie = (name: string): boolean => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    return true;
  };
}
