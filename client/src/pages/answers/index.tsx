import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Comment from "src/component/comment";
import Box from "@mui/material/Box";
import QuillEdit from "../editor";
import { useRouter } from "next/router";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";
import DeleteIcon from "@mui/icons-material/Delete";
import useDelete from "src/hooks/useDelete";
import { Divider } from "@mui/material";
import moment from "moment";
import AddCommentSharpIcon from "@mui/icons-material/AddCommentSharp";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
import useGet from "src/hooks/useGet";

const answers = () => {
  const { getQuestionValue } = useContext(QuestionContext);
  const [getAnswerValue, setAnswerValue] = useState("");
  const [getUserDetail, setUserDetail] = useState<any>();
  const [comment, setComment] = useState(true);
  const { question } = getQuestionValue;
  const router = useRouter();
  const { questionId, myquestion } = router.query;
  const { mutateAsync, isLoading, isSuccess } = usePost();
  const { mutateAsync: deleteAsync, isSuccess: delteIsSuccess } = useDelete();

  const postAnswer = () => {
    mutateAsync({
      url: `/answer/${questionId}`,
      payload: getAnswerValue,
      token: true,
    });
  };
  const handleRoute = () => {
    router.push("/askquestion");
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
      url: `/answer/${questionId}/${id}`,
      token: true,
    });
  };

  if (delteIsSuccess) {
    router.push("/");
  }

  const Container = styled("div")(() => ({
    "& .MuiTypography-root": {
      img: {
        maxWidth: "95%",
      },
    },
  }));

  const {
    refetch: fetchSingleQuestions,
    data,
    isLoading: questionLoading,
  } = useGet("singleQuestion", `/question/${questionId}`);

  useEffect(() => {
    setTimeout(() => {
      fetchSingleQuestions();
    }, 250);
  }, []);
  console.log("data", data);
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
          {data && data?.title}
        </Typography>
        <Typography
          sx={{
            pt: 3,
          }}
        >
          {data && data?.text}
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
          {questionLoading ? (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "20vh",
              }}
            >
              <CircularProgress color="inherit" />
            </Typography>
          ) : null}
          {data &&
            data?.answers?.map((answer: any, index: number) => {
              let flag = false;
              if (answer?.author?.username == getUserDetail?.username) {
                flag = true;
              }
              const authorName = answer?.author?.username?.substring(
                0,
                question?.author?.username?.indexOf("@")
              );

              const date: number = answer.created;
              const currentDate: any = new Date();
              const myDate =
                parseInt(moment(currentDate).format("DD")) -
                parseInt(moment(date).format("DD"));

              return (
                <Container>
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

                  <Box
                    sx={{
                      display: "flex",
                      gap: 5,
                    }}
                  >
                    <ThumbUpSharpIcon
                      color={comment ? "inherit" : "inherit"}
                      fontSize="large"
                    />
                    <ThumbDownAltSharpIcon
                      color={comment ? "inherit" : "inherit"}
                      fontSize="large"
                    />
                    <div
                      onClick={() => {
                        setComment(!comment);
                      }}
                    >
                      <AddCommentSharpIcon
                        color={comment ? "primary" : "inherit"}
                        fontSize="large"
                      ></AddCommentSharpIcon>
                    </div>
                  </Box>
                  <Box
                    sx={{
                      maxHeight: "50px",
                      overflowY: "scroll",
                      mb: 1,
                    }}
                  >
                    {answer?.comments?.map((comments: any) => {
                      return (
                        <>
                          <Box
                            sx={{
                              mr: 6,
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {comment && (
                              <Avatar
                                alt="Mary Vaughn"
                                src={comments.author.profilePhoto}
                                sx={{
                                  width: 34,
                                  height: 34,
                                  marginRight: 2.75,
                                }}
                              />
                            )}
                            <Typography
                              variant="body2"
                              sx={{
                                width: "100%",
                              }}
                            >
                              {comment && <div>{comments?.body}</div>}
                            </Typography>
                          </Box>
                          {comment && <Divider />}
                        </>
                      );
                    })}
                  </Box>
                  <div>
                    <Comment
                      answerId={answer?.id}
                      questionId={questionId}
                      comment={answer?.comments}
                      showCommnetArea={comment}
                      fetchSingleQuestions={fetchSingleQuestions}
                    />
                  </div>
                </Container>
              );
            })}
        </Typography>

        {myquestion ? null : (
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
        )}
      </Typography>
    </Grid>
  );
};
export default answers;
