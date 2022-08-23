import styled from "styled-components";
import YM from './YMBlog.png';

const TopLayout = ()=>{
  let TopArray = [];
  for (let i=0; i< 3; i++){
    TopArray.push(          <PostContainer>
      <ImageContainer>
           <img src={YM}></img>
       </ImageContainer>
       <TextContainer>
           <Title>블로그 이전 안내</Title>
           <Text>Jun 21, 2022</Text>
           <Text>#Notice</Text>
      </TextContainer>
   </PostContainer> );
  }
  return TopArray;
};

const BottomLayout = ()=>{
  let BottomArray = [];   /* 컴포넌트 -> (flex 레이아웃을) 하나 만들어서 그 안에서 하나씩 추가 */
  for (let i=0; i< 8; i++){
    BottomArray.push(          <BottomPostContainer>
      <BottomImageContainer>
          <img src={YM}></img>
      </BottomImageContainer>
      <TextContainer>
           <Title>블로그 이전 안내</Title>
          <Text>Jun 21, 2022</Text>
          <Text>#Notice</Text>
      </TextContainer>
  </BottomPostContainer>);
  }
  return BottomArray;
};

const RightLayout = () =>{
    return(
      <Layout>
        <TopContainer>
          <TopLayout></TopLayout>
        </TopContainer>

        <RightLine></RightLine>

        <BottomContainer>
          <BottomLayout></BottomLayout>
        </BottomContainer>
        
      </Layout>    
      )
  };

const RightLine = styled.hr`
  border: 1;
  background-color: grey;
  width:95%;
  height:0.1px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const PostContainer = styled.div`
  display: flex;
`;

const BottomPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 400px;
`;

const ImageContainer = styled.div`
  height: 150px;
  img {height: 150px;}
  margin 15px;
`;

const BottomImageContainer = styled.div`
  height: 200px;
  img {height: 200px;}
  margin 10px;
`;

const TextContainer = styled.div`
  flex-direction: column;
  height: 0px;
`;

const Title = styled.p`
  color: #164EAB;
  font-weight: bold;
  height: 40px;
  font-size: 17px;
  
`;

const Text = styled.p`
  color: grey;
  height: 15px;
  font-weight: light;
`;

const Layout = styled.div`
  margin 50px;
`;

export default RightLayout;