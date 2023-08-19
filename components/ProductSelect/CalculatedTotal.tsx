import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Snackbar, Stack } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Product, Users } from "@/types/types";
import { useEffect, useState } from "react";
import React from "react";
type Props = {
  price: number;
  product: Product[];
};
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CalculatedTotal = ({ price, product }: Props) => {
  const { data: session, status } = useSession();
  const navigate = useRouter();
  const [userDetails, setUserDetails] = useState<Users>();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://products-jtax.onrender.com/user?email=${session?.user?.email}`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
      const data = await res.json();

      setUserDetails(data[0]);
    };
    getData();
  }, []);
  const updatedata = (product: Product[], email: any) => {
    fetch(`https://products-jtax.onrender.com/delivery`, {
      method: "POST",
      body: JSON.stringify({ product, email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
      });
  };
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          height: "100%",
          borderLeft: "none!important",
          borderRight: "none!important",
          borderRadius: "0!important",
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Subtotal
            </Typography>
            <Typography variant="body1" component="h5">
              ${price}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Shipping
            </Typography>
            <Typography variant="body1" component="h5">
              Free
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Taxes
            </Typography>
            <Typography variant="body1" component="h5">
              Calculated at checkout
            </Typography>
          </Stack>
          <Divider sx={{ my: 1 }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total
            </Typography>
            <Typography variant="body1" component="h5">
              ${price}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              if (status === "authenticated") {
                if (
                  userDetails?.location != "" &&
                  userDetails?.phone?.toString().length == 10
                ) {
                  updatedata(product, session.user?.email);
                  setOpenSuccess(true);
                } else {
                  setOpenError(true);
                }
              } else {
                navigate.push("/login");
              }
            }}
            variant="contained"
            color="primary"
            fullWidth
            size="small"
          >
            cash on delivery
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Add the product to successfully deliver.
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Telephone numbers and locations are not available.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CalculatedTotal;
