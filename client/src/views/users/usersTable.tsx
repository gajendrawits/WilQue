// ** MUI Imports
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useEffect } from "react";
import useGet from "src/hooks/useGet";
import CircularProgress from "@mui/material/CircularProgress";

const CardUser = () => {
  const {
    refetch: fetchDetails,
    data,
    isLoading,
    error,
    isFetching,
  } = useGet("tags", `/users`);

  // Tags fetching
  useEffect(() => {
    fetchDetails();
  }, []);

  if (isLoading) {
    return (
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
    );
  }
  if (error) {
    return <>Error</>;
  }
  if (isFetching) {
    return (
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
    );
  }

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
          backgroundColor: "white",
          width: "100%",
          padding: 5,
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr))",
        }}
      >
        {data?.map((user: any) => {
          return (
            <Card
              sx={{
                border: 2,
                boxShadow: 3,
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
                <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: 3, color: "common.white" }}
                  >
                    Role:-
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: 3, color: "common.white" }}
                  >
                    {user.role}
                  </Typography>
                </Box>

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
                      src={user.profilePhoto}
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
