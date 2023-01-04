import { styled, Typography } from "@mui/material";

export const Container = styled("div")(() => ({
  "& .MuiTypography-root": {
    img: {
      maxWidth: "95%",
    },
  },
}));
export const HeadingWrapper = styled(Typography)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: 6,
}));
export const QuestionTitleWrapper = styled(Typography)(() => ({
  pb: 3,
  fontSize: "1.5rem",
  fontWeight: 600,
  borderBottom: "1px solid lightgrey",
}));

export const LoaderWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "20vh",
}));

// const HeadingWrapper = styled("div")(() => ({}));
