import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Account from "./Account/Account";
import NewProduct from "./NewProduct/NewProduct";
import MyProduct from "./MyProduct/MyProduct";
import Notification from "./NotificationProfile/Notification";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const dataProfile = [
  { id: 1, name: "Account" },
  { id: 2, name: "New Product" },
  { id: 3, name: "My Product" },
  { id: 4, name: "Notification" },
];
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        my: 4,
        width: 1,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          minWidth: 150,
          borderRight: 1,
          borderColor: "divider",
          "& .MuiTabs-flexContainer": {
            flexDirection: {
              md: "column",
              xs: "row",
            },
          },
          "& .MuiTabs-scroller": {},
          "& .MuiTabs-scrollButtons": {
            display: { xs: "block", md: "none" },
          },
          fontWeight: "700",
        }}
      >
        {dataProfile.map((item) => {
          return (
            <Tab
              sx={{ textAlign: "start!important" }}
              key={item.id}
              label={item.name}
              {...a11yProps(item.id)}
            />
          );
        })}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Account />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewProduct />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyProduct />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Notification />
      </TabPanel>
    </Box>
  );
}
