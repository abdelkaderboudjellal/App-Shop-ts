import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const TitlePages = ({ title, subtitle }: Props) => {
  return (
    <div>
      <Stack alignItems={"center"} spacing={2} direction={"row"}>
        <Box
          sx={{
            width: "15px",
            height: "40px",
            bgcolor: "#db4444",
            borderRadius: "3px",
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{ color: "#db4444", fontWeight: 600 }}
        >
          {title}
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"start"}
        spacing={{ xs: 2, md: 10 }}
        pt={2}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          minWidth={"max-content"}
          sx={{ textTransform: "capitalize" }}
        >
          {subtitle}
        </Typography>
      </Stack>
    </div>
  );
};

export default TitlePages;
