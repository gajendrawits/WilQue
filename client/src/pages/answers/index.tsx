import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { flexbox } from "@mui/system";
import QuillEdit from "../editor";
import router from "next/router";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";

const answers = () => {
  const { getQuestionValue } = useContext(QuestionContext);

  const handleRoute = () => {
    router.push("/askQuestion");
  };
  const { question } = getQuestionValue;

  const { mutateAsync } = usePost();

  const postAnswer = () => {
    mutateAsync({
      url: `/answer/${question?.id}`,
      payload: getQuestionValue,
      token: true,
    });
  };

  console.log(question);

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
        <Button variant="contained" onClick={handleRoute}>
          Ask Questions
        </Button>
      </Typography>

      <Typography>
        <Typography
          sx={{
            pb: 3,
            fontSize: "1.5rem",
            fontWeight: 600,
            borderBottom: "1px solid lightgrey",
          }}
        >
          {question?.title}
        </Typography>
        <Typography
          sx={{
            pt: 3,
          }}
        >
          {question?.text}
        </Typography>
        <Typography
          sx={{
            pt: 3,
          }}
        >
          Answers
        </Typography>
        <Typography
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {question?.answers?.map((answer: any, index: number) => {
            return (
              <Typography
                sx={{
                  p: 3,
                  background: "lightgrey",
                }}
              >
                <ol key={answer.id}>
                  <li>Answer: {answer.text}</li>
                </ol>
              </Typography>
            );
          })}
        </Typography>
        <div>
          <QuillEdit />
        </div>
        <Button
          variant="contained"
          type="submit"
          sx={{
            m: 2,
          }}
          onClick={postAnswer}
        >
          Post Answer
        </Button>
      </Typography>
    </Grid>
  );
};
export default answers;
