import StarsIcon from "@material-ui/icons/Stars";
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
import router from "next/router";

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

  const handleClick = (userName: any, index: number) => {
    router.push({
      pathname: "/userQuestion",
      query: { userName: userName },
    });
  };

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
      </Grid>
      <Card
        sx={{
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
              className="card"
              sx={{
                boxShadow: 10,
                color: "common.white",
                ":hover": {
                  backgroundColor: "#dfd5f2",
                  scale: "0.98",
                  border: "1px solid lightgrey",
                  // transitions: {
                  //   easing: {
                  //     easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
                  //     // easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
                  //     // easeIn: "cubic-bezier(0.4, 0, 1, 1)",
                  //     // sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
                  //   },
                  // },
                },
              }}
              onClick={() => handleClick(user.username, 5)}
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
                  }}
                >
                  {user.username}
                </Typography>
                <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
                  <Typography variant="body2" sx={{ marginBottom: 3 }}>
                    Role:-
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 3 }}>
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
                    <Typography variant="body2">{user.username}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", mr: 3.5 }}
                    >
                      <Typography variant="body2">
                        <StarsIcon />
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
