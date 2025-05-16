export interface CookieService {
  setCookie: (name: string, value: string, expiredDays: number) => boolean;
  getCookie: (name: string) => string | null;
  deleteCookie: (name: string) => boolean;
}

export const CookieServiceToken = Symbol("CookieService");
