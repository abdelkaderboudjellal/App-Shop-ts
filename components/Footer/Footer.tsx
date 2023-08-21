"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button } from "@mui/material";
import { Call, Email } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Footer() {
  const navigate = useRouter();
  const styleIcon = {
    bgcolor: "#313131",
    borderRadius: "50%",
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    "&:hover ": {
      bgcolor: "white",
      color: "black",
    },
    p: 3,
  };
  const styleButton = {
    my: 1,
    "&::before": {
      content: '" "',
      position: "absolute",
      width: "100%",
      height: "3px",
      borderRadius: "4px",
      bgcolor: "white",
      bottom: "0",
      left: "0",
      transformOrigin: "right",
      transform: "scaleX(0)",
      transition: "transform .3s ease-in-out",
    },
    "&:hover::before": {
      transformOrigin: "left",
      transform: "scaleX(1)",
    },
    fontSize: "1.2rem",
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          p: { xs: 4, sm: 8 },
          backgroundColor: "black",
          mb: { xs: 9, md: 0 },
        }}
      >
        <Container maxWidth="xl" sx={{ height: "100%", textAlign: "start" }}>
          <Grid container sx={{ justifyItems: "center" }} columns={13}>
            <Grid item xs={12} sm={6} md={4} mx="4px">
              <Button
                disableRipple
                color="secondary"
                sx={styleButton}
                onClick={() => navigate.push("/")}
              >
                Home
              </Button>

              <Typography variant="body2" color="secondary" fontWeight={700}>
                Products
              </Typography>
              <Typography variant="body2" color="secondary" fontWeight={700}>
                Local Shopping
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button disableRipple sx={styleButton} color="secondary">
                Contact
              </Button>
              <Typography
                variant="body1"
                color="secondary"
                fontWeight={600}
                px={1}
              >
                Address
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  justifyItems: "start",
                  alignItems: "start",
                  px: 1,
                }}
              >
                <Email color="secondary" fontSize="small" /> :
                <Link
                  sx={{
                    color: "white",
                    textDecoration: "underline black",
                    pl: 2,
                  }}
                  href="mailto:kaderboudj94@gmail.com"
                >
                  kaderboudj94@gmail.com
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  justifyItems: "start",
                  alignItems: "start",
                  px: 1,
                }}
              >
                <Call color="secondary" fontSize="small" /> :
                <Link
                  sx={{
                    color: "white",
                    textDecoration: "underline black",
                    pl: 2,
                  }}
                  href="tel:+213659066090"
                >
                  0659066090
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button disableRipple color="secondary" sx={styleButton}>
                Follow
              </Button>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(4, 1fr)",
                    sm: "repeat(4, 1fr)",
                    md: " repeat(3, 1fr)",
                    lg: " repeat(4, 1fr)",
                  },
                  mx: "auto",
                  gap: 1,
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
          </Grid>
          <Box mt={5}>
            <Typography
              variant="body2"
              color="#bdbdbd"
              fontWeight={700}
              align="center"
            >
              Copyright
              <Link color="#bdbdbd" href="mailto:kaderboudj94@gmail.com">
                Abdelkader
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
