import { Box, Container, Stack, Typography } from "@mui/material";

import CarouselHome from "../flashSales/CarouselHome";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";

import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { GiSunglasses } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import CategoryComponent from "./CategoryComponent";
import TitlePages from "@/element/TitlePages";
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
      <TitlePages title={"category"} subtitle={"browse by category"} />

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
