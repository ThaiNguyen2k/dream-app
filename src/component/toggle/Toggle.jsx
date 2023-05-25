import React, { useState } from "react";
import styled from "styled-components";
import LightMode from "../../img/LightMode.png"
import DarkMode from "../../img/DarkMode.png"

const Div = styled.div`
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 56px;
    height: 28px;
    gap: 4px;
    padding: 4px;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
    margin-top: -7px;
    .img{
        width: 20px;
        height: 20px;
        padding: 3px;
        justify-content: space-between;
    }
`

const DarkModeToggle = () => {
  return (
    <Div>
       <img className="img" src={LightMode}></img>
       <img className="img" src={DarkMode}></img>
    </Div>
  );
};
export default DarkModeToggle;