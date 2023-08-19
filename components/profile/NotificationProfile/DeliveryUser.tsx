import { Users } from "@/types/types";
import {
  Email,
  EmailOutlined,
  Language,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import { Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {
  email: string;
};

const DeliveryUser = ({ email }: Props) => {
  const [userDetails, setUserDetails] = useState<Users>();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://products-jtax.onrender.com/user?email=${email}`,
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
  }, []);

  return (
    <>
      <Paper
        sx={{
          /*      display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" }, */
          /* border: "2px solid #757575", */ padding: 1,
          borderRadius: "9px",
          boxShadow: 2,
          py: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          spacing={2}
        >
          <Stack direction={"row"} spacing={1}>
            <Typography>{userDetails?.firstName} </Typography>
            <Typography>{userDetails?.lastName} </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <LocationOn sx={{ color: "#2196f3" }} />
            <Typography>{userDetails?.location} </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <Phone sx={{ color: "#00695c" }} />
            <Typography>{userDetails?.phone} </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <Language />
            <Typography>{userDetails?.email} </Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default DeliveryUser;
