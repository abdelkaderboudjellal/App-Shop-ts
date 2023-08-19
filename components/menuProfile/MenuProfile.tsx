"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";
import Drawer from "../drawer/Drawers";
import logo from "../../public/images/LogoShop.svg";

import LogoShopView from "../drawer/LogoShopView";

import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductSelect from "../ProductSelect/ProductSelect";

import { useContext, useEffect, useState } from "react";
import { ProductsContexts } from "../context/productscontext";
import {
  AccountCircle,
  Logout,
  Person,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import stringAvatar from "../avatar/stringAvatar";
import { Users } from "@/types/types";
import { getSession, useSession } from "next-auth/react";
type Props = {
  user: string;
};

const MenuProfile = () => {
  const { user, setUser } = useContext(ProductsContexts);
  const navigate = useRouter();
  const [userDetails, setUserDetails] = useState<Users>();
  const { data: session, status } = useSession();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://products-jtax.onrender.com/user?email=${session?.user?.email}`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
      const data = await res.json();

      setUserDetails(data[0]);
    };
    getData();
  }, [user]);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const styleMenu = {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  };
  return (
    <>
      <Button
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
      >
        {/*    <Avatar {...stringAvatar(session?.user?.email)} /> */}
        <Avatar
          alt="Remy Sharp"
          src={
            session?.user?.image
              ? `${session?.user?.image}`
              : "/images/profileLogo1.png"
          }
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: styleMenu,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            navigate.push("/profile");
          }}
        >
          <Avatar
            alt="Remy Sharp"
            sizes="small"
            src={
              session?.user?.image
                ? `${session?.user?.image}`
                : "/images/profileLogo1.png"
            }
          />

          {/* <Avatar {...stringAvatar(session?.user?.email )} /> */}
          <Stack>
            <Typography variant="body1" fontWeight="500">
              {" "}
              {session?.user?.email}
            </Typography>
            <Typography variant="body1" fontWeight="500" color="text.secondary">
              {session?.user?.name
                ? session?.user?.name
                : `${userDetails?.firstName} ${userDetails?.lastName}`}
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PersonOutlineOutlinedIcon
            fontSize="medium"
            color="primary"
            sx={{ mr: 2 }}
          />{" "}
          My account
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            setUser("");
            navigate.push("/login");
          }}
        >
          <ListItemIcon>
            <PersonAddAltOutlinedIcon fontSize="medium" color="primary" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="medium" color="primary" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            /*  setUser(""); */
            signOut();
            navigate.push("/login");
          }}
        >
          <ListItemIcon>
            <Logout fontSize="medium" color="primary" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuProfile;
