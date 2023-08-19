"use client";
import { ProductsContexts } from "@/components/context/productscontext";
import { Product, Users } from "@/types/types";
import { AddAPhoto, CancelOutlined, PhotoCamera } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, {
  InputHTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useForm } from "react-hook-form";

function MyProduct({ params }: { params: { id: string } }) {
  const id = params.id;
  const { result } = useContext(ProductsContexts);
  const { data: session, status } = useSession({ required: true });
  const navigate = useRouter();
  const [productDetails, setProductDetails] = useState<Product>();
  const [newImage, setNewImage] = useState("");
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);
  const [addImage, setAddmage] = useState(0);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://products-jtax.onrender.com/products/${id}`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
      const data = await res.json();

      setProductDetails(data);
      return data;
    };
    getData();
  }, []);
  const url = `https://products-jtax.onrender.com/products/${id}`;
  const [data, setData] = useState<Product | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    values: {
      id: productDetails?.id,
      title: productDetails?.title,
      description: productDetails?.description,
      price: productDetails?.price,
      rating: productDetails?.rating,
      stock: productDetails?.stock,
      discountPercentage: productDetails?.discountPercentage,
      brand: productDetails?.brand,
      category: productDetails?.category,
      thumbnail: productDetails?.thumbnail,
      images: productDetails?.images,
      seller: productDetails?.seller,
    },
  });

  const styleTypography = {
    fontWeight: 600,
    textTransform: "capitalize",
    fontSize: 18,
  };
  const TextFieldAddImage = (addImage: number) => {
    let content = [];
    for (let i = 0; i < addImage; i++) {
      content.push(
        <TextField
          defaultValue={productDetails?.images?.[i]}
          type="text"
          variant="outlined"
          id={`images.${i}`}
          {...register(`images.${i}`, {})}
        />
      );
    }
    return content;
  };
  const updatedata = () => {
    fetch(`${url}`, {
      method: "PUT",
      body: JSON.stringify(getValues()),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setOpen(true);
      });
  };
  return (
    <Container sx={{ my: 8 }}>
      <Box
        component={"form"}
        onSubmit={handleSubmit(() => {
          updatedata();
        })}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(2,1fr)" },
          width: "100%",
          rowGap: 3,
          columnGap: 2,
          textAlign: "start",
        }}
      >
        <Stack spacing={1} sx={{ width: "100%", display: "none" }}>
          <Typography sx={styleTypography}>id</Typography>
          <TextField
            type="text"
            variant="outlined"
            defaultValue={productDetails?.id}
            sx={{ width: { xs: "100%", md: 400 } }}
            id="id"
            {...register("id", {
              required: {
                value: true,
                message: "id is required",
              },
            })}
          />

          {errors.title?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.title?.message}
              </Alert>
            </>
          )}
        </Stack>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Typography sx={styleTypography}>title</Typography>
          <TextField
            type="text"
            variant="outlined"
            defaultValue={productDetails?.title}
            sx={{ width: { xs: "100%", md: 400 } }}
            id="title"
            {...register("title", {
              required: {
                value: true,
                message: "title is required",
              },
            })}
          />

          {errors.title?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.title?.message}
              </Alert>
            </>
          )}
        </Stack>
        <Stack spacing={1}>
          <Typography sx={styleTypography}>description</Typography>
          <TextField
            type="text"
            defaultValue={productDetails?.description}
            variant="outlined"
            id="description"
            {...register("description", {
              required: {
                value: true,
                message: "description is required",
              },
            })}
          />

          {errors.description?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.description?.message}
              </Alert>
            </>
          )}
        </Stack>
        <Stack spacing={1}>
          <Typography sx={styleTypography}>price</Typography>
          <TextField
            type="number"
            variant="outlined"
            defaultValue={productDetails?.price}
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
            id="price"
            {...register("price", {
              required: {
                value: true,
                message: "price is required",
              },
            })}
          />

          {errors.price?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.price?.message}
              </Alert>
            </>
          )}
        </Stack>
        <Stack spacing={1}>
          <Typography sx={styleTypography}>discountPercentage</Typography>
          <TextField
            type="text"
            defaultValue={productDetails?.discountPercentage}
            variant="outlined"
            id="discountPercentage"
            {...register("discountPercentage", {})}
          />

          {errors.discountPercentage?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.discountPercentage?.message}
              </Alert>
            </>
          )}
        </Stack>

        <Stack spacing={1}>
          <Typography sx={styleTypography}>stock</Typography>
          <TextField
            type="number"
            variant="outlined"
            defaultValue={productDetails?.stock}
            id="stock"
            {...register("stock", {
              required: {
                value: true,
                message: "stock is required",
              },
            })}
          />

          {errors.stock?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.stock?.message}
              </Alert>
            </>
          )}
        </Stack>
        <Stack spacing={1}>
          <Typography sx={styleTypography}>brand</Typography>
          <TextField
            defaultValue={productDetails?.brand}
            type="text"
            variant="outlined"
            id="brand"
            {...register("brand", {
              required: {
                value: true,
                message: "brand is required",
              },
            })}
          />

          {errors.brand?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.brand?.message}
              </Alert>
            </>
          )}
        </Stack>
        <Stack spacing={1}>
          <Typography sx={styleTypography}>category</Typography>
          <Autocomplete
            disablePortal
            id="category"
            options={result}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "5px!important",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderRadius: "5px",
              },
            }}
            renderInput={(params) => (
              <TextField
                defaultValue={productDetails?.category}
                {...params}
                {...register("category", {
                  required: {
                    value: true,
                    message: "category is required",
                  },
                })}
              />
            )}
          />

          {errors.category?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.category?.message}
              </Alert>
            </>
          )}
        </Stack>
        <Stack spacing={1}>
          <Typography sx={styleTypography}>thumbnail</Typography>
          <TextField
            defaultValue={productDetails?.thumbnail}
            type="text"
            variant="outlined"
            id="thumbnail"
            {...register("thumbnail", {
              required: {
                value: true,
                message: "thumbnail is required",
              },
            })}
          />

          {errors.thumbnail?.message && (
            <>
              <Alert variant="outlined" severity="error">
                {errors.thumbnail?.message}
              </Alert>
            </>
          )}
        </Stack>
        <Stack spacing={1}>
          <Typography sx={styleTypography}>images</Typography>

          <Button
            onClick={() => {
              setAddmage(addImage <= 4 ? addImage + 1 : addImage);
            }}
            endIcon={<AddAPhoto />}
          >
            add image
          </Button>
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 1,
            }}
          >
            {TextFieldAddImage(addImage)}
          </Stack>
          <Typography component="p" sx={{ color: "red", textAlign: "start" }}>
            {errors.images?.message}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            size="large"
            color="error"
            disabled
            sx={{ textAlign: "center" }}
            endIcon={<CancelOutlined />}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="success"
            sx={{ textAlign: "center" }}
            endIcon={<CheckCircleOutlineIcon />}
          >
            Validate
          </Button>
        </Stack>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product added successfully
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default MyProduct;
