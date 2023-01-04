import { Button, Grid, styled, Typography } from "@mui/material";

export const InputWrapper = styled(Typography)(() => ({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: 3,
  border: "1px solid grey",
}));
export const Input = styled("input")(() => ({
  padding: "6px",
  height: "2rem",
  borderRadius: "8px",
  border: "none",
}));
// export const HeadingWrapper = styled("div")(() => ({}));
// export const HeadingWrapper = styled("div")(() => ({}));
