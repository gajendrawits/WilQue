import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TitleInput from "src/pages/askQuestion/titleInput";
import TagInput from "src/pages/askQuestion/tagInput";
import TextAskQuestionInput from "src/pages/askQuestion/textAskQuestionInput";
import { QuestionContext } from "src/@core/context/QuestionContext";
import usePost from "src/hooks/usePost";

interface askQuestion {
  questionType: string;
}

const index = (props: askQuestion) => {
  const { getQuestionValue } = useContext(QuestionContext);

  const { mutateAsync } = usePost();

  const submitQuestion = () => {
    mutateAsync({
      url: "/questions",
      payload: getQuestionValue,
      token: true,
    });
  };

  return (
    <Grid
      sx={{
        pb: 6,
        width: "80%",
        minWidth: "700px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          pb: 6,
        }}
      >
        <Link>Ask a {props.questionType} question</Link>
      </Typography>
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
      <Button
        sx={{ width: "90px" }}
        type="submit"
        variant="contained"
        onClick={submitQuestion}
      >
        Post
      </Button>
    </Grid>
  );
};
export default index;
