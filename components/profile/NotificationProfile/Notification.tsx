import { Product, ProductSelect, ProductValid } from "@/types/types";
import { Button, ButtonGroup, Divider, Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import DeliveryProduct from "./DeliveryProduct";
import DeliveryUser from "./DeliveryUser";
import SalesProduct from "./SalesProduct";

type Props = {};
type productdelivery = {
  product: ProductValid[];
  email: string;
  id: number;
};

const Notification = (props: Props) => {
  const { data: session, status } = useSession();
  const [notification, setNotification] = useState("Sales");
  const [productdelivery, setProductdelivery] = useState<productdelivery[]>([]);
  const [myProduct, setMyProduct] = useState<ProductValid[]>([]);
  async function getMyProduct() {
    const res = await fetch(
      `https://products-jtax.onrender.com/products?seller=${session?.user?.email}`
    );
    const Myproduct = await res.json();

    setMyProduct(Myproduct);
  }
  async function getMyDelivery() {
    const res = await fetch(`https://products-jtax.onrender.com/delivery`);
    const Myproduct = await res.json();

    setProductdelivery(Myproduct);
  }
  useEffect(() => {
    getMyDelivery();
    getMyProduct();
  }, [myProduct]);

  const user = session?.user?.email;
  const data = productdelivery.filter((delivery) => {
    if (delivery.email != user) {
      return [
        delivery.product.filter((item) => item.seller === user),
        delivery.email,
        delivery.id,
      ];
    }
  });
  const purchase: productdelivery[] = productdelivery.filter((delivery) => {
    if (delivery.email === user) {
      return delivery;
    }
  });
  const testUsers = (products: ProductValid[]) => {
    let a = 0;
    products.map((product) => {
      if (product.seller === session?.user?.email) {
        a++;
      }
    });
    return a;
  };
  return (
    <div>
      <ButtonGroup
        size="large"
        variant="outlined"
        aria-label="switch"
        sx={{ p: 2 }}
      >
        {notification === "Sales" ? (
          <Button variant="contained" onClick={() => setNotification("Sales")}>
            My Sales
          </Button>
        ) : (
          <Button onClick={() => setNotification("Sales")}>My Sales</Button>
        )}
        {notification === "purchase" ? (
          <Button
            variant="contained"
            onClick={() => setNotification("purchase")}
          >
            My purchase
          </Button>
        ) : (
          <Button onClick={() => setNotification("purchase")}>
            My purchase
          </Button>
        )}
        {/* <Button onClick={() => setNotification("purchase")}>My purchase</Button> */}
      </ButtonGroup>

      {notification === "Sales" &&
        data.map((delivery) => {
          if (testUsers(delivery.product) > 0) {
            return (
              <Stack key={delivery.email} spacing={2}>
                <Typography variant="subtitle1" fontWeight={700}>
                  <DeliveryUser email={delivery.email} />
                </Typography>
                <DeliveryProduct
                  products={delivery.product}
                  id={delivery.id}
                  email={delivery.email}
                />
              </Stack>
            );
          }
        })}
      {notification === "purchase" &&
        purchase.map((item) => {
          return <SalesProduct key={item.email} products={item.product} />;
        })}
    </div>
  );
};

export default Notification;
