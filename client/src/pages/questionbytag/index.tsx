import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import { QuestionContext } from "src/@core/context/QuestionContext";
import { Space, Pagination, Empty } from "antd";
import { Avatar, Button, Card } from "@mui/material";
import router, { useRouter } from "next/router";
import Link from "@mui/material/Link";
import useGet from "src/hooks/useGet";

const SearchByTag = () => {
  //const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);
  const [number, setNumber] = useState(1);
  const router = useRouter();
  const { searchTag } = router.query;
  const {
    refetch: fetchQuestions,
    data,
    isLoading,
  } = useGet("searchQuestion", `/questions/${searchTag}`);

  const postsPerPage = 4;
  //   handle Pagination
  const handlePage = (pageNumber: any) => setNumber(pageNumber);

  const handleClick = (questionId: any) => {
    router.push({
      pathname: "/answers",
      query: { questionId: questionId },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchQuestions();
    }, 250);
  }, []);

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
          <Link
            sx={{
              textTransform: "capitalize",
            }}
          >
            {searchTag} questions
          </Link>
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
          Total questions : {data?.length}
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

        {data?.length ? (
          data.map((question: any, index: number) => {
            const date = question.created;

            const name = question?.author?.username?.substring(
              0,
              question?.author?.username?.indexOf("@")
            );
            const currentDate: any = new Date();

            const myDate =
              parseInt(moment(currentDate).format("DD")) -
              parseInt(moment(date).format("DD"));
            return (
              <Grid sx={{ mb: 2 }}>
                <Typography
                  onClick={() => handleClick(question.id)}
                  sx={{
                    mt: 2,
                    p: 2,
                    cursor: "pointer",
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
                    <div>
                      <Typography
                        sx={{
                          fontWeight: "700",
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
                            <Card
                              variant="outlined"
                              sx={{
                                background: "#d0b3f5",
                                p: 2,
                                borderRadius: "8px",
                              }}
                              key={index}
                            >
                              #{tag}
                            </Card>
                          );
                        })}
                      </Typography>
                    </Typography>
                    <Typography>
                      <Card
                        variant="outlined"
                        sx={{
                          m: 2,

                          p: 1,
                          width: "fit-content",
                          borderRadius: "8px",
                        }}
                      >
                        Answers :{" " + question.answers?.length}
                      </Card>
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "center",
                        gap: 1,
                        textAlign: "right",
                        pt: 2,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Avatar
                        sx={{ width: 24, height: 24 }}
                        alt="Remy Sharp"
                        src={question.author.profilePhoto}
                      />
                      {name} asked at:
                      {myDate === 0
                        ? "today"
                        : myDate === 1
                        ? "yesterday"
                        : myDate + " days ago"}
                    </Typography>
                  </Typography>
                </Typography>
              </Grid>
            );
          })
        ) : (
          <Empty />
        )}
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

export default SearchByTag;
