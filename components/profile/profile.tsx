"use client";
import React, { useContext, useEffect, useState } from "react";
import { ProductsContexts } from "../context/productscontext";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Users } from "@/types/types";

import { getSession, useSession } from "next-auth/react";

import Image from "next/image";
import ProfileBottomNavigation from "./BottomNavigation";
import { useRouter } from "next/navigation";
type Props = {};

const profile = (props: Props) => {
  const { data: session, status } = useSession({ required: true });
  const { user, setUser } = useContext(ProductsContexts);
  const navigate = useRouter();
  const [userDetails, setUserDetails] = useState<Users>();
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
  }, [session]);

  return (
    <>
      {status === "authenticated" ? (
        <>
          <Box
            sx={{
              height: 250,
              position: "relative",
              m: "0px!important",
              padding: "0px!important",
              zIndex: "0!important",
            }}
          >
            <Image
              style={{}}
              layout="fill"
              src="/images/profileCover2.jpg"
              alt="profileCover"
              objectFit="cover"
              loading="lazy"
            />
          </Box>
          <Container sx={{ position: "relative" }}>
            <Box
              component={"div"}
              sx={{
                width: "auto",
                minHeight: 500,
                mt: -8,
                zIndex: 2,
                bgcolor: "white",
                borderRadius: " 25px  25px  0 0",
                boxShadow: 2,
              }}
            >
              <Stack sx={{ ml: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    padding: 4,
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      session?.user?.image
                        ? `${session?.user?.image}`
                        : "/images/profileLogo1.png"
                    }
                    sx={{ width: 80, height: 80 }}
                  />
                </Box>
                <Stack
                  sx={{
                    height: "100%",

                    width: "100%",
                  }}
                >
                  <Stack
                    direction={"row"}
                    width={"100%"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="500"
                      color="text.secondary"
                    >
                      {session?.user?.name
                        ? session?.user?.name
                        : `${userDetails?.firstName} ${userDetails?.lastName}`}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <ProfileBottomNavigation />
            </Box>
          </Container>
        </>
      ) : (
        <>
          <Stack
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                width: "100%",
                textAlign: "center",

                fontWeight: 700,
              }}
            >
              You are not logged in.
            </Typography>
            <Button variant="contained" onClick={() => navigate.push("/login")}>
              Login
            </Button>
          </Stack>
        </>
      )}
    </>
  );
};

export default profile;
