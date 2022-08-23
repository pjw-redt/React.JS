import styled from "styled-components";

const Header = () =>{
  return(
        <HeaderContainer>
            <Title>쥬의 IT블로그</Title>
        </HeaderContainer>
  );
};

const Title = styled.p`
  align-items: center;
  display: flex;
  color: white;
  font-size: 30px;
  margin: 15px;
  animation-name: ANIMATION_TITLE;           // 속성 이름
  animation-duration: 2s;                   // 지속 시간
  animation-iteration-count: 1;             // 반복 횟수
  animation-timing-function: ease-in-out;   // 애니메이션 가속도 적용
  
  @keyframes ANIMATION_TITLE{                // 진행정도에 따라 스타일 적용
      0% {
        display: none;
        font-size: 50px;
      }
      50% {
        display: flex;
        font-size: 50px;
        opacity: 1;
      }
      100% {
        display: flex;
        opacity: 1;
      }
  }
`;

const HeaderContainer = styled.div`
  background-color: #164EAB;
  align-items: center;
  height: 70px;
  width: 100%;
  animation-name: ANIMATION_NAME;           // 속성 이름
  animation-duration: 2s;                   // 지속 시간
  animation-iteration-count: 1;             // 반복 횟수
  animation-timing-function: ease-in-out;   // 애니메이션 가속도 적용
  
  @keyframes ANIMATION_NAME{                // 진행정도에 따라 스타일 적용
      0% {
        display: none;
        align-items: center;
        height: 1000px;
      }
      50% {
        display: flex;
        opacity: 1;
        align-items: center;
        height: 1000px;
      }
      100% {
        display: flex;
        opacity: 1;
        height: 70px;
      }
  }
`;

export default Header;