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
import { Box, Button, Divider, InputAdornment, TextField } from "@mui/material";
import { Call, Email, Send } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const navigate = useRouter();
  const styleIcon = {
    bgcolor: "#313131",
    borderRadius: "50%",
    width: 25,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    "&:hover ": {
      bgcolor: "white",
      color: "black",
    },
    p: 2,
  };
  const styleButton = {
    color: "white",
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
    fontWeight: "500",
  };

  return (
    <Box
      component="footer"
      sx={{
        p: { xs: 4, sm: 8 },
        backgroundColor: "black",
        mb: { xs: 9, md: 0 },
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%", textAlign: "start" }}>
        <Grid container sx={{ justifyItems: "center" }} columns={12}>
          <Grid item xs={12} sm={6} md={4}>
            <Link component={"button"} sx={styleButton} href="/">
              Home
            </Link>

            <Typography variant="body2" color="secondary" fontWeight={500}>
              Products
            </Typography>
            <Typography variant="body2" color="secondary" fontWeight={500}>
              Local Shopping
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link component={"button"} sx={styleButton} href="/">
              Contact
            </Link>
            <Typography
              variant="body1"
              color="secondary"
              fontWeight={500}
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
              <Email color="secondary" fontSize="small" />
              <Link
                sx={{
                  color: "white",
                  textDecoration: "underline black",
                  pl: 1,
                }}
                href="mailto:kaderboudj94@gmail.com"
              >
                kaderboudj94@gmail.com
              </Link>
            </Box>
            <TextField
              id="input-with-icon-textfield"
              label="Entre your email"
              variant="outlined"
              sx={{
                my: 2,
                "& .MuiInputLabel-root": {
                  color: "white!important",
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "white!important" },
                },
              }}
              InputProps={{
                sx: {
                  borderColor: "white!important",
                  color: "white!important",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <Send color="secondary" />
                  </InputAdornment>
                ),
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                justifyItems: "start",
                alignItems: "start",
                px: 1,
              }}
            >
              <Call color="secondary" fontSize="small" />
              <Link
                sx={{
                  color: "white",
                  textDecoration: "underline black",
                  pl: 1,
                }}
                href="tel:+213659066090"
              >
                0659066090
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link component={"button"} sx={styleButton} href="/">
              Download App
            </Link>
            <Typography variant="subtitle2" sx={{ color: "#bdbdbd" }}>
              Save $3 with App New User Only
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Image
                width={100}
                height={100}
                src="/images/Qr-code.png"
                alt={"Qr code"}
              />
              <Stack spacing={1} width={"100%"}>
                <Box
                  sx={{
                    display: "flex",
                    border: "1px solid white",
                    borderRadius: "9px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    width: 140,
                  }}
                >
                  <Image
                    width={25}
                    height={25}
                    src="/images/playstore.png"
                    alt={"google-playstore"}
                  />
                  <Stack>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      get it on
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "white", fontWeight: "600" }}
                    >
                      google play
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    border: "1px solid white",
                    borderRadius: "9px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    width: 140,
                  }}
                >
                  <Image
                    width={20}
                    height={25}
                    src="/images/apple.png"
                    alt={"Apple"}
                  />
                  <Stack>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      get it on
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "white", fontWeight: "600" }}
                    >
                      App Store
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Stack>

            <Stack direction="row" alignItems="center" my={2} spacing={2}>
              <Link
                sx={styleIcon}
                href="https://www.instagram.com/abdelkader_boudjellal/"
              >
                <InstagramIcon fontSize="small" />
              </Link>
              <Link
                sx={styleIcon}
                href="https://www.facebook.com/abdelkaderboudjellal09/"
              >
                <FacebookIcon fontSize="small" />
              </Link>
              <Link sx={styleIcon} href="https://twitter.com/BoudjellalAek">
                <TwitterIcon fontSize="small" />
              </Link>
              <Link
                sx={styleIcon}
                href="https://www.linkedin.com/in/abdelkader-boudjellal-29098813b/"
              >
                <LinkedInIcon fontSize="small" />
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#313131", my: 2.5 }} />
        <Box mt={2}>
          <Typography
            variant="body2"
            color="#bdbdbd"
            fontWeight={700}
            align="center"
          >
            Copyright
            <Link color="#bdbdbd" href="mailto:kaderboudj94@gmail.com">
              Abdelkader
            </Link>
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
