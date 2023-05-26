import img1 from "img/item1.png"
import img2 from "img/item2.png"
import img3 from "img/item3.png"
import img4 from "img/item4.png"
import img5 from "img/item5.png"
import img6 from "img/item6.png"
import styled from "styled-components"


const user=[
    {
        id: 1,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img1
    },
    {
        id: 2,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img2
    },
    {
        id: 3,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img3
    },
    {
        id: 4,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img4
    },
    {
        id: 5,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img5
    },
    {
        id: 6,
        name: "Michael Jordan",
        tag: "@jordan_",
        img: img6
    }
]

const StyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    .div{
        flex-direction: column;
    }
`
const StyleBtn = styled.button`
    width: 77px;
    height: 32px;
    background: rgba(84, 41, 255, 0.1);
    border-radius: 20px;
`

const Item=({name, id, img, tag, status})=>{
    return(
        <StyleDiv>
            <p className="id">{id}</p>
            <img src={img}></img>
            <div className="div">
                <p className="name">{name}</p>
                <p className="tag">{tag}</p>
            </div>
            <StyleBtn>Follow</StyleBtn>
        </StyleDiv>
    )
}

export default Item;