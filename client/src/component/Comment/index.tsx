import { Button, TextareaAutosize } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";
import router from "next/router";

const index = (props: any) => {
  const { getQuestionValue } = useContext(QuestionContext);

  const { question } = getQuestionValue;
  const [getCommentValue, setCommentValue] = useState("");

  const [comment, setComment] = useState(false);

  const { mutateAsync, isLoading, isSuccess, data } = usePost();
  console.log("data", data);
  console.log("question", question);

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
            Post Comment
          </Button>
        </>
      ) : null}
    </>
  );
};
export default index;
