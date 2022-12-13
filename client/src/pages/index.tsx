import Grid from "@mui/material/Grid";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import Questions from "./questions";

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}></Grid>
      <Questions />
    </ApexChartWrapper>
  );
};

export default Dashboard;
