import { Button, Grid, styled, Typography } from "@mui/material";

export const Container = styled(Grid)(() => ({
  paddingBottom: 6,
  width: "80%",
  minWidth: "700px",
  display: "flex",
  flexDirection: "column",
  gap: 5,
}));

export const AskQuestionHeading = styled(Typography)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: 6,
}));
export const PostButton = styled(Button)(() => ({ width: "90px" }));
// export const HeadingWrapper = styled("div")(() => ({}));
// export const HeadingWrapper = styled("div")(() => ({}));
// export const HeadingWrapper = styled("div")(() => ({}));
