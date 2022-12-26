import { Button, TextareaAutosize } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";
import router from "next/router";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Avatar } from "@material-ui/core";

const index = (props: any) => {
  const [profileDetails, setProfileDetails] = useState<any>();
  useEffect(() => {
    const a: any = localStorage.getItem("user");
    setProfileDetails(JSON.parse(a));
  }, []);
  const { getQuestionValue } = useContext(QuestionContext);

  const { question } = getQuestionValue;
  const [getCommentValue, setCommentValue] = useState("");

  // const [comment, setComment] = useState(false);

  const { mutateAsync, isLoading, isSuccess, data } = usePost();

  const postComment = async () => {
    const data = {
      comment: getCommentValue,
    };
    mutateAsync({
      url: `/comment/${props.questionId}/${props.answerId}`,
      payload: data,
      token: true,
    });
  };

  return (
    <>
      {props.showCommnetArea && (
        <Stack direction="row" spacing={5}>
          <>
            <Avatar src={profileDetails?.profilePhoto} />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={1}
              placeholder="Add a comment..."
              style={{
                width: "95%",
                maxWidth: "80%",
                marginLeft: "12px",
                padding: "10px",
              }}
              onChange={(e: any) => setCommentValue(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                postComment();
              }}
              sx={{ width: "fit-content" }}
            >
              Comment
            </Button>
          </>
        </Stack>
      )}
    </>
  );
};
export default index;
