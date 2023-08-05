"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button } from "@mui/material";
import { Call, Email } from "@mui/icons-material";

export default function Footer() {
  const styleIcon = {
    bgcolor: "#bdbdbd",
    borderRadius: "50%",
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      bgcolor: "white",
    },
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
              <Typography variant="h6" color="secondary" gutterBottom>
                Home
              </Typography>
              <Typography variant="body2" color="secondary" fontWeight={700}>
                Products
              </Typography>
              <Typography variant="body2" color="secondary" fontWeight={700}>
                Local Shopping
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" color="secondary" gutterBottom>
                Contact
              </Typography>
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
              <Typography variant="h6" color="secondary" gutterBottom>
                Follow
              </Typography>
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
                  <InstagramIcon fontSize="medium" color="primary" />
                </Link>
                <Link
                  sx={styleIcon}
                  href="https://www.facebook.com/abdelkaderboudjellal09/"
                >
                  <FacebookIcon color="primary" fontSize="medium" />
                </Link>
                <Link sx={styleIcon} href="https://twitter.com/BoudjellalAek">
                  <TwitterIcon fontSize="medium" color="primary" />
                </Link>
                <Link
                  sx={styleIcon}
                  href="https://www.linkedin.com/in/abdelkader-boudjellal-29098813b/"
                >
                  <LinkedInIcon fontSize="medium" color="primary" />
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
