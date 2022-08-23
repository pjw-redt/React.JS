import LeftLayout from "./LeftLayout";
import styled from "styled-components";

const About = () => {
    return(
      <AboutLayout>
        <LeftLayout>헤더</LeftLayout>
        <Line></Line>
      </AboutLayout>
    )

};

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Line = styled.hr`
  border: 1;
  background-color: grey;
  width:95%;
  height:0.1px;
  margin 50px;
`;

export default About;