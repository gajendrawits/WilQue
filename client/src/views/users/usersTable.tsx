// ** MUI Imports

import Rating from "@mui/material/Rating";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import useGet from "src/hooks/useGet";

const CardUser = () => {
  const [value, setValue] = useState<number | null>(2);
  const {
    refetch: fetchDetails,
    data,
    isLoading,
    error,
    isFetching,
  } = useGet("tags", `https://wil-que-mongo-backend.onrender.com/api/users`);

  // Tags fetching
  useEffect(() => {
    fetchDetails();
  }, []);
  console.log("data", data);

  if (isLoading) {
    return <>Loading</>;
  }
  if (error) {
    return <>Error</>;
  }
  if (isFetching) {
    return <>Fetching Data</>;
  }
  const api = "https://wil-que-mongo-backend.onrender.com/api/users";

  const users = [
    { id: 1, name: "Karan", designation: "React Developer" },
    { id: 2, name: "Rupinder", designation: "Node Developer" },
    { id: 3, name: "Shubham", designation: "React Native Developer" },
    { id: 4, name: "Aman", designation: "Android Developer" },
    { id: 5, name: "Pankaj", designation: "IOS Developer" },
    { id: 6, name: "Sunil", designation: "QA" },
    { id: 7, name: "Gajendra", designation: "Full Stack Developer" },
  ];

  return (
    <>
      <Grid sx={{ pb: 6 }}>
        <Typography variant="h4" sx={{ pb: 6 }}>
          <Link>Users</Link>
        </Typography>
        <Typography variant="h6">
          A user is a person or thing that uses something such as a place,
          facility, product, or machine.
          <br></br>A user is a person who utilizes a computer or network
          service.
        </Typography>
      </Grid>
      <Card
        sx={{
          width: "100%",
          padding: 2,
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr))",
        }}
      >
        {data?.map((user: any) => {
          return (
            <Card
              sx={{
                border: 0,
                boxShadow: 0,
                color: "common.white",
                backgroundColor: "#9155FD",
              }}
            >
              <CardContent
                sx={{
                  padding: (theme) =>
                    `${theme.spacing(3.25, 5, 4.5)} !important`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    marginBottom: 2.75,
                    alignItems: "center",
                    color: "common.white",
                  }}
                >
                  {user.username}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 3, color: "common.white" }}
                >
                  {user.role}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt="Mary Vaughn"
                      src="/images/avatars/2.png"
                      sx={{ width: 34, height: 34, marginRight: 2.75 }}
                    />
                    <Typography variant="body2" sx={{ color: "common.white" }}>
                      {user.username}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", mr: 3.5 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "common.white" }}
                      >
                        <StarOutlineIcon />
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Card>
    </>
  );
};

export default CardUser;
