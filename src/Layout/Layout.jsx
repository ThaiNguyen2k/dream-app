import Header from "../component/Header";
import styled from "styled-components";
import {SideBar} from "../component/SideBar"

const LayoutStyled = styled.div`
  background-color: #1c233d;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
  }
`;
const ContentStyled = styled.div`
  background-color: #f23412;
  margin-top: 56px;
  height: 100vh;
`;
const SideBarStyled = styled.div`
  float: left;
  width: 20%;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        <SideBar></SideBar>
      </SideBarStyled>
      <div className="right">
        <Header />
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;