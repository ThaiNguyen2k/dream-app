import styled from "styled-components";
import Item from "component/Item";
import img1 from "img/item1.png"

const StyleDiv = styled.div`
    width: 360px;
    height: 478px;
    margin: 20px;
    background: #FFFFFF;
    border-radius: 16px;
    color: black;
    .TextItem{
        display: flex;
        justify-content: space-between;
        color: #27262E;
        padding: 24px;
    }
    .Span{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        font-feature-settings: 'salt' on;
    }
    .S2pan{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        text-align: right;
        font-feature-settings: 'salt' on;
    }
`

const CarTopCre = () => {
    return (
        <StyleDiv>
            <div className="TextItem">
                <span className="Span">Top Create</span>
                <span className="S2pan">See all</span>
            </div>
            <div className="Item">
                <Item id="1" name="Nguyen" tag="@nguyen" img={img1}></Item>
                <Item id="1" name="Nguyen" tag="@nguyen" img={img1}></Item>
                <Item id="1" name="Nguyen" tag="@nguyen" img={img1}></Item>
                <Item id="1" name="Nguyen" tag="@nguyen" img={img1}></Item>
                <Item id="1" name="Nguyen" tag="@nguyen" img={img1}></Item>
                <Item id="1" name="Nguyen" tag="@nguyen" img={img1}></Item>
            </div>
        </StyleDiv>
    )
}

export default CarTopCre;