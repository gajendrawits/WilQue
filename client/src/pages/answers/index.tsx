import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress } from "@mui/material";
import { flexbox } from "@mui/system";
import QuillEdit from "../editor";
import router from "next/router";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";
import DeleteIcon from "@mui/icons-material/Delete";
import useDelete from "src/hooks/useDelete";

const answers = () => {
  const { getQuestionValue } = useContext(QuestionContext);
  const [getAnswerValue, setAnswerValue] = useState("");
  const [getUserDetail, setUserDetail] = useState<any>();

  const handleRoute = () => {
    router.push("/askQuestion");
  };
  const { question } = getQuestionValue;

  const { mutateAsync, isLoading, isSuccess } = usePost();

  const {
    mutateAsync: deleteAsync,
    isLoading: deleteIsLoading,
    isSuccess: delteIsSuccess,
  } = useDelete();

  const postAnswer = () => {
    mutateAsync({
      url: `/answer/${question?.id}`,
      payload: getAnswerValue,
      token: true,
    });
  };

  const handleAnswerValue = (value: any) => {
    setAnswerValue(value);
  };

  if (isSuccess) {
    router.push("/questions");
  }

  useEffect(() => {
    const user: any = localStorage.getItem("user");
    setUserDetail(JSON.parse(user));
  }, []);

  const handleDelete = (id: string) => {
    deleteAsync({
      url: `/answer/${question?.id}/${id}`,
      token: true,
    });
  };

  if (delteIsSuccess) {
    router.push("/");
  }

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
          {question && question?.title}
        </Typography>
        <Typography
          sx={{
            pt: 3,
          }}
        >
          {question && question?.text}
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
            let flag = false;
            if (answer?.author?.username == getUserDetail?.username) {
              flag = true;
            }
            return (
              <Typography
                sx={{
                  p: 3,
                  background: "lightgrey",
                }}
              >
                <Typography sx={{ p: 2 }} key={answer?.id}>
                  Answer: {index + 1}) {answer?.text}
                  {flag ? (
                    <DeleteIcon
                      sx={{
                        fontSize: "28px",
                        position: "relative",
                        top: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(answer?.id)}
                    />
                  ) : null}
                </Typography>
              </Typography>
            );
          })}
        </Typography>
        <div>
          <QuillEdit handleAnswerValue={handleAnswerValue} />
        </div>
        <Button
          variant="contained"
          type="submit"
          sx={{
            m: 2,
          }}
          onClick={postAnswer}
        >
          {isLoading ? <CircularProgress color="inherit" /> : "Post Answer"}
        </Button>
      </Typography>
    </Grid>
  );
};
export default answers;
