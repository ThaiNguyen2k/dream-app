import styled from "styled-components";
import ETH from "../../img/Ethereum (ETH).png"
import ETH2 from "../../img/ETH2.png"
import ToUpBalance from "component/button/BtnTopUpBalance";

const Div = styled.div`
height: 220px;
width: 228px;
left: 32px;
top: 772px;
border-radius: 16px;
padding: 5%;
background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
.img{
margin-left: 13.33px;
margin-top: 41px;
}
.div{
    width: 100%;
    height: 100%;
    margin-top: -200px;
    justify-content: center;
    }
.p{
    margin-top: 32px;
    font-family: DM Sans;
    color: #E0DEE6;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    margin-left: 77.5px;
}
.p1{
    margin-top: 8px;
    font-family: DM Sans;
    font-size: 30px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
    margin-left: 54px;
}
.styleETH{
    display: flex;
    flex-direction: row;
    margin-top: -20px;
    margin-left: 80px;
}
.eth{
    width: 20px;
    height: 20px;
}
.p3{
    margin-top: -2px;
    margin-left: 8px;
}
`
const CarBalance = () => {
    return (
        <Div>
            <img className="img" src={ETH}></img>
            <div className="div">
                <p className="p">Your Balance</p>
                <p className="p1">1,034.02</p>
                <div className="styleETH">
                    <img className="eth" src={ETH2}></img>
                    <p className="p3">ETH</p>
                </div>
                <ToUpBalance>

                </ToUpBalance>
            </div>
        </Div>
    )
}
export default CarBalance;