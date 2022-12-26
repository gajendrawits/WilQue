import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import usePost from "src/hooks/usePost";

const index = (props: any) => {
  const { questionId, answerId, answer } = props;
  const [getCommentValue, setCommentValue] = useState("");
  const [comment, setComment] = useState(false);
  const { mutateAsync, data, isLoading, isSuccess } = usePost();

  const postComment = async () => {
    const data = {
      comment: getCommentValue,
    };
    mutateAsync({
      url: `/comment/${questionId}/${answerId}`,
      payload: data,
      token: true,
    });
  };
  return (
    <>
      <strong>Comments :</strong>
      {answer &&
        answer?.comments?.map((comments: any) => {
          return (
            <>
              <Typography
                sx={{
                  borderBottom: "1px solid lightgrey",
                }}
              >
                {comments?.body} - {comments?.author?.username}
              </Typography>
            </>
          );
        })}
      <p
        onClick={() => setComment(!comment)}
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
            onChange={(e: any) => setCommentValue(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => {
              postComment();
            }}
            sx={{ width: "fit-content" }}
          >
            {isLoading ? <CircularProgress color="inherit" /> : "Post Comment"}
          </Button>
        </>
      ) : null}
    </>
  );
};
export default index;
