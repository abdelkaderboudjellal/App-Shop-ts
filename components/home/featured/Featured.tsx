import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import { Box, Container, Grid } from "@mui/material";
import { Product } from "@/types/types";

type Props = {
  products: Product[];
};

const Featured = ({ products }: Props) => {
  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Grid container spacing={2}>
          {products.slice(37, 41).map((item) => (
            <ImageListItem key={item.thumbnail} sx={{ position: "relative" }}>
              <img
                src={`${item.thumbnail}?w=248&fit=crop&auto=format`}
                srcSet={`${item.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar sx={{ position: "absolute", height: "100%" }} />
            </ImageListItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Featured;
