import styled from "styled-components";
import SearchIcon from "img/search-normal.png";

const Input = styled.input`
    width: 461px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 35px;
    margin: 13px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    font-feature-settings: 'salt' on;
    color: #B9B8BC;
    flex: none;
    order: 1;
    flex-grow: 0;
`

const Search=()=>{
    return(
        <Input type="input" placeholder="Search Item, Collection and Account..">
            {/* <img src={SearchIcon}></img> */}
        </Input>
    )
}

export default Search;