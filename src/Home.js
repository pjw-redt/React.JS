import {Link} from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Home = () => {
    return(
        <HomeLayout>
            <Header>헤더</Header>
            <InnerLayout>
                <HomeTitle> Hello, World! </HomeTitle>
                <HomeLink to="/Main">Blog</HomeLink>
                <HomeLink to="/Main">Project</HomeLink>
                <HomeLink to="/ProblemSol">Problem Solving</HomeLink>
                <HomeLink to="/About">About</HomeLink>
            </InnerLayout>
        </HomeLayout>
    );
}

const HomeLink = styled(Link)`
  font-size:20px;
  text-decoration: none;
  margin: 10px;
  color: black;
`;

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const HomeTitle = styled.p`
  display: flex;
  font-weight: bold;
  height: 30px;
  font-size: 30px;
`;

const InnerLayout = styled.div`
  margin: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Home;