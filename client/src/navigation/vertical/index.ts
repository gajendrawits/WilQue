// ** Icon imports
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import HelpIcon from '@material-ui/icons/Help';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ScheduleIcon from '@material-ui/icons/Schedule';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeIcon,
      path: '/'
    },
    {
      title: 'Users',
      icon: GroupIcon,
      path: '/users'
    },
    {
      title: 'Tags ',
      icon: LocalOfferIcon,
      path: '/tags'
    },
    {
      title: 'My Questions ',
      icon: HelpIcon,
      path: '/myQuestions'
    },
    
    // {
    //   title: 'Pagination ',
    //   icon: HelpIcon,
    //   path: '/pagination'
    // },
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
      sectionTitle: 'Developer tools'
    },
    {
      title: 'Date-time converter ',
      icon: ScheduleIcon,
      path: '/date-time-converter'
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
      title: 'Lorem ipsum generator ',
      icon: TextFieldsIcon,
      path: '/lorem-ipsum-generator'
    },
    // {
    //   icon: ListAltIcon,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // },
    {
      icon: FormatColorTextIcon,
      title: 'Color-Picker',
      path: '/colorpicker'
    },
    
   
  ]
}

export default navigation