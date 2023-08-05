"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LaodingPreviewProduct from "../Laoding/LaodingPreviewProduct";

import { Product } from "@/types/types";
import { ProductsContexts } from "@/components/context/productscontext";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
type Props = {
  param: string;
};


const PreviewProduct = ({ param }: Props) => {
  const { addProduct } = useContext(ProductsContexts);

  const [image, setImage] = useState<string[]>();
  const [value, setValue] = useState<number>(0);
  const [productPreview, setProductPreview] = useState<Product | undefined>();

  useEffect(() => {
    const getData = async () =>{

      const res =  await fetch(`https://products-jtax.onrender.com/products/${param}`,
      {
        next:{
          revalidate:60
        }
      })
      const data = await res.json()
      setProductPreview(data);
      setImage([data.thumbnail]);
      if (data.images.length > 0) {
        setImage([...data.images]);
      }
    }
    getData()
  
  }, []);

  const handlChange = (event: any) => {
    setValue(event.target.value);
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [Animation, setAnimation] = useState("0");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  //----------------alert added to cart
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {productPreview && (
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "repeat(2,1fr)" },
            py: 12,
            gap: 3,
          }}
        >
          <Stack sx={{ mb: { sm: 10 } }}>
            <Box
              sx={{
                mb: { sm: 10 },
                color: "white",
                fontSize: "20px",
                width: "100%",
                maxWidth: "1360px",
                mx: "auto",
                position: "sticky",
                top: "50px",
              }}
            >
              <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="Carousel"
              >
                {image?.map((img) => (
                  <img key={img} src={img} alt={img} />
                ))}
              </Carousel>
            </Box>
          </Stack>

          <Stack>
            <Stack
              width={"100%"}
              spacing={2}
              direction={"column"}
              alignItems={"start"}
            >
              <Typography
                sx={{ fontWeight: "600", color: "primary" }}
                component="h2"
                variant="h4"
              >
                {productPreview.title}
              </Typography>
              <Typography variant="body1" component="h1">
                $ {productPreview.price}
              </Typography>
              <Typography variant="body1" component="h1">
                {productPreview.category} / {productPreview.brand}
              </Typography>
              <Stack spacing={2} width={"40%"} alignItems={"start"}>
                <Typography variant="body1" component="h1">
                  Quantity
                </Typography>

                <TextField
                  size="small"
                  type="number"
                  value={value}
                  sx={{ width: 1 }}
                  onChange={handlChange}
                />
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{ color: "white" }}
                  fullWidth
                  onClick={() => {
                    if (value > 0) {
                      addProduct(productPreview.id, value);
                      setOpen(true);
                    }
                  }}
                >
                  Add to cart
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Added ( {value} ) product to Cart
                  </Alert>
                </Snackbar>
              </Stack>
              <Accordion
                expanded={expanded === "aek"}
                onChange={handleChange("aek")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Description
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: "start" }}>
                    {productPreview.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Stack>
        </Container>
      )}
      {!productPreview && <LaodingPreviewProduct />}
    </>
  );
};

export default PreviewProduct;
