import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TagConatiner from "src/pages/tags/tags";
import { createTheme } from "@mui/material/styles";
import useGet from "src/hooks/useGet";

import axios from "axios";

import { isError, useQuery } from "react-query";
import { loremIpsum } from "lorem-ipsum";

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

  const {
    refetch: fetchDetails,
    data,
    isLoading,
    error,
    isFetching,
  } = useGet("tags", `https://wil-que-mongo-backend.onrender.com/api/tags`);

  // Tags fetching
  useEffect(() => {
    fetchDetails();
  }, []);

  if (isLoading) {
    return <>Loading</>;
  }
  if (error) {
    return <>Error</>;
  }
  if (isFetching) {
    return <>Fetching Data</>;
  }

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
  // sorting tags in alphabetically order
  const sorted = data?.sort(function (a: any, b: any) {
    if (a._id < b._id) {
      return -1;
    }
    if (a._id > b._id) {
      return 1;
    }
    return 0;
  });
  console.log("data", data);
  console.log("sorted", sorted);
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
              onChange={() => {
                fetchDetails();
              }}
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
            <TagConatiner tags={data} />
          </TabPanel>
          <TabPanel value={valuee} index={1}>
            <TagConatiner tags={sorted} />
          </TabPanel>
          <TabPanel value={valuee} index={2}>
            <TagConatiner tags={data} />
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Tags;
