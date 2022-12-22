import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress, TextareaAutosize } from "@mui/material";
import { flexbox } from "@mui/system";
import QuillEdit from "../editor";
import router from "next/router";
import { QuestionContext } from "src/@core/context/QuestionContext";
import { AnsContext } from "src/@core/context/AnswerContext";

import usePost from "src/hooks/usePost";
import DeleteIcon from "@mui/icons-material/Delete";
import useDelete from "src/hooks/useDelete";
import moment from "moment";

const answers = () => {
  const { getQuestionValue } = useContext(QuestionContext);
  const { getAnsValue } = useContext(AnsContext);

  const [getAnswerValue, setAnswerValue] = useState("");
  const [getCommentValue, setCommentValue] = useState();
  const [getCommentId, setCommentId] = useState();

  const [getUserDetail, setUserDetail] = useState<any>();

  const handleRoute = () => {
    router.push("/askQuestion");
  };
  const { question } = getQuestionValue;
  console.log("question", question);
  const { answer } = getAnsValue;

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
  const handleComment = (value: any) => {
    setCommentValue(value);
  };

  const postComment = () => {
    mutateAsync({
      url: `https://wil-que-mongo-backend.onrender.com/api/comment/${question?.id}/${getCommentId}`,
      payload: getCommentValue,
      token: true,
    });
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
            const authorName = answer?.author?.username?.substring(
              0,
              question?.author?.username?.indexOf("@")
            );

            const [comment, setComment] = useState(false);
            const date: number = answer.created;
            const currentDate: any = new Date();
            const myDate =
              parseInt(moment(currentDate).format("DD")) -
              parseInt(moment(date).format("DD"));

            return (
              <>
                <Typography
                  sx={{
                    p: 3,
                    background: "lightgrey",
                  }}
                >
                  <Typography
                    sx={{ p: 2, width: "100%", boxSizing: "content-box" }}
                    key={answer?.id}
                  >
                    Answer: {index + 1}
                    <div
                      dangerouslySetInnerHTML={{ __html: answer.text }}
                    ></div>
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

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <p>
                      {authorName} answered
                      {myDate === 0
                        ? " today"
                        : myDate === 1
                        ? " yesterday"
                        : myDate + " days ago"}
                    </p>
                  </div>
                </Typography>

                <p
                  onClick={() => {
                    setComment(!comment);
                  }}
                  style={{
                    paddingLeft: "12px",
                    color: "blue",
                    cursor: "pointer",
                    width: "fit-content",
                  }}
                >
                  Add a comment...
                </p>
                {comment ? (
                  <>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={1}
                      placeholder="Add a comment..."
                      style={{
                        width: "95%",
                        maxWidth: "95%",
                        marginLeft: "12px",
                        padding: "10px",
                        border: "none",
                      }}
                      onChange={(comment: any) => {
                        handleComment(comment.target.value);
                      }}
                    />
                    <Button
                      type="submit"
                      onClick={() => {
                        // postComment();
                      }}
                      sx={{ width: "fit-content" }}
                    >
                      Post Comment
                    </Button>
                  </>
                ) : null}
              </>
            );
          })}
        </Typography>
        <Typography>
          <Typography>
            <p>Post Your Answer</p>
            <div>
              <QuillEdit handleAnswerValue={handleAnswerValue} />
            </div>
          </Typography>
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
      </Typography>
    </Grid>
  );
};
export default answers;
