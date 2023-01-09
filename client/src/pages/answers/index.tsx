import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import QuillEdit from "../editor";
import { useRouter } from "next/router";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";
import DeleteIcon from "@mui/icons-material/Delete";
import useDelete from "src/hooks/useDelete";
import moment from "moment";
import AddCommentSharpIcon from "@mui/icons-material/AddCommentSharp";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
import useGet from "src/hooks/useGet";
import Comment from "src/component/comment";
import {
  Container,
  HeadingWrapper,
  QuestionTitleWrapper,
  LoaderWrapper,
} from "src/styles/answerstyle.tsx";
import CustomizedSnackbars from "src/component/message";
import { answerTypes, commentTypes } from "src/sharedtypes/answertypes";

const Answers = () => {
  const { getQuestionValue } = useContext(QuestionContext);
  const [getAnswerValue, setAnswerValue] = useState("");
  const [getUserDetail, setUserDetail] = useState<any>();
  const [answerError, setAnswerError] = useState<string>();
  const [getOpenAnswer, setOpenAnswer] = useState(false);
  const [getDeleteAnswer, setDeleteAnswer] = useState(false);
  const [upvote, setUpVote] = useState<any>([]);
  const [like, setlike] = useState(false);
  const [unLike, setUnlike] = useState(false);
  const [downVote, setDownVote] = useState<any>([]);

  const [open, setOpen] = useState<any>({});
  const [isSelected, setIsSelected] = useState<any>([]);
  const { question } = getQuestionValue;
  const router = useRouter();
  const { questionId, myquestion } = router.query;
  const { mutateAsync, isLoading, isSuccess, error } = usePost();
  const { mutateAsync: deleteAsync, isSuccess: delteIsSuccess } = useDelete();

  const postAnswer = async () => {
    try {
      const res = await mutateAsync({
        url: `/answer/${questionId}`,
        payload: getAnswerValue,
        token: true,
      });
    } catch (error: any) {
      setAnswerError(error.response.data.errors[0].msg);
    }
  };
  const handleRoute = () => {
    router.push("/askquestion");
  };
  const handleUpVote = (id: any) => {
    setlike(!like);
    let temp = [...upvote];

    if (upvote.includes(id)) {
      temp = temp.filter((i: number) => i !== id);
    } else {
      temp.push(id);
    }
    setUpVote(temp);
  };
  const handleDownVote = (id: any) => {
    setUnlike(!unLike);
    let temp = [...downVote];

    if (downVote.includes(id)) {
      temp = temp.filter((i: number) => i !== id);
    } else {
      temp.push(id);
    }
    setDownVote(temp);
  };
  const handleAnswerValue = (value: string) => {
    setAnswerValue(value);
  };

  if (isSuccess) {
    setTimeout(() => {
      window.location.reload();
      setOpenAnswer(true);
    }, 100);
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
    setTimeout(() => {
      window.location.reload();
      setDeleteAnswer(true);
    }, 100);
  }

  const {
    refetch: fetchSingleQuestions,
    data,
    isLoading: questionLoading,
  } = useGet("singleQuestion", `/question/${questionId}`);

  useEffect(() => {
    setTimeout(() => {
      fetchSingleQuestions();
    }, 150);
  }, []);

  const handleClick = (id?: any) => () => {
    console.log("id", id);
    setOpen((open?: any) => ({
      ...open,
      [id]: !open[id],
    }));
  };
  const handleOnPress = (item: never | any) => {
    let temp = [...isSelected];

    if (isSelected.includes(item)) {
      temp = temp.filter((i: number) => i !== item);
    } else {
      temp.push(item);
    }
    setIsSelected(temp);
  };

  const reversedData = data?.answers?.reverse();
  return (
    <Grid>
      {like && (
        <CustomizedSnackbars
          resetData={getOpenAnswer}
          severity={"success"}
          message={"Sucessfully Upvoted"}
        />
      )}
      {unLike && (
        <CustomizedSnackbars
          resetData={getOpenAnswer}
          severity={"success"}
          message={"Sucessfully DownVoted"}
        />
      )}
      {getOpenAnswer && (
        <CustomizedSnackbars
          resetData={getOpenAnswer}
          severity={"success"}
          message={"Answer Posted !"}
        />
      )}
      {getDeleteAnswer && (
        <CustomizedSnackbars
          resetData={getOpenAnswer}
          severity={"success"}
          message={"Answer Deleted!"}
        />
      )}
      <HeadingWrapper variant="h4">
        <Link>Answers</Link>
        <Button variant="contained" onClick={handleRoute}>
          Ask Questions
        </Button>
      </HeadingWrapper>
      <Typography>
        <QuestionTitleWrapper>{data && data?.title}</QuestionTitleWrapper>
        <Typography
          sx={{
            maxWidth: "100%",
            pt: 3,
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: data?.text }}></div>
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
            <LoaderWrapper>
              <CircularProgress color="inherit" />
            </LoaderWrapper>
          ) : null}
          {data &&
            data?.answers
              ?.reverse()
              .map((answer: answerTypes, index: number) => {
                let flag = false;
                if (answer?.author?.username == getUserDetail?.username) {
                  flag = true;
                }
                const authorName = answer?.author?.username?.substring(
                  0,
                  question?.author?.username?.indexOf("@")
                );

                const date: string = answer.created;
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
                        Answer:
                        <Typography
                          sx={{
                            overflowY: "auto",
                          }}
                          dangerouslySetInnerHTML={{ __html: answer.text }}
                        ></Typography>
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
                      <div onClick={() => handleUpVote(answer?.id)}>
                        <ThumbUpSharpIcon
                          color={
                            upvote.includes(answer?.id) ? "primary" : "inherit"
                          }
                          fontSize="large"
                        />
                      </div>
                      <div
                        onClick={() => {
                          handleDownVote(answer?.id);
                        }}
                      >
                        <ThumbDownAltSharpIcon
                          color={
                            downVote.includes(answer?.id)
                              ? "primary"
                              : "inherit"
                          }
                          fontSize="large"
                        />
                      </div>

                      <div
                        onClick={() => {
                          // handleClick(answer?.id);
                          handleOnPress(answer?.id);
                        }}
                      >
                        <AddCommentSharpIcon
                          color={
                            isSelected.includes(answer?.id)
                              ? "primary"
                              : "inherit"
                          }
                          fontSize="large"
                        />
                      </div>
                    </Box>
                    {answer?.comments?.map((comments: commentTypes) => {
                      return (
                        <Box
                          sx={{
                            m: 2,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          {isSelected.includes(answer?.id) && (
                            <>
                              <>
                                <Avatar
                                  alt="Mary Vaughn"
                                  src={comments.author.profilePhoto}
                                  sx={{
                                    width: 34,
                                    height: 34,
                                    marginRight: 2.75,
                                  }}
                                />
                                <Typography variant="body2">
                                  <div>{comments?.body}</div>
                                </Typography>
                              </>
                            </>
                          )}
                        </Box>
                      );
                    })}
                    <div>
                      <Comment
                        answerId={answer?.id}
                        questionId={questionId}
                        comment={answer?.comments}
                        showCommnetArea={open}
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
            <div>
              {answerError && (
                <p style={{ color: "red", textTransform: "capitalize" }}>
                  Text {answerError}
                </p>
              )}
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
        )}
      </Typography>
    </Grid>
  );
};
export default Answers;
