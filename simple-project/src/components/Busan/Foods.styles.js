import styled from "styled-components";

export const StyledWrap = styled.div`
    width: 1200px;
    height: auto;
    min-height: 1200px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid lightblue;
    box-shadow: 0 0 1px 2px rgba(0,0,0,0.1);
`;
export const StyledTitle = styled.div`
    font-size: 60px;
    font-weight: 700;
    color: #7878b9;
    text-align: center;
    margin: 45px 0px;
`;

export const StyledInnerWrap = styled.div`
    width : 1100px;
    margin : auto;
    height: auto;
    min-height: 800px;
    padding: 12px;
    border : 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledCard = styled.div`
    width : 330px;
    height : 250px;
    margin : 8px;
    padding : 5px;
    box-shadow : 1px 1px 1px 1px rgba(0,0,0,0.2);
    border-radius: 13px;
    display : inline-block;

    &:hover{
        cursor : pointer;
        box-shadow : 1px 1px 1px 1px rgba(0,0,0,0.4);
        opacity : 0.9;
    }
`;

export const StyleImg = styled.img`
 width: 330px;
 height: 180px;
`;

export const StyledStoreName = styled.h3`
    font-weight: bold;
    text-align: center;
    font-size: 17px;
    margin: 0px;
    margin-top: 12px;
`;

export const StyledMoreButton = styled.div`
    width  : 150px;
    height: 50px;
    line-height: 80px;
    text-align: center;
    margin: auto;
    border-radius: 22px;
    background-color: #7878b9;
    color: white;
    font-weight: 900;
    border : 2px dotted lightblue;
    margin-top: 35px;

    &:hover{
        cursor: pointer;
        background-color: white;
        color: #7878b9;
    }
`;
