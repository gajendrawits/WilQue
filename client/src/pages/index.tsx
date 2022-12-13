import Grid from "@mui/material/Grid";
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import Questions from "src/pages/questions";

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Questions />
      </Grid>
    </ApexChartWrapper>
  );
};

export default Dashboard;
