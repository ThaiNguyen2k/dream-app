import styled from "styled-components";
import logo from "../../img/Logo.png";
import marketIcon from "../../img/shop.png";
import { NavLink } from "react-router-dom";
import judge from "../../img/judge.png";
import Group from "../../img/Group.png"
import Catelogy from "../../img/category.png"
import Coin from "../../img/buy-crypto.png"
import Wallet from "../../img/wallet.png"
import History from "../../img/clock.png"
import Setting from "../../img/setting.png"
import LightMode from "../../img/Light-Mode.png"
import DarkModeToggle from "../../component/toggle";

const StyledSideBar = styled.div`
  background-color: white ;
  height: 100vh;
  padding: 32px;
  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 30px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262E;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7A797D;

  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7A797D;
  margin-bottom: 20px;
  a {
    text-decoration: unset;
    color: #7A797D;
  }
  
`;
const P = styled.p`
  font-weight: bold;
  font-family: sans-serif;
`
const NavItem = ({ text, path }) => {
  return (
    <StyledNavItem>
      <img src={text === "Dashboard" ?  Catelogy : ( text === "Market" ? marketIcon : 
      ( text === "Active Bids" ? judge : ( text === "My Portfolio" ? Coin : (text ==="Wallet"? Wallet : 
      ( text === "Favourites"? Group: (text === "History"? History : (text === "Setting"? Setting : LightMode)))))))} alt="nav-icon"></img>
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  )
}
const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <div>
          <div className="logo-text">MyNFT</div>
          <div className="logo-desc">NFT Marketplace</div>
        </div>
      </div>
      <div className="nav">
        <NavItem text="Dashboard" path="/"></NavItem>
        <NavItem text="Market" path="/login"></NavItem>
        <NavItem text="Active Bids" path="/about"></NavItem>
        <P>PROFILE</P>
        <NavItem text="My Portfolio"></NavItem>
        <NavItem text="Wallet"></NavItem>
        <NavItem text="Favourites"></NavItem>
        <NavItem text="History"></NavItem>
        <NavItem text="Setting"></NavItem>
        <P>OTHER</P>
        <NavItem text="Light Mode">
        </NavItem>
      </div>
    </StyledSideBar>
  );
};
export default SideBar;
