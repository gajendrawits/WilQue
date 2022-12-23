import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import useGet from "src/hooks/useGet";
import CircularProgress from "@mui/material/CircularProgress";

interface SearchProps {
  searchTag: string | undefined;
}

const SearchTag = ({ searchTag }: SearchProps) => {
  const {
    refetch: FetchSearchTag,
    data,
    error,
    isFetching,
  } = useGet("searchtag", `/tags/${searchTag}`);

  useEffect(() => {
    FetchSearchTag();
  }, [searchTag]);

  return (
    <>
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
        <Grid
          sx={{
            width: "100%",
            display: "grid",
            gap: "20px",
            textAlign: "left",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            paddingTop: "25px",
          }}
        >
          {data &&
            data?.map((searchTag: any) => {
              return (
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 1,
                    border: "1px solid #9155FD",
                  }}
                >
                  <Typography sx={{ widh: "100px" }}>
                    #{searchTag?._id}
                  </Typography>
                </Card>
              );
            })}
        </Grid>
      )}
    </>
  );
};

export default SearchTag;
