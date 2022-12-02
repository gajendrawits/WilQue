// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const CardUser = () => {
  const users = [
    { id: 1, name: "admin", designation: "Developer" },
    { id: 2, name: "admin", designation: "Developer" },
    { id: 3, name: "admin", designation: "Developer" },
    { id: 4, name: "admin", designation: "Developer" },
    { id: 5, name: "admin", designation: "Developer" },
    { id: 6, name: "admin", designation: "Developer" },
    { id: 7, name: "admin", designation: "Developer" },
    { id: 8, name: "admin", designation: "Developer" },
    { id: 9, name: "admin", designation: "Developer" },
    { id: 10, name: "admin", designation: "Developer" },
    { id: 11, name: "admin", designation: "Developer" },
    { id: 12, name: "admin", designation: "Developer" },
  ];

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5">
          <Link>Users</Link>
        </Typography>

        <Typography variant="body2">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on
          meaningfulLorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content content
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
        {users.map((user) => {
          return (
            <Card sx={{ position: "relative", width: "fit-content" }}>
              <CardMedia
                sx={{ height: "12.625rem", width: "28rem" }}
                image="/images/cards/background-user.png"
              />
              <Avatar
                alt="Robert Meyer"
                src="/images/avatars/1.png"
                sx={{
                  width: 75,
                  height: 75,
                  left: "1.313rem",
                  top: "10.28125rem",
                  position: "absolute",
                  border: (theme) =>
                    `0.25rem solid ${theme.palette.common.white}`,
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    mt: 5.75,
                    mb: 8.75,
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      mb: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>
                        <Typography variant="h6">{user.name}</Typography>
                        <Typography variant="caption">
                          {user.designation}
                        </Typography>
                      </Typography>
                    </Typography>
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
