import styled from "styled-components"
import greenArrow from "../../img/green-arrow.png"
import redArrow from "../../img/red-arrow.png"

const Btn = styled.button`
    background: linear-gradient(0deg, #E9E9E9, #E9E9E9),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
    height: 46px;
    width: 115px;
    left: 1084px;
    top: 225px;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    border-radius: 12px;
    padding: 11px 22px 11px 22px;
    border: 1px solid #E9E9E9;
    color: ${props => props.percent < 0 ? "red" : "#747475"};
    
`
const Img = styled.img`
    margin-right: 10px;
`

export const Button = ({ percent, children, ...rest }) => {
    return <Btn percent={percent} {...rest} ><Img src={percent < 0 ? redArrow : greenArrow} alt="alt"></Img>{children}</Btn>
}