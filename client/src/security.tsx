import { useRouter } from "next/router";
import ROUTES from "src/constants/router";
export function isLogin() {
  if (process && process.env.browser) {
    // Client-side-only code
    return !!global?.window?.localStorage.getItem("token");
  }
}

export const useAuthentication = () => {
  const router = useRouter();

  let token = global?.window?.localStorage.getItem("token");
  let current_route = ROUTES.find((route: any) => {
    console.log("route?.LINK", route?.LINK);
    console.log("router?.pathname", router?.pathname);
    return route?.LINK === router?.pathname;
  });

  let access = {
    authenticated: false,
    secure: false,
    token: token || null,
    redirect: false,
  };

  if (current_route) {
    console.log("current_route", current_route);
    if (!current_route?.SECURE) {
      if (!token) {
        access.authenticated = true;
        access.redirect = true;
        return access;
      }
      access.authenticated = true;
      return access;
    } else {
      if (process.env.browser && token) {
        access.authenticated = true;
        access.secure = true;
        return access;
      }
    }
  }
  access.redirect = true;
  return access;
};
