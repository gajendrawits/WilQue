import { useState, useEffect, useContext } from "react";
import useGet from "src/hooks/useGet";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { Button } from "@mui/material";
import router from "next/router";
import Link from "@mui/material/Link";

import CircularProgress from "@mui/material/CircularProgress";
import { QuestionContext } from "src/@core/context/QuestionContext";
import { Space, Pagination } from "antd";

const postsPerPage = 6;

const Container = () => {
  const {
    refetch: fetchQuestions,
    data,
    isLoading,
  } = useGet("ques", "/question");

  const { setQuestionValue } = useContext(QuestionContext);

  const handleClick = (question: any, index: number) => {
    const QuestionObj = { question };
    setQuestionValue(QuestionObj);
    router.push({
      pathname: "/answers",
      query: { question: index + 1 },
    });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const [number, setNumber] = useState(1);

  //   handle Pagination
  const handlePage = (pageNumber: any) => setNumber(pageNumber);

  let newData = data?.slice((number - 1) * postsPerPage, postsPerPage * number);

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
            Ask Question
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

        {newData?.length
          ? newData?.reverse().map((question: any, index: number) => {
              const date = question.created;

              return (
                <Grid sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      mt: 2,
                      p: 2,
                      border: "1px solid lightgrey",
                      display: "flex",
                    }}
                    key={index}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        p: 2,
                      }}
                    >
                      <Typography> Question: </Typography>
                      <Typography sx={{ borderRadius: "50%" }}>
                        <img
                          style={{ borderRadius: "50%" }}
                          src={question.author.profilePhoto}
                        />
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        minWidth: "400px",
                        width: "90%",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <div onClick={() => handleClick(question, index)}>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {question.title}
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
                        Description :
                        <span style={{ padding: 1 }}>{question.text}</span>
                      </Typography>
                      <Typography
                        sx={{
                          display: "flex",
                          gap: 3,
                          pt: 3,
                          width: "100%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Typography
                          sx={{
                            p: 2,
                            display: "flex",
                            gap: 3,
                          }}
                        >
                          {question.tags?.map((tag: any, index: number) => {
                            return (
                              <Typography
                                sx={{
                                  background: "#d0b3f5",
                                  p: 3,
                                  borderRadius: "8px",
                                }}
                                key={index}
                              >
                                #{tag}
                              </Typography>
                            );
                          })}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "right",
                          pt: 2,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Asked by: {question.author.username} At:
                        {moment(date).format("DD-MMM-YYYY")}
                      </Typography>
                    </Typography>
                  </Typography>
                </Grid>
              );
            })
          : null}
        <div className="pagination">
          {!!data?.length && (
            <Space>
              <Pagination
                defaultCurrent={number}
                pageSize={postsPerPage}
                total={data?.length}
                onChange={handlePage}
              />
            </Space>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Container;
