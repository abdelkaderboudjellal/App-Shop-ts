import { Fragment, ReactNode, useContext, useState } from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { ProductsContexts } from "../context/productscontext";
type Anchor = "top" | "left" | "bottom" | "right";
type Props = {
  anchor: Anchor;
  CardShop: ReactNode;
  children: ReactNode;
};
export default function Drawers({ anchor, children, CardShop }: Props) {
  const { dataSelect, toggleDrawer, state } = useContext(ProductsContexts);

  const countProduct = dataSelect.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  return (
    <>
      {[anchor].map((anchor) => (
        <Fragment key={anchor}>
          <Button
            disableRipple
            sx={{
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            {CardShop}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {children}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </>
  );
}
