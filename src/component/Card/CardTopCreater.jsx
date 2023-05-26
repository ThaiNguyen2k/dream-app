import styled from "styled-components";
import Item from "component/Item";
import img1 from "img/item1.png"
import img2 from "img/item2.png"
import img3 from "img/item3.png"
import img4 from "img/item4.png"
import img5 from "img/item5.png"
import img6 from "img/item6.png"

const user=[
    {
        id: 1,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img1,
        status: 0
    },
    {
        id: 2,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img2,
        status: 1
    },
    {
        id: 3,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img3,
        status: 0
    },
    {
        id: 4,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img4,
        status: 0
    },
    {
        id: 5,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img5,
        status: 0
    },
    {
        id: 6,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img6,
        status: 0
    }
]

const StyleDiv = styled.div`
    width: 360px;
    height: 478px;
    margin: 25px;
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
                <Item id={user[0].id} name={user[0].name} tag={user[0].tag} img={user[0].img} status={user[0].status}></Item>
                <Item id={user[1].id} name={user[1].name} tag={user[1].tag} img={user[1].img} status={user[1].status}></Item>
                <Item id={user[2].id} name={user[2].name} tag={user[2].tag} img={user[2].img} status={user[2].status}></Item>
                <Item id={user[3].id} name={user[3].name} tag={user[3].tag} img={user[3].img} status={user[3].status}></Item>
                <Item id={user[4].id} name={user[4].name} tag={user[4].tag} img={user[4].img} status={user[4].status}></Item>
                <Item id={user[5].id} name={user[5].name} tag={user[5].tag} img={user[5].img} status={user[5].status}></Item>
            </div>
        </StyleDiv>
    )
}

export default CarTopCre;