import styled from "styled-components";
import ETH from "../../img/Ethereum (ETH).png"
import ETH2 from "../../img/ETH2.png"
import ToUpBalance from "component/button/BtnTopUpBalance";

const Div = styled.div`
position: relative;
height: 220px;
border-radius: 16px;
padding: 5%;
background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
.eth-icon {
    position: absolute;
    top: 70px;
    left: 13.33px;
}
.div{
    width: 100%;
    height: 100%;
    /* margin-top: -200px; */
    justify-content: center;
    }
.p{
    /* margin-top: 32px; */
    font-family: DM Sans;
    color: #E0DEE6;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 8px;
    margin-top: 32px;
    /* margin-left: 77.5px; */
}
.p1{
    /* margin-top: 8px; */
    font-family: DM Sans;
    font-size: 30px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    /* text-align: left; */
    color: #FFFFFF;
    /* margin-left: 54px; */
    box-sizing: border-box;
    margin-bottom: 18px;
}

.eth{
    width: 13px;
    height: auto;
    margin-right: 10px;
}
`
const CarBalance = () => {
    return (
        <Div>
            <img className="eth-icon" alt="" src={ETH}></img>
            <p className="p">Your Balance</p>
            <p className="p1">1,034.02</p>
            <img className="eth" alt="" src={ETH2}></img>
            <span>ETH</span>
            <ToUpBalance>

            </ToUpBalance>
        </Div>
    )
}
export default CarBalance;