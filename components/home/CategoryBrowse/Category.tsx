import { Box, Container, Stack, Typography } from "@mui/material";

import CarouselHome from "../flashSales/CarouselHome";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";

import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { GiSunglasses } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import CategoryComponent from "./CategoryComponent";
type Props = {};

const categories = [
  {
    name: "phone",
    icons: <BsPhone style={{ fontSize: 45 }} />,
  },
  {
    name: "Laptop",
    icons: <LaptopChromebookRoundedIcon style={{ fontSize: 45 }} />,
  },
  { name: "watch", icons: <BsWatch size={45} /> },
  { name: "decoration", icons: <ChairOutlinedIcon style={{ fontSize: 45 }} /> },
  { name: "motorcycle", icons: <TwoWheelerIcon style={{ fontSize: 45 }} /> },

  { name: "sunglasses", icons: <GiSunglasses style={{ fontSize: 45 }} /> },
];
const Category = (props: Props) => {
  return (
    <Container sx={{ my: 2 }}>
      <Stack alignItems={"center"} spacing={2} direction={"row"}>
        <Box
          sx={{
            width: "15px",
            height: "40px",
            bgcolor: "#db4444",
            borderRadius: "3px",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{ color: "#db4444", fontWeight: 600 }}
        >
          category
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"start"}
        spacing={{ xs: 2, md: 10 }}
        pt={2}
      >
        <Typography variant="h5" fontWeight={600} minWidth={"max-content"}>
          browse by category
        </Typography>
      </Stack>

      <CarouselHome desktop={5} tablet={4} mobile={2}>
        {categories.map((category) => {
          return (
            <CategoryComponent
              key={category.name}
              name={category.name}
              icons={category.icons}
            />
          );
        })}
      </CarouselHome>
    </Container>
  );
};

export default Category;
