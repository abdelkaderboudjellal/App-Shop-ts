import * as React from "react";

import TextField from "@mui/material/TextField";
import { Autocomplete, Container } from "@mui/material";
import { ProductsContexts } from "../context/productscontext";

type Props = {
  options: string[];
};
const CategorySelect = ({ options }: Props) => {
  const { setSelectedIndex } = React.useContext(ProductsContexts);
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Autocomplete
          value={value}
          style={{}}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            setSelectedIndex(options.indexOf(newInputValue));
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 1, mt: 4, display: "block", mx: "auto" }}
          renderInput={(params) => (
            <TextField {...params} label="Select Category" />
          )}
        />
      </Container>
    </>
  );
};

export default CategorySelect;
