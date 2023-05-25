import styled from "styled-components";
import plus from "img/plus.png"
import vector from "img/Vector.png"

const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 21px;
position: absolute;
width: 196px;
height: 49px;
background: #FFFFFF;
border-radius: 12px;
display: flex;
justify-content: center;
margin-left: 16px;
margin-top: 10px;
.p{
    font-weight: bold;
    color: #000000;
}
`
const ToUpBalance=()=>{
    return(
        <Div>
            <img src={plus}></img>
            <p>Top Up Balance</p>
            <img src={vector}></img>
        </Div>
    )
}

export default ToUpBalance;