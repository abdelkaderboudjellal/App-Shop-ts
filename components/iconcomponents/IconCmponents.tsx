"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSession } from "next-auth/react";
type Props = {
  countProduct: number;
  email: string;
};

const IconComponents = ({ countProduct, email }: Props) => {
  const { data: session, status } = useSession();
  const styleIcon = {
    bgcolor: "white",
    borderRadius: "50%",
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      bgcolor: "black",
      color: "white",
    },
  };
  return (
    <>
      <Stack
        width={"100%"}
        justifyContent={"space-between"}
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems={"center"}
        py={2}
      >
        <Stack direction={"row"} spacing={2}>
          <Stack>
            <Typography
              variant="subtitle1"
              component={"p"}
              sx={{ fontWeight: 700 }}
            >
              142
            </Typography>
            <Typography
              variant="subtitle1"
              component={"p"}
              sx={{ fontWeight: 700, color: "text.secondary" }}
            >
              Reviews
            </Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack>
            <Typography
              variant="subtitle1"
              component={"p"}
              sx={{ fontWeight: 700 }}
            >
              {countProduct}
            </Typography>
            <Typography
              variant="subtitle1"
              component={"p"}
              sx={{ fontWeight: 700, color: "text.secondary" }}
            >
              Product
            </Typography>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack>
            <Typography
              variant="subtitle1"
              component={"p"}
              sx={{ fontWeight: 700 }}
            >
              1.2k
            </Typography>
            <Typography
              variant="subtitle1"
              component={"p"}
              sx={{ fontWeight: 700, color: "text.secondary" }}
            >
              Followers
            </Typography>
          </Stack>
        </Stack>
        <Grid item xs={12} sm={6} md={4}>
          {session?.user?.email != email && (
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "9px", my: 1, width: "100%" }}
            >
              Follow
            </Button>
          )}
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              display: "grid",
              gridTemplateColumns: " repeat(4, 1fr)",
              mx: "auto",
            }}
          >
            <Link
              sx={styleIcon}
              href="https://www.instagram.com/abdelkader_boudjellal/"
            >
              <InstagramIcon fontSize="medium" />
            </Link>
            <Link
              sx={styleIcon}
              href="https://www.facebook.com/abdelkaderboudjellal09/"
            >
              <FacebookIcon fontSize="medium" />
            </Link>
            <Link sx={styleIcon} href="https://twitter.com/BoudjellalAek">
              <TwitterIcon fontSize="medium" />
            </Link>
            <Link
              sx={styleIcon}
              href="https://www.linkedin.com/in/abdelkader-boudjellal-29098813b/"
            >
              <LinkedInIcon fontSize="medium" />
            </Link>
          </Stack>
        </Grid>
      </Stack>
    </>
  );
};
export default IconComponents;
