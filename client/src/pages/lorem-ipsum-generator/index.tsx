// ** MUI Imports
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
// ** Demo Components Imports
import TableBasic from "src/views/lorem/LoremGenerator";
import TableDense from "src/views/tables/TableDense";
import TableSpanning from "src/views/tables/TableSpanning";
import TableCustomized from "src/views/tables/TableCustomized";
import TableCollapsible from "src/views/tables/TableCollapsible";
import TableStickyHeader from "src/views/tables/TableStickyHeader";
import { useState } from "react";

const MUITable = () => {
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const [sentences, setSentences] = useState<number[]>([20, 37]);
  const [words, setWords] = useState<number[]>([20, 37]);

  const handleChangeSentences = (event: Event, newValue: number | number[]) => {
    setSentences(newValue as number[]);
  };
  const handleChange = (event: Event, newValue: number | number[]) => {
    setWords(newValue as number[]);
  };
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">
          <Link href="https://mui.com/components/tables/" target="_blank">
            Lorem Ipsum Generator
          </Link>
        </Typography>
        <Typography variant="body2">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on
          meaningfulLorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content content
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        item
        xs={12}
      >
        <Card
          sx={{
            width: "70%",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "50px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              Paragraphs
            </Typography>
            <Typography
              sx={{
                width: "70%",
                display: "flex",
                paddingRight: "20px",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Slider
                aria-label="Small steps"
                defaultValue={0.00000005}
                step={0.00000001}
                marks
                min={-0.00000005}
                max={0.0000001}
                valueLabelDisplay="auto"
              />
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "50px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              Sentences per paragraph
            </Typography>
            <Typography
              sx={{
                width: "70%",
                display: "flex",
                paddingRight: "20px",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={sentences}
                  onChange={handleChangeSentences}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "50px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                border: "none",
              }}
            >
              Words per Sentences
            </Typography>
            <Typography
              sx={{
                width: "70%",
                display: "flex",
                paddingRight: "20px",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={words}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </Typography>
          </Typography>

          <Card
            sx={{
              boxShadow: "none",
              border: "none",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card sx={{ width: "100%", padding: "20px", boxShadow: "none" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non hac
              facilisi senectus aptent mauris commodo eu montes purus dignissim
              taciti rhoncus. Fusce magnis nisl cubilia id mollis non lorem
              pellentesque eget iaculis natoque fusce. Ligula est orci cum eget
              mauris justo est congue dapibus pretium conubia feugiat. Feugiat
              consectetur dictumst dolor porttitor curabitur condimentum semper
              integer facilisi dictumst vitae lobortis. Penatibus varius potenti
              lacus nec risus posuere parturient tellus pharetra sapien magnis
              nunc. Ligula per rutrum turpis venenatis aliquam vulputate
              elementum porta porttitor quam natoque posuere. Ornare nisi quam
              rutrum sit maecenas turpis duis vehicula at ultrices vulputate
              integer. Sociosqu sed convallis aptent varius nunc quis justo
              sociosqu volutpat fermentum dolor pretium. Pulvinar quis enim
              mauris himenaeos cum venenatis placerat dictumst vitae vulputate
              ante phasellus. Commodo curae natoque vehicula venenatis bibendum
              duis nascetur orci condimentum fusce nullam suscipit. Habitasse
              urna habitant congue turpis aliquam erat duis justo habitasse eros
              egestas nostra. In vel ornare posuere sociis nisi netus accumsan
              neque donec dictum condimentum quis. Netus eu tempor phasellus
              elit nunc mus lacus elementum fusce sociis praesent nostra.
              Vehicula proin placerat netus pellentesque elit lobortis lacinia
              vestibulum nascetur torquent aliquam ad. Himenaeos pellentesque
              cum amet cras dictum dignissim malesuada justo ac dui rhoncus
              congue. Volutpat purus integer dolor montes eget sapien urna
              faucibus turpis urna feugiat sollicitudin. Netus nisi pulvinar
              ultrices vulputate montes inceptos sapien magna montes a neque
              amet. Justo gravida iaculis ante nulla erat morbi ultrices
              lobortis interdum phasellus vehicula pulvinar. Litora tempor
              porttitor dictum hac viverra et montes semper sed elementum massa
              egestas. Condimentum vel magna magna risus mattis vivamus
              convallis elementum congue taciti magna per. Quisque venenatis
              tortor semper pretium sollicitudin ullamcorper penatibus ultricies
              aliquam accumsan vel bibendum. Inceptos id posuere sit taciti
              semper consequat tempor commodo potenti elit in taciti. Inceptos
              nunc lorem mauris vel montes etiam eu vehicula integer aliquam
              fusce a.
            </Card>
            <Typography>
              <Button
                size="large"
                type="submit"
                sx={{ mr: 2 }}
                variant="contained"
              >
                Copy
              </Button>
            </Typography>
          </Card>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MUITable;
