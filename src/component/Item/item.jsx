import styled from "styled-components";

const StyleDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    text-align: left;
    justify-content: space-around;
    .div{
        flex-direction: column;
    }
    .name{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        font-feature-settings: 'salt' on;
    }
    .tag{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        font-feature-settings: 'salt' on;
        color: #747475;
    }
`
const StyleBtn = styled.button`
    width: 77px;
    height: 32px;
    background: rgba(84, 41, 255, 0.1);
    border-radius: 20px;
`
const StyleBtnF = styled(StyleBtn)`
    background: #5429FF;
    color: #ffffff;
`

const Item=({name, id, img, tag, status})=>{
    return(
        <StyleDiv>
            <p className="id">{id}.</p>
            <img width={44} height={44} src={img}></img>
            <div className="div">
                <p className="name">{name}</p>
                <p className="tag">{tag}</p>
            </div>
            {status==0? <StyleBtn>Follow</StyleBtn> : <StyleBtnF>Following</StyleBtnF>}
        </StyleDiv>
    )
}

export default Item;