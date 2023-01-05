import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const index = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          sx={{
            width: "100%",
            fontSize: "50px",
          }}
        >
          <Link>Device information</Link>
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontSize: "20px",
            paddingBottom: "10px",
          }}
        >
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
        }}
      >
        <Card
          sx={{
            width: "60%",
            height: "600px",
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
              }}
            >
              Screen
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "50px",
                }}
              >
                {typeof window !== "undefined"
                  ? screen.width + " " + screen?.height
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
              }}
            >
              Orientation
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "50px",
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
              }}
            >
              Orientation angle
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "50px",
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
              }}
            >
              Color depth :
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "50px",
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
              }}
            >
              Pixel ratio
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "50px",
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
              }}
            >
              Window size :
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "50px",
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
            height: "500px",
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
              }}
            >
              Browser vendor :
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "30px",
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
              }}
            >
              Languages :
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "30px",
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
              }}
            >
              Platform :
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "30px",
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
              }}
            >
              User agent :
              <Grid
                sx={{
                  Width: "100%",
                  paddingTop: "30px",
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
