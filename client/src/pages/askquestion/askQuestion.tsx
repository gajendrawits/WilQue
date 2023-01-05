import React, { useContext, useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import TitleInput from "src/pages/askquestion/titleInput";
import TagInput from "src/pages/askquestion/tagInput";
import TextAskQuestionInput from "src/pages/askquestion/textAskQuestionInput";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";
import BasicModal from "src/component/modal";
import router from "next/router";
import {
  Container,
  AskQuestionHeading,
  PostButton,
} from "src/styles/askquestionstyle/askQuestionStyle";

const AskQuestion = () => {
  const { getQuestionValue, setQuestionValue } = useContext(QuestionContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { mutateAsync, isLoading, isSuccess, isError } = usePost();

  const submitQuestion = () => {
    Object.keys(getQuestionValue).length > 0
      ? mutateAsync({
          url: "/questions",
          payload: getQuestionValue,
          token: true,
        })
      : setOpen(true);
  };

  if (isSuccess) {
    router.push({
      pathname: "/myquestions",
      query: { Question: "Successs" },
    });
  }

  useEffect(() => {
    setQuestionValue({});
  }, []);

  return (
    <>
      <Container>
        <AskQuestionHeading variant="h4">
          <Link>Ask question</Link>
        </AskQuestionHeading>
        <Typography>
          You’re ready to ask a programming-related question and this form will
          help guide you through the process. Looking to ask a non-programming
          question? See the topics here to find a relevant site.
        </Typography>
        <Typography>
          Steps: <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community. Review your question and post it to the site.
          </li>
        </Typography>

        <TitleInput
          label="Title"
          type="text"
          heading="You're asking a question to unkown talented peoples."
        />
        <TextAskQuestionInput />

        <TagInput
          label="Tags"
          heading="Add some tags to describe what your question is about."
        />
        <PostButton type="submit" variant="contained" onClick={submitQuestion}>
          {isLoading ? <CircularProgress color="inherit" /> : "Post"}
        </PostButton>

        {open && (
          <BasicModal
            handleClose={handleClose}
            open={open}
            title={"Empty Fileds"}
            subtitle={"Kindly fill all the fields.."}
          />
        )}
        {isError ? (
          <BasicModal
            handleClose={handleClose}
            open={open}
            title={"Question Not Added"}
          />
        ) : null}
      </Container>
    </>
  );
};
export default AskQuestion;
