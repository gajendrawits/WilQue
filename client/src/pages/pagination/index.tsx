import { useState, useEffect } from "react";
import useGet from "src/hooks/useGet";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import moment from "moment";
import {
  Typography as Typo,
  Space,
  Card,
  Button,
  Input,
  Pagination,
  Empty,
} from "antd";

const { Text, Title, Link } = Typo;
const { Search } = Input;
const exculdeData = [
  "id",
  "logo",
  "link",
  "category",
  "drug_strength",
  "drug_form",
  "pack_size",
];
const postsPerPage = 4;

const Container = () => {
  const {
    refetch: fetchQuestions,
    data,
    isLoading,
  } = useGet("ques", "/question");

  useEffect(() => {
    fetchQuestions();
  }, []);
  // dynamic data
  const [maindata, setMainData] = useState(data || []);
  // search filteration states
  const [search, setSearch] = useState("");
  // pagination states
  const [number, setNumber] = useState(1);

  //   handle Pagination
  const handlePage = (pageNumber: any) => setNumber(pageNumber);

  //   handle search change
  const handleChange = (value: any) => setSearch(value);

  //   click on search button to trigger it
  const onSearch = (value: any) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setMainData(data);
    } else {
      const filterSearch = data.filter((item: any) => {
        return Object.keys(item).some((key) => {
          return exculdeData.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setNumber(1);
      setMainData(filterSearch);
    }
  };

  let newData = maindata.slice(
    (number - 1) * postsPerPage,
    postsPerPage * number
  );

  return (
    <div>
      <div style={{ width: "90%" }}>
        <div className="banner">
          <Text>
            <Title level={3} className="search_title">
              Search Products
            </Title>
          </Text>
          <Text>
            <Title level={5}>
              Find numerous unregistered products that can fulfill you need
            </Title>
          </Text>
        </div>
        <div className="main_container">
          <div>
            <Search
              enterButton="Search"
              size="large"
              placeholder="Search Product"
              className="search_bar"
              onSearch={onSearch}
              onChange={(e: any) => handleChange(e.target.value)}
            />
          </div>
        </div>
        {/* for showing result */}
        <div className="showing_result">
          <div className="filter_search">
            <Text>Showing results for {`"${search} "`}</Text>
          </div>{" "}
          <div className="filter_result">
            <Text>
              showing {maindata.length === 0 ? 0 : number}-
              {maindata.length < postsPerPage ? maindata.length : postsPerPage}{" "}
              of {maindata.length} results
            </Text>
          </div>
        </div>

        {/* for showing cards data */}
        {newData.length ? (
          newData?.map((question: any) => {
            // const {
            //   logo,
            //   link,
            //   id,
            //   category,
            //   manufacturer,
            //   active,
            //   drug_strength,
            //   drug_form,
            //   pack_size,
            // } = item;
            return (
              <Grid sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    mt: 2,
                    p: 2,
                    border: "1px solid lightgrey",
                    display: "flex",
                  }}
                  key={question.index}
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
                    {/* <div onClick={() => handleClick(question, question.index)}> */}
                    <div>
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
                              {tag}
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
                      Asked by: {question.author.username} Created at:{" "}
                      {/* {moment(Date).format("DD-MMM-YYYY")} */}
                    </Typography>
                  </Typography>
                </Typography>
              </Grid>
            );
          })
        ) : (
          <div className="empty_container">
            <div>
              <Empty description={false} className="empty_data">
                No Product Found
              </Empty>
            </div>
          </div>
        )}
        <div className="pagination">
          {!!maindata.length && (
            <Space>
              <Pagination
                defaultCurrent={number}
                pageSize={postsPerPage}
                total={maindata.length}
                onChange={handlePage}
              />
            </Space>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
