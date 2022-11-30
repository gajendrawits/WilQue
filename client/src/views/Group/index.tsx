import React from "react";

import Button from "components/Button";
import {
  Card,
  CardBody,
  CardButton,
  CardHeading,
  CardText,
  Container,
  LeftWrapper,
  RightWrapper,
} from "styles/views/Group";

const Group = () => {
  return (
    <Container>
      <LeftWrapper>
        <Card>
          <CardHeading>Senior Dev Group</CardHeading>
          <CardBody>
            <CardText>Terms and condition</CardText>
          </CardBody>
          <CardButton>
            <Button label={"Join"} variant="contained" />
          </CardButton>
        </Card>
      </LeftWrapper>
      <RightWrapper>
        <Card>
          <CardHeading>Random Group</CardHeading>
          <CardBody>
            <CardText>Terms and condition</CardText>
          </CardBody>
          <CardButton>
            <Button label={"Join"} variant="contained" />
          </CardButton>
        </Card>
      </RightWrapper>
    </Container>
  );
};

export default Group;
