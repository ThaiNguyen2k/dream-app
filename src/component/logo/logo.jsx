import styled from "styled-components";
import logo from "img/Logo.png"

const Logo = () => {
    return (
        <StyleL>
            <img src={logo} alt="logo"></img>
            <div>
                <div className="logo-text">MyNFT</div>
                <div className="logo-desc">NFT Marketplace</div>
            </div>
        </StyleL>
    )
}
export default Logo;

const StyleL = styled.div`
  flex-direction: row;
  margin-top: 80px;
  .logo {
    align-items: center;
    gap: 16px;
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