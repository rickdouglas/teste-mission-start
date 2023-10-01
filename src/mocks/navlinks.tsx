import HomeIcon from "@mui/icons-material/Home";
import AddCardIcon from "@mui/icons-material/AddCard";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const navlinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    label: "Cadastro",
    url: "/cadastro",
    icon: <AddCardIcon />,
  },
  {
    id: 3,
    label: "Lista",
    url: "/lista",
    icon: <FormatListNumberedIcon />,
  },
  {
    id: 4,
    label: "Carrinho",
    url: "/carrinho",
    icon: <ShoppingCartIcon />,
  },
];
