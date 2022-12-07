import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TagConatiner from "src/pages/tags/tags";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Tags = () => {
  const popularTags = [
    {
      id: 1,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
    {
      id: 2,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
    {
      id: 3,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
    {
      id: 4,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
    {
      id: 5,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
    {
      id: 6,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
    {
      id: 7,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
    {
      id: 8,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
    {
      id: 9,
      name: "js",
      description:
        "JS is langugae adashudhsajdhasdh hbjahsgd hdskajhd askjd ahsd jkdhasjkdh ",
    },
  ];

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const [valuee, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
    },
  });

  return (
    <Grid
      sx={{
        width: "100%",
      }}
    >
      <Grid sx={{ pb: 6 }}>
        <Typography variant="h4" sx={{ pb: 6 }}>
          <Link>Tags</Link>
        </Typography>
        <Typography variant="h6">
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </Typography>
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "space-between", p: 0 }}>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              style={{
                height: "3rem",
                width: "18rem",
                minWidth: "10rem",
                fontSize: "1rem",
              }}
              placeholder=" Search"
              type="text"
            />
            <Tabs
              value={valuee}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ border: "1px solid grey", borderRight: "none" }}
                label="Popular"
              />
              <Tab
                sx={{ border: "1px solid grey", borderRight: "none" }}
                label="Name"
              />
              <Tab sx={{ border: "1px solid grey" }} label="New" />
            </Tabs>
          </Box>
          <TabPanel value={valuee} index={0}>
            <TagConatiner tags={popularTags} />
          </TabPanel>
          <TabPanel value={valuee} index={1}>
            <TagConatiner tags={popularTags} />
          </TabPanel>
          <TabPanel value={valuee} index={2}>
            <TagConatiner tags={popularTags} />
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Tags;
