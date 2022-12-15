import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import router from "next/router";
import useGet from "src/hooks/useGet";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";

const Questions = () => {
  // const [id, setId] = useState();
  const handleClick = (question: any) => {
    // setId(question.author.id);
    // console.log("id", data);
    // {
    //   data
    //     .filter((dt: any) => {
    //       return dt.id === id;
    //     })
    //     .map((data: any) => {
    //       return <div key={data.id}></div>;
    //     });
    // }

    router.push(`/answers`);
    console.log("question", question);
  };

  const {
    refetch: fetchQuestions,
    data,
    isLoading,
    error,
  } = useGet("ques", "/question");

  useEffect(() => {
    fetchQuestions();
  }, []);

  console.log(data);

  return (
    <Grid
      sx={{
        width: "100%",
      }}
    >
      <Grid sx={{ pb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            pb: 6,
          }}
        >
          <Link>Questions</Link>
          <Button
            variant="contained"
            onClick={() => router.push("/askQuestion")}
          >
            Ask Questions
          </Button>
        </Typography>
        <Typography
          sx={{
            borderBottom: "1px solid lightgrey",
            pt: 5,
            pb: 5,
            fontWeight: "900",
          }}
        >
          Total questions : {data && data.length}
        </Typography>
        {isLoading ? (
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
            }}
          >
            <CircularProgress color="inherit" />
          </Typography>
        ) : null}

        {data?.map((ques: any, index: number) => {
          const date = ques.created;
          return (
            <Grid sx={{ mb: 2 }}>
              <Typography
                sx={{
                  mt: 2,
                  p: 2,
                  border: "1px solid lightgrey",
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    p: 2,
                    width: "15%",
                    minWidth: "100px",
                    textAlign: "right",
                  }}
                >
                  <Typography> Question: {index + 1} </Typography>
                </Typography>
                <Typography
                  sx={{
                    width: "85%",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <div onClick={() => handleClick(ques)}>
                    <Typography sx={{ fontWeight: "700", cursor: "pointer" }}>
                      {ques.title}
                    </Typography>
                  </div>
                  <Typography
                    sx={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Description :{ques.text}
                  </Typography>
                  <Typography sx={{ display: "flex", gap: 3, pt: 3 }}>
                    <Typography
                      sx={{
                        width: "fit-content",
                        p: 2,
                        display: "flex",
                        gap: 3,
                      }}
                    >
                      {ques.tags?.map((tag: any) => {
                        return (
                          <Typography
                            sx={{
                              background: "#d0b3f5",
                              p: 3,
                              borderRadius: "8px",
                            }}
                          >
                            {tag}
                          </Typography>
                        );
                      })}
                    </Typography>
                  </Typography>
                  <Typography sx={{ textAlign: "right", pt: 2 }}>
                    Asked by: {ques.author.username} Created at:{" "}
                    {moment(date).format("DD-MMM-YYYY")}
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Questions;
