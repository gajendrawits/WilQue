import { Button, TextareaAutosize } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";
import Stack from "@mui/material/Stack";
import { Avatar } from "@material-ui/core";
import router from "next/router";
import useGet from "src/hooks/useGet";

const index = (props: any) => {
  const [profileDetails, setProfileDetails] = useState<any>();
  useEffect(() => {
    const a: any = localStorage.getItem("user");
    setProfileDetails(JSON.parse(a));
  }, []);

  const [getCommentValue, setCommentValue] = useState("");

  const { mutateAsync, isLoading, isSuccess, data } = usePost();
  // const {
  //   refetch: fetchSingleQuestions,
  //   data,
  //   isLoading: questionLoading,
  // } = useGet("singleQuestion", `/question/${props.questionId}`);

  const postComment = async () => {
    const data = {
      comment: getCommentValue,
    };
    mutateAsync({
      url: `/comment/${props.questionId}/${props.answerId}`,
      payload: data,
      token: true,
    });
    window.location.reload();
    // props.fetchSingleQuestions();
    // const path = router.asPath;
    // router.push(path);
    // props.;
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
              onClick={() => postComment()}
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
