"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type categories = {
  name: string;
  icons: JSX.Element;
};
export default function CategoryComponent({ name, icons }: categories) {
  const navigate = useRouter();
  return (
    <Box
      sx={{
        aspectRatio: 1 / 1,
        border: "1px solid black",
        borderRadius: "5px",
        maxWidth: "180px",
        my: 2,
        px: 5,
        py: 5,
        mx: 2,
        "&:hover": { bgcolor: "#db4444", color: "white" },
        cursor: "pointer",
      }}
      onClick={() => navigate.push("/products")}
    >
      <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
        {icons}
        <Typography variant="h5" sx={{}}>
          {name}
        </Typography>
      </Stack>
    </Box>
  );
}
