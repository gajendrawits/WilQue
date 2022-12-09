import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import router from "next/router";

const Questions = () => {
  const handle = (e: any) => {
    console.log("e", e);
    router.push("/answers", e);
  };

  const question = [
    {
      id: 1,
      question:
        "NotSupportedException when WebRequest is unable to find a creator for that prefix",

      description:
        "Eiusmod laborum aute ullamco. Labore ut tempor ut. Esse labore. Non adipisicing aliquip consequat. Anim magna amet veniam dolor Lorem. Est irure do enim veniam aliqua. Lorem nostrud culpa Lorem proident fugiat Lorem. Incididunt occaecat deserunt veniam id eu. Reprehenderit Lorem do. Ea. Adipisicing occaecat non. Est elit anim nisi eiusmod voluptate eiusmod reprehenderit. Nisi id nostrud dolor anim ea magna dolore dolor. Tempor sunt Lorem anim esse voluptate minim irure quis.",
      answers: [
        {
          id: 1,
          answer: "good",
        },
      ],
    },
    {
      id: 2,
      question:
        "NotSupportedException when WebRequest is unable to find a creator for that prefix",
      description:
        "Eiusmod laborum aute ullamco. Labore ut tempor ut. Esse labore. Non adipisicing aliquip consequat. Anim magna amet veniam dolor Lorem. Est irure do enim veniam aliqua. Lorem nostrud culpa Lorem proident fugiat Lorem. Incididunt occaecat deserunt veniam id eu. Reprehenderit Lorem do. Ea. Adipisicing occaecat non. Est elit anim nisi eiusmod voluptate eiusmod reprehenderit. Nisi id nostrud dolor anim ea magna dolore dolor. Tempor sunt Lorem anim esse voluptate minim irure quis.",

      answers: [
        {
          id: 1,
          answer: "good",
        },
        {
          id: 2,
          answer: "good",
        },
        {
          id: 3,
          answer: "good",
        },
      ],
    },
    {
      id: 3,
      question:
        "NotSupportedException when WebRequest is unable to find a creator for that prefix",
      description:
        "Eiusmod laborum aute ullamco. Labore ut tempor ut. Esse labore. Non adipisicing aliquip consequat. Anim magna amet veniam dolor Lorem. Est irure do enim veniam aliqua. Lorem nostrud culpa Lorem proident fugiat Lorem. Incididunt occaecat deserunt veniam id eu. Reprehenderit Lorem do. Ea. Adipisicing occaecat non. Est elit anim nisi eiusmod voluptate eiusmod reprehenderit. Nisi id nostrud dolor anim ea magna dolore dolor. Tempor sunt Lorem anim esse voluptate minim irure quis.",

      answers: [
        {
          id: 1,
          answer: "good",
        },
      ],
    },
    {
      id: 4,
      question:
        "NotSupportedException when WebRequest is unable to find a creator for that prefix",
      description:
        "Eiusmod laborum aute ullamco. Labore ut tempor ut. Esse labore. Non adipisicing aliquip consequat. Anim magna amet veniam dolor Lorem. Est irure do enim veniam aliqua. Lorem nostrud culpa Lorem proident fugiat Lorem. Incididunt occaecat deserunt veniam id eu. Reprehenderit Lorem do. Ea. Adipisicing occaecat non. Est elit anim nisi eiusmod voluptate eiusmod reprehenderit. Nisi id nostrud dolor anim ea magna dolore dolor. Tempor sunt Lorem anim esse voluptate minim irure quis.",
      tags: [
        {
          id: 1,
          name: "C",
        },
        {
          id: 2,
          name: "C",
        },
      ],
      answers: [
        {
          id: 1,
          answer: "good",
        },
      ],
    },
  ];
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
            onClick={() => {
              router.push("/askQuestion");
            }}
            variant="contained"
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
          Total questions : {question.length}
        </Typography>
        {question.map((ques) => {
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

                    width: "10%",
                    minWidth: "100px",
                    textAlign: "right",
                  }}
                >
                  <Typography>{ques.answers.length} Answer</Typography>
                </Typography>
                <Typography
                  sx={{
                    width: "90%",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <div
                    onClick={() => {
                      router.push("/answers");
                    }}
                  >
                    <Typography sx={{ fontWeight: "700" }}>
                      "{ques.question}"
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
                    Description :{ques.description}
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
                      {ques.tags?.map((t) => {
                        return (
                          <Typography
                            sx={{
                              background: "#d0b3f5",
                              p: 3,
                              borderRadius: "8px",
                            }}
                          >
                            {t.name}
                          </Typography>
                        );
                      })}
                    </Typography>
                  </Typography>
                  <Typography sx={{ textAlign: "right", pt: 2 }}>
                    User asked Dec 7, 2022 at 14:49
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
