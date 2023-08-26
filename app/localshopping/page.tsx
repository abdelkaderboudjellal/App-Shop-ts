import { Metadata } from "next";
import Image from "next/image";
import { Box, Container } from "@mui/material";
import ButtonComponent from "@/element/ButtonComponent";
export const metadata: Metadata = {
  title: "local shopping",
};
const page = () => {
  return (
    <Box>
      <Container maxWidth="md" sx={{ my: 8, position: "relative" }}>
        <Image
          width={300}
          height={300}
          style={{ width: "100%", height: "100%", position: "relative" }}
          alt=""
          objectFit="cover"
          src="/images/maintenance.svg"
          priority
        />
        <ButtonComponent />
      </Container>
    </Box>
  );
};

export default page;
