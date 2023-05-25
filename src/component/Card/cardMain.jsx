import styled from "styled-components";
import BackGround from "img/backgroud.png"

const Div = styled.div`
margin-left: 40px;
margin-top: 70px;
`

const CardMain=()=>{
    return(
        <Div >
            <img src={BackGround} alt="" />
        </Div>
    )
}

export default CardMain;