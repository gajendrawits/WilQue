import React from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import CustomizedSnackbars from "src/component/message";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import Questions from "./questions";

const dashboard = () => {
  const router = useRouter();

  return (
    <>
      {router.query?.name && (
        <CustomizedSnackbars
          resetData={router?.query}
          severity={"success"}
          message={"Sucessfully Login"}
        />
      )}

      <ApexChartWrapper>
        <Grid container spacing={6} sx={{ pt: "1.5rem", pl: "1.5rem" }}>
          <Questions />
        </Grid>
      </ApexChartWrapper>
    </>
  );
};

export default dashboard;
