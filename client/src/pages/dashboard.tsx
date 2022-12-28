import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import Questions from "./questions";
import { useRouter } from "next/router";

const dashboard = () => {
  const router = useRouter();

  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6} sx={{ pt: "1.5rem", pl: "1.5rem" }}>
          <Questions />
        </Grid>
      </ApexChartWrapper>
    </>
  );
};

export default dashboard;
