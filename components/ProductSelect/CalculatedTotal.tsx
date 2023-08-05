import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";
type Props={
    price:number
}
const CalculatedTotal = ({ price }:Props) => {
  return (
    <Card  sx={{ minWidth: 275,height:"100%",borderLeft:'none!important',borderRight:'none!important', borderRadius:'0!important'  }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Taxes
          </Typography>
          <Typography variant="body1" component="h5">
            Calculated at checkout
          </Typography>
        </Stack>
        <Divider sx={{my:1}} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total
          </Typography>
          <Typography variant="body1" component="h5">
            ${price}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button  variant="contained" color="primary"  fullWidth size="small">
          Proceed to Checkout
        </Button>
      </CardActions>
    </Card>
  );
};

export default CalculatedTotal;
