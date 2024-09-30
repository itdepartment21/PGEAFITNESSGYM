import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import SwitchLeftOutlinedIcon from '@mui/icons-material/SwitchLeftOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlinedIcon,
    href: "/dashboards/dashboard1",
  },
  {
    title: "Create Ticket",
    icon: AddToPhotosOutlinedIcon,
    href: "/form-elements/create",
  },
  {
    title: "Generate Ticket",
    icon: AspectRatioOutlinedIcon,
    href: "/form-elements/generate",
  },
  {
    title: "Switch",
    icon: SwitchLeftOutlinedIcon,
    href: "/form-elements/switch",
  },
  {
    title: "Form",
    icon: DescriptionOutlinedIcon,
    href: "/form-layouts/form-layouts",
  },
];

export default Menuitems;
