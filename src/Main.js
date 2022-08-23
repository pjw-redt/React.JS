import React from "react";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";
import styled from "styled-components";

const App = () =>{
  return(
    <MainLayout>
      <LeftLayout>왼쪽</LeftLayout>
      <RightLayout>오른쪽</RightLayout>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;


export default App;