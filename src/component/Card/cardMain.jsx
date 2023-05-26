import styled from "styled-components";
import BackGround from "img/backgroud.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide from "img/slide2.png"

const Div = styled.div`
position: relative;
margin-top: 70px;
margin-left: 20px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 54px;
line-height: 120%;
color: #FFFFFF;
.Stext{
    position: absolute;
    left: 0;
    margin-left: 60px;
    margin-top: 77px;
    text-align: left;
}
.Sbutton{
width: 128px;
height: 46px;
background: #ffffff;
border-radius: 40px;
position: absolute;
left: 0;
color: #5429FF;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
margin-top: 243px;
margin-left: 60px;
}
.Sbutton2{
width: 128px;
height: 46px;
background: transparent;
border-radius: 40px;
position: absolute;
left: 0;
border: 1px solid #FFFFFF;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
margin-top: 243px;
margin-left: 232px;
color: #FFFFFF;
}
`

const CardMain = () => {
    return (
        <Carousel verticalSwipe="standard" autoPlay={true} showThumbs={false} infiniteLoop={true}>
            <Div>
                <img src={BackGround} style={{height:'354px'}} />
                <text className="Stext">Discover, Create and Sell Your Own NFT.</text>
                <button className="Sbutton">Discover</button>                <button className="Sbutton">Discover</button>
                <button className="Sbutton2">Create</button>
            </Div>
            <Div>
                <img src={slide} style={{height:'354px'}} />
                {/* <text className="Stext">Discover, Create and Sell Your Own NFT.</text>
                <button className="Sbutton">Discover</button>
                <button className="Sbutton2">Create</button> */}
            </Div>
            <Div>
                <img src={slide} style={{height:'354px'}} />
                {/* <text className="Stext">Discover, Create and Sell Your Own NFT.</text>
                <button className="Sbutton">Discover</button>
                <button className="Sbutton2">Create</button> */}
            </Div>
        </Carousel>
    )
}

export default CardMain;