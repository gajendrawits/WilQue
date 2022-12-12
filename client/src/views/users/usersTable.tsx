// ** MUI Imports

import Rating from "@mui/material/Rating";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";

const CardUser = () => {
  const [value, setValue] = useState<number | null>(2);

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
      <Grid sx={{ pb: 6 }}>
        <Typography variant="h4" sx={{ pb: 6 }}>
          <Link>Users</Link>
        </Typography>
        <Typography variant="h6">
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
                  {user.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 3, color: "common.white" }}
                >
                  {user.designation}
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
                      src="/images/avatars/4.png"
                      sx={{ width: 34, height: 34, marginRight: 2.75 }}
                    />
                    <Typography variant="body2" sx={{ color: "common.white" }}>
                      {user.name}
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
                        Total Stars
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
