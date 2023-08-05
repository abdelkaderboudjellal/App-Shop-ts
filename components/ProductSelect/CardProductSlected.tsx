import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React, { useContext, useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DeleteOutline } from "@mui/icons-material";
import { ProductsContexts } from "../context/productscontext";
import { ProductSelect } from "@/types/types";
import Image from "next/image";

const CardProductSlected = ({
  id,
  title,
  thumbnail,
  price,
  quantity,
  category,
  brand,
}: ProductSelect) => {
  const {
    addProduct,

    deletProduct,

    decreaseProductQuantity,
    NumberProduct,
  } = useContext(ProductsContexts);
  const [value, setValue] = useState(quantity);

  const handlChange = (event: any) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    NumberProduct(id, value);
  }, [value]);
  return (
    <>
      <Card
        key={id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 1,
            gap: 1,
          }}
        >
          <Image
            src={thumbnail}
            width={75}
            height={75}
            style={{
              borderRadius: 10,
              objectFit: "cover",
            }}
            alt={title}
            loading="lazy"
          />
          <Box
            sx={{
              display: "flex",
              width: 1,
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ fontWeight: "600", color: "#0009" }}
              component="h5"
              variant="body1"
            >
              {title}
            </Typography>
            <Typography variant="body1" component="h1">
              $ {price} * {quantity}= $ {price * quantity}
            </Typography>
            <Typography variant="body1" component="h1" sx={{ color: "#0009" }}>
              {category} / {brand}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Stack spacing={0.5} direction={{ sx: "column", sm: "row" }}>
            <IconButton
              disableTouchRipple
              size="small"
              aria-label="reduce"
              onClick={() => {
                decreaseProductQuantity(id);
              }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <TextField
              size="small"
              type="number"
              value={quantity}
              sx={{ width: 60 }}
              InputProps={{
                sx: {
                  "&:hover fieldset": {
                    border: "1px solid #bdbdbd!important",
                  },
                  "&:focus-within fieldset, &:focus-visible fieldset": {
                    border: "1px solid #bdbdbd!important",
                  },
                },
              }}
              onChange={handlChange}
            />
            <IconButton
              disableTouchRipple
              size="small"
              aria-label="increase"
              onClick={() => {
                addProduct(id);
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
            <IconButton
              disableTouchRipple
              size="small"
              color="primary"
              onClick={() => {
                deletProduct(id);
              }}
            >
              <DeleteOutline color="inherit" fontSize="small" />
            </IconButton>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
};

export default CardProductSlected;
