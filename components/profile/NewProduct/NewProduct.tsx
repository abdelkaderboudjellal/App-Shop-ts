"use client";
import { ProductsContexts } from "@/components/context/productscontext";
import { Product, Users } from "@/types/types";
import { AddAPhoto, CancelOutlined, PhotoCamera } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
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
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useForm } from "react-hook-form";
type Props = {};

function NewProduct({}: Props) {
  const { result } = useContext(ProductsContexts);
  const { data: session, status } = useSession();
  const navigate = useRouter();
  const [userDetails, setUserDetails] = useState<Users>();
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
  /*   const handlechangeimage = (e: any) => {
    const url = URL.createObjectURL(e.target.files?.[0]);
    console.log(e.target.files?.[0]);

    setNewImage(url);
  }; */
  const url = "https://products-jtax.onrender.com/products";
  const [data, setData] = useState<Product | undefined>();
  const updatedata = () => {
    console.log(getValues());

    fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(getValues()),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setOpen(true);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      rating: 0,
      stock: 0,
      discountPercentage: "",
      brand: "",
      category: "",
      thumbnail: "",
      images: ["", ""],
      seller: `${session?.user?.email}`,
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
          type="text"
          variant="outlined"
          id={`images.${i}`}
          {...register(`images.${i}`, {})}
        />
      );
    }
    return content;
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit((data) => {
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
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Typography sx={styleTypography}>title</Typography>
        <TextField
          type="text"
          variant="outlined"
          sx={{ width: { xs: "100%", md: 400 } }}
          id="title"
          {...register("title", {
            required: {
              value: true,
              message: "first Name is required",
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
          type="text"
          variant="outlined"
          id="thumbnail"
          {...register("thumbnail", {
            required: {
              value: true,
              message: "thumbnail is required",
            },
            validate: {
              emailAvailable: async (fieldValue) => {
                const response = await fetch(
                  `https://products-jtax.onrender.com/products?thumbnail=${fieldValue}`
                );
                const data = await response.json();
                return data.length === 0 || "image already exists";
              },
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
        {/*         <Box
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{ cursor: "pointer" }}
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handlechangeimage}
          />
          {newImage ? (
            <Image width={60} height={60} src={newImage} alt="add image" />
          ) : (
            <AddPhotoAlternateIcon sx={{ fontSize: 60, color: "#4caf50" }} />
          )}
        </Box> */}
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
          sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1 }}
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
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Product added successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default NewProduct;
