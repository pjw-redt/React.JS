import styled from "styled-components";

const LeftLayout = () =>{
  return(
        <TitleContainer>
            <Title>쥬의 IT블로그</Title>
        </TitleContainer>
  );
};

const Title = styled.p`
  display: flex;
  color: white;
  font-size: 30px;
  margin: 15px;
`;

const TitleContainer = styled.div`
  background-color: #164EAB;
  height: 100%;
  width: 100%;
`;


export default LeftLayout;