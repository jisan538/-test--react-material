import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const navConfig = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <AutoAwesomeMosaicOutlinedIcon />,
  },
  {
    id: 2,
    title: "Product",
    link: "/product",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    id: 3,
    title: "Zone",
    link: "/zone",
    icon: <MyLocationOutlinedIcon />,
  },
  {
    id: 4,
    title: "Salesman",
    link: "/salesman",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    id: 5,
    title: "Daily load",
    link: "/daily-load",
    icon: <HourglassEmptyOutlinedIcon />,
  },
  {
    id: 6,
    title: "Report",
    link: "/report",
    icon: <ContentPasteOutlinedIcon />,
  },
];
const settings = [{ id: 1, title: "Name" }];
export {navConfig,settings};
