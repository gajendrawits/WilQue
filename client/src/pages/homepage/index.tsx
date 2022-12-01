import React from "react";
import Logo from "assets/svg/witslogo";
import { useForm } from "react-hook-form";
// import TextArea from 'components/FormElements/TextArea'
// import Button from 'components/Button'
import OurInformation from "views/HomePage/OurInformation";
import TermCondition from "views/HomePage/TermCondition/indx";
import FastSolution from "views/HomePage/Fastsolution";
import { yupResolver } from "@hookform/resolvers/yup";
import { messageSchema } from "utils/validations/homepage";
import { FormData } from "interface/pages/homepage";
import { MainContainer, Container } from "styles/pages/homepage";
import { About } from "views/HomePage/About";

const HomePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(messageSchema),
  });

  const onSubmit = handleSubmit((data: any) => console.log(data));

  return (
    <MainContainer>
      <Container>
        <OurInformation />
        <TermCondition />
        <FastSolution />
      </Container>
      <About />
    </MainContainer>
  );
};

export default HomePage;
