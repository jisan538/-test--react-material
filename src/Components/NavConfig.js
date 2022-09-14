import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";

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
    icon: <HourglassEmptyOutlinedIcon />
  },
  {
    id: 6,
    title: "Report",
    link: "/report",
    icon: <ContentPasteOutlinedIcon />,
  },
];

export default navConfig;
