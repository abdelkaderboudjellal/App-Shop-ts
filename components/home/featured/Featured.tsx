import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Product } from "@/types/types";
import TitlePages from "@/element/TitlePages";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import NewArrivalComponent from "@/element/NewArrivalComponent";
import { DeliveryDining, HeadsetMic } from "@mui/icons-material";

type Props = {
  products: Product[];
};

const Featured = ({ products }: Props) => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <TitlePages title={"Featured"} subtitle={"new arrival"} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(4, 1fr)" },
          gap: 1,
          gridTemplateRows: { md: "auto" },
          gridTemplateAreas: {
            md: `"main main header header"
            "main main header header"
        "main main footer  sidebar"
        "main main footer sidebar"`,
          },
        }}
      >
        <Box
          sx={{
            gridArea: { md: "header" },

            position: "relative",
          }}
        >
          <NewArrivalComponent
            images={
              "https://m.media-amazon.com/images/I/419Xus6BJAL._AC_SL1000_.jpg"
            }
            title={"PlayStation 5 Console (KSA Version)"}
            description={
              "Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible PlayStation games"
            }
          />
        </Box>
        <Box
          sx={{
            gridArea: { md: "main" },

            position: "relative",
          }}
        >
          <NewArrivalComponent
            images={
              "https://m.media-amazon.com/images/I/618PlE1DM8L._AC_SL1500_.jpg"
            }
            title={"META Quest 2"}
            description={
              "META Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            }
          />
        </Box>
        <Box
          sx={{
            gridArea: { md: "sidebar" },

            position: "relative",
          }}
        >
          <NewArrivalComponent
            images={
              "https://m.media-amazon.com/images/I/71HrsjJY93L._AC_UX679_.jpg"
            }
            title={"CRRJU"}
            description={
              "CRRJU Men's Minimalist Casual Luxury Auto Date Watches Fashion Business Japan Movement Quartz Waterproof Wristwatches for Men Stainsteel Steel Band Watch"
            }
          />
        </Box>
        <Box
          sx={{
            gridArea: { md: "footer" },

            position: "relative",
          }}
        >
          <NewArrivalComponent
            images={"https://i.dummyjson.com/data/products/13/thumbnail.webp"}
            title={"Metal Ceramic Flower"}
            description={
              "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men"
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack spacing={2} alignItems={"center"} my={5}>
          <Box
            sx={{
              width: 100,
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              padding: 8,
              bgcolor: `color-mix(in srgb, black 20%, transparent)`,
            }}
          >
            <DeliveryDining
              sx={{
                fontSize: 90,
                bgcolor: "black",
                color: "white",
                borderRadius: "50%",
                padding: 2,
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            free and fast delivery
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            free delivery for all orders over $140
          </Typography>
        </Stack>
        <Stack spacing={2} alignItems={"center"} my={5}>
          <Box
            sx={{
              width: 100,
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              padding: 8,
              bgcolor: `color-mix(in srgb, black 20%, transparent)`,
            }}
          >
            <HeadsetMic
              sx={{
                fontSize: 90,
                bgcolor: "black",
                color: "white",
                borderRadius: "50%",
                padding: 2,
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            24/7 customer service
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            friendly 24/7 customer support
          </Typography>
        </Stack>
        <Stack spacing={2} alignItems={"center"} my={5}>
          <Box
            sx={{
              width: 100,
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              padding: 8,
              bgcolor: `color-mix(in srgb, black 20%, transparent)`,
            }}
          >
            <BeenhereOutlinedIcon
              sx={{
                fontSize: 90,
                bgcolor: "black",
                color: "white",
                borderRadius: "50%",
                padding: 2,
              }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: 700 }}
          >
            money back guarantee
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            we return money within 30 days
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default Featured;
