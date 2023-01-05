import { useState, useEffect } from "react";
import useGet from "src/hooks/useGet";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { Avatar, Card } from "@mui/material";
import { useRouter } from "next/router";
import Link from "@mui/material/Link";
import { Empty } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import { Space, Pagination } from "antd";
import { dataProps } from "src/sharedtypes/myquestiontypes";

const postsPerPage = 4;

const Container = () => {
  const [profileDetails, setProfileDetails] = useState<any>();
  const [number, setNumber] = useState(1);
  const router = useRouter();

  const user = profileDetails?.username;
  const { userName } = router.query;
  const {
    refetch: fetchQuestions,
    data,
    isLoading,
  } = useGet("question", `/question/user/${userName}`);

  const filteredQues = data?.filter((value: dataProps) => {
    return value.author.username === user;
  });

  //   handle Pagination
  const handlePage = (pageNumber: number) => setNumber(pageNumber);
  const reversedData = filteredQues?.reverse();

  let newData = data?.slice((number - 1) * postsPerPage, postsPerPage * number);

  const handleClick = (questionId: string) => {
    router.push({
      pathname: "/answers",
      query: { questionId: questionId },
    });
  };

  useEffect(() => {
    const userData: any = localStorage.getItem("user");
    setProfileDetails(JSON.parse(userData));
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
          <Link>{userName}</Link>
        </Typography>
        {newData?.length !== 0 ? (
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
        ) : null}
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

        {newData?.length ? (
          newData.map((question: dataProps, index: number) => {
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
                        {question.tags?.map((tag: string, index: number) => {
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
                        {" "}
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
          {!!reversedData?.length && (
            <Space>
              <Pagination
                defaultCurrent={number}
                pageSize={postsPerPage}
                total={reversedData?.length}
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
