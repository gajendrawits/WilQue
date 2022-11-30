import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Button from "components/Button";
import {
  ButtonQuestion,
  ButtonSubmit,
  ButtonWrapper,
  Container,
  CrossIcon,
  FirstSection,
  Qheading,
  QuestionText,
} from "styles/components/QuestionPopModal";

interface QuestionProps {
  isClose: () => void;
}

const QuestionPopModal = ({ isClose }: QuestionProps) => {
  const { control } = useForm();

  const handleClose = () => {
    isClose();
  };

  return (
    <Container>
      <FirstSection>
        <CrossIcon>
          <ClearOutlinedIcon sx={{ fontSize: "38px" }} onClick={handleClose} />
        </CrossIcon>
        <Qheading>Ask a Public Question's</Qheading>
      </FirstSection>
      <QuestionText>
        <TextInput
          placeholder="Enter Your Question"
          name={"question"}
          control={control}
          className="question"
        />
      </QuestionText>
      <ButtonWrapper>
        <ButtonQuestion>
          <Button label="View Question" variant="contained" />
        </ButtonQuestion>
        <ButtonSubmit>
          <Button label="Submit" variant="contained" />
        </ButtonSubmit>
      </ButtonWrapper>
    </Container>
  );
};

export default QuestionPopModal;
