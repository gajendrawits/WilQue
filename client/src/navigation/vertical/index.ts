// ** Icon imports
import Table from "mdi-material-ui/Table";
import CubeOutline from "mdi-material-ui/CubeOutline";
import HomeOutline from "mdi-material-ui/HomeOutline";
import FormatLetterCase from "mdi-material-ui/FormatLetterCase";

// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: HomeOutline,
      path: "/",
      secure: true,
    },
    {
      title: "Login",
      icon: HomeOutline,
      path: "/login",
      secure: false,
    },
    {
      title: "Users",
      icon: HomeOutline,
      path: "/users",
      secure: false,
    },

    {
      title: "Tags ",
      icon: Table,
      path: "/tags",
      secure: false,
    },
    {
      title: "Questions ",
      icon: Table,
      path: "/questions",
      secure: false,
    },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    {
      sectionTitle: "Converter",
    },
    {
      title: "Date-time converter ",
      icon: FormatLetterCase,
      path: "/date-time-converter",
    },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    {
      title: "Lorem ipsum generator ",
      icon: Table,
      path: "/lorem-ipsum-generator",
      secure: false,
    },
    {
      icon: CubeOutline,
      title: "Form Layouts",
      path: "/form-layouts",
      secure: false,
    },
    {
      icon: CubeOutline,
      title: "Color-Picker",
      path: "/colorpicker",
      secure: false,
    },
  ];
};

export default navigation;
