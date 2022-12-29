// ** Icon imports
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import HelpIcon from "@material-ui/icons/Help";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import ScheduleIcon from "@material-ui/icons/Schedule";

// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: HomeIcon,
      path: "/",
    },
    {
      title: "Users",
      icon: GroupIcon,
      path: "/users",
    },
    {
      title: "Tags ",
      icon: LocalOfferIcon,
      path: "/tags",
    },
    
    {
      title: "My Questions ",
      icon: HelpIcon,
      path: "/myquestions",
    },
    {
      sectionTitle: "Developer tools",
    },
    {
      title: "Date-time converter ",
      icon: ScheduleIcon,
      path: "/date-time-converter",
    },

    {
      title: "Lorem ipsum generator ",
      icon: TextFieldsIcon,
      path: "/lorem-ipsum-generator",
    },

    {
      icon: FormatColorTextIcon,
      title: "Color-Picker",
      path: "/colorpicker",
    },
  ];
};

export default navigation;
