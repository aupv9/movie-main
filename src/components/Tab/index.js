import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CancelIcon from "@material-ui/icons/Cancel";
import LaptopIcon from "@material-ui/icons/Laptop";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Box from "@material-ui/core/Box";
import Tab2 from "./Tab2/index";
import Tab1 from "./Tab1/index";
import Tab3 from "./Tab3/index";
import Button from "../../components/Button/index";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    background: "#000",
    width: "100%",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  //   const useStyles = makeStyles((theme) => ({
  //     root: {
  //       flexGrow: 1,
  //       width: "90%",
  //       backgroundColor: "#000",
  //     },
  //   }));
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            background: "#000",
          }}
        >
          <>{children}</>
        </Box>
      )}
    </div>
  );
}
function TabPanel2(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <div
            style={{
              width: "90%",
              marginLeft: "5%",
              marginRight: "5%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#fff", fontSize: "1.4em" }}>
              Watch Tv Shows And Movies Anytime, Anywhere. From Any Device.
            </p>
            <Button size="large" text="Now"></Button>
          </div>

          <Box
            p={3}
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              background: "#000",
            }}
          >
            <>{children}</>
          </Box>
        </>
      )}
    </div>
  );
}
function TabPanel3(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <div
            style={{
              width: "90%",
              marginLeft: "5%",
              marginRight: "5%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#fff", fontSize: "1.4em" }}>
              Choose One Plan And Watch Everything.
            </p>
            <Button size="large" text="Now"></Button>
          </div>

          <Box
            p={3}
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              background: "#000",
            }}
          >
            <>{children}</>
          </Box>
        </>
      )}
    </div>
  );
}
export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<CancelIcon htmlColor="white" fontSize="large" />}
          label="Cancel subscription anytime"
          {...a11yProps(0)}
          style={{ color: "white", fontSize: "1.2em" }}
        ></Tab>
        <Tab
          icon={<LaptopIcon htmlColor="white" fontSize="large" />}
          label="Watch from anywhere"
          {...a11yProps(1)}
          style={{ color: "white", fontSize: "1.2em" }}
        />
        <Tab
          icon={<LocalOfferIcon htmlColor="white" fontSize="large" />}
          label="Pricing packages"
          {...a11yProps(2)}
          style={{ color: "white", fontSize: "1.2em" }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tab1></Tab1>
      </TabPanel>
      <TabPanel2 value={value} index={1}>
        <Tab2></Tab2>
      </TabPanel2>
      <TabPanel3 value={value} index={2}>
        <Tab3></Tab3>
      </TabPanel3>
    </>
  );
}
