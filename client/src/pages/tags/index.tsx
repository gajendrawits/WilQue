import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@mui/material/Typography";
import TagConatiner from "src/pages/tags/tag-container";
import useGet from "src/hooks/useGet";
import CircularProgress from "@mui/material/CircularProgress";
import SearchTag from "src/pages/tags/search-tag";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Tags = () => {
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
  const [searchTag, setSearchTag] = useState<any>();

  const {
    refetch: fetchAllTags,
    data,
    error,
    isFetching,
  } = useGet("tags", `/tags`);

  // Tags fetching
  useEffect(() => {
    fetchAllTags();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const filterTags = data?.map((element: any) => {
    return element._id;
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
      {isFetching ? (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
          }}
        >
          <CircularProgress color="inherit" />
        </Typography>
      ) : (
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
                  paddingLeft: 15,
                  width: "18rem",
                  fontSize: "1.2rem",
                  borderRadius: "10px",
                  border: "0.2px solid grey",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                placeholder="Search"
                type="text"
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
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
            {searchTag?.length > 0 ? (
              <SearchTag searchTag={searchTag} />
            ) : (
              <>
                <TabPanel value={valuee} index={0}>
                  <TagConatiner tags={data} />
                </TabPanel>
                <TabPanel value={valuee} index={1}>
                  <TagConatiner tags={data?.sort()} />
                </TabPanel>
                <TabPanel value={valuee} index={2}>
                  <TagConatiner tags={data?.reverse()} />
                </TabPanel>
              </>
            )}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Tags;
