import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import Questions from "./questions";
import { useRouter } from "next/router";
import CustomizedSnackbars from "src/component/Message";

const Dashboard = (props: any) => {
  const router = useRouter();
  // const show = <CustomizedSnackbars />;
  // useEffect(() =>
  // <CustomizedSnackbars />;
  // );

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

export default Dashboard;
