import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Card, Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          mb: "22px",
        }}
      >
        <Typography variant="h5">
          <Link>Device information</Link>
        </Typography>
        <Typography variant="body2">
          Get information about your current device (screen size, pixel-ratio,
          user agent, ...)
        </Typography>
      </Grid>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          gap: "40px",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        <Card
          sx={{
            width: "60%",
            height: "fit-content",
            display: "grid",
            backgroundColor: "#FFF",
            gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
            gap: "20px",
            padding: "10px 10px 10px 10px",
          }}
        >
          <Card
            className="card"
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Screen
              <Grid
                sx={{
                  Width: "100%",
                }}
              >
                {typeof window !== "undefined"
                  ? screen.width + " x " + screen?.height
                  : null}
              </Grid>
            </Typography>
          </Card>
          <Card
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Orientation
              <Grid
                sx={{
                  Width: "100%",
                }}
              >
                {typeof window !== "undefined"
                  ? screen?.orientation.type
                  : null}
              </Grid>
            </Typography>
          </Card>
          <Card
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Orientation angle
              <Grid
                sx={{
                  Width: "100%",
                }}
              >
                {typeof window !== "undefined"
                  ? screen?.orientation.angle
                  : null}
              </Grid>
            </Typography>
          </Card>
          <Card
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Color depth :
              <Grid
                sx={{
                  Width: "100%",
                }}
              >
                {typeof window !== "undefined" ? screen?.colorDepth : null}bits
              </Grid>
            </Typography>
          </Card>
          <Card
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Pixel ratio
              <Grid
                sx={{
                  width: "100%",
                }}
              >
                {typeof window !== "undefined"
                  ? window?.devicePixelRatio
                  : null}
                dppx
              </Grid>
            </Typography>
          </Card>
          <Card
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Window size :
              <Grid
                sx={{
                  Width: "100%",
                }}
              >
                {typeof window !== "undefined"
                  ? screen.width + "  " + screen?.height
                  : null}
              </Grid>
            </Typography>
          </Card>
        </Card>
        <Card
          sx={{
            width: "40%",
            height: "fit-content",
            display: "grid",
            backgroundColor: "#FFF",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            gap: "20px",
            padding: "10px 10px 10px 10px",
          }}
        >
          <Card
            className="card"
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Browser vendor :
              <Grid
                sx={{
                  Width: "100%",
                  // paddingTop: "30px",
                }}
              >
                {typeof window !== "undefined" ? window.navigator.vendor : null}
              </Grid>
            </Typography>
          </Card>
          <Card
            className="card"
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Languages :
              <Grid
                sx={{
                  Width: "100%",
                  // paddingTop: "30px",
                }}
              >
                {typeof window !== "undefined"
                  ? window.navigator.language
                  : null}
              </Grid>
            </Typography>
          </Card>
          <Card
            className="card"
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              Platform :
              <Grid
                sx={{
                  Width: "100%",
                  // paddingTop: "30px",
                }}
              >
                {typeof window !== "undefined"
                  ? window.navigator.platform
                  : null}
              </Grid>
            </Typography>
          </Card>
          <Card
            className="card"
            sx={{
              display: "grid",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: "25px",
                alignItems: "center",
                textAlign: "center",
                p: 2.8,
              }}
            >
              User agent :
              <Grid
                sx={{
                  Width: "100%",
                  // paddingTop: "30px",
                }}
              >
                {typeof window !== "undefined"
                  ? window.navigator.userAgent.slice(0, 9) + "..."
                  : null}
              </Grid>
            </Typography>
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default index;
