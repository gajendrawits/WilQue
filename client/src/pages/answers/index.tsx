import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { flexbox } from "@mui/system";
import QuillEdit from "../editor";
import router from "next/router";

const answers = () => {
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
  ];
  return (
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
        <Link>Answers</Link>
        <Button
          onClick={() => {
            router.push("/askQuestion");
          }}
          variant="contained"
        >
          Ask Questions
        </Button>
      </Typography>
      {question.map((ques) => {
        return (
          <Typography>
            <Typography
              sx={{
                pb: 3,
                fontSize: "1.5rem",
                fontWeight: 600,
                borderBottom: "1px solid lightgrey",
              }}
            >
              {ques.question} ?
            </Typography>
            <Typography
              sx={{
                pt: 3,
              }}
            >
              {ques.description}
            </Typography>
            <Typography
              sx={{
                pt: 3,
              }}
            >
              {ques.answers.length} Answers
            </Typography>
            <Typography
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {ques.answers.map((ans) => {
                return (
                  <Typography
                    sx={{
                      p: 3,
                      background: "lightgrey",
                    }}
                  >
                    {ans.answer}
                  </Typography>
                );
              })}
            </Typography>
            <div>
              <QuillEdit />
            </div>
            <Button
              variant="contained"
              sx={{
                m: 2,
              }}
            >
              Post Answer
            </Button>
          </Typography>
        );
      })}
    </Grid>
  );
};
export default answers;
