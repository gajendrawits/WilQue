import { useRouter } from "next/router";
import  ROUTES  from "src/navigation/vertical";

export function isLogin() {
  if (process.browser) {
    // Client-side-only code
    return !!global?.window?.localStorage.getItem("token");
  }
}

export const useAuthentication = () => {
  const router = useRouter();

  let token = global?.window?.localStorage.getItem("token");
  let current_route = Object.values(ROUTES).find(
    (route) => route["LINK"] === router?.pathname
  );

  let access = {
    authenticated: false,
    secure: false,
    token: token || null,
    redirect: false,
  };

  if (current_route) {
    if (!current_route?.SECURE) {
      if (!!token) {
        access.authenticated = true;
        access.redirect = true;
        return access;
      }
      access.authenticated = true;
      return access;
    } else {
      if (process.browser && token) {
        access.authenticated = true;
        access.secure = true;
        return access;
      }
    }
  }
  access.redirect = true;
  return access;
};
