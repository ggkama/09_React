import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const StyledWrap = styled.div`
    width: 1200px;
    height: auto;
    min-height: 1200px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid lightblue;
    box-shadow: 0 0 1px 2px rgba(0,0,0,0.1);
`;
const StyledTitle = styled.div`
    font-size: 60px;
    font-weight: 700;
    color: #7878b9;
    text-align: center;
    margin: 45px 0px;
`;

const StyledInnerWrap = styled.div`
    width : 1100px;
    margin : auto;
    height: auto;
    min-height: 800px;
    padding: 12px;
    border : 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledCard = styled.div`
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

const StyleImg = styled.img`
 width: 330px;
 height: 180px;
`;

const StyledStoreName = styled.h3`
    font-weight: bold;
    text-align: center;
    font-size: 17px;
    margin: 0px;
    margin-top: 12px;
`;

const StyledMoreButton = styled.div`
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


const Foods = () => {
    const [pageNo, setPageNo] = useState(1);
    const [foods, setFoods] = useState([]);
    const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지

    const navi = useNavigate();
    
    useEffect(()=> {
    /*
        fetch(`http://localhost/spring/busans?pageNo=${pageNo}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error("문제발생", err))
        .finally(console.log("꼭무조건함"))
        
        axios({
            url : `http://localhost/spring/busans?pageNo=${pageNo}`,
            method : "get",
        }).then(result => console.log(result));
        */
        

       axios.get(`http://localhost/spring/busans?pageNo=${pageNo}`)
       .then(result => {
        // console.log("결과잘나옴?");
        // console.log(result);
        const response =result.data.getFoodKr.item;
        // console.log(response);
        // foods[1,2,3,4,5,6,7,8,9]
        // response[10,11,12,13,14,15,16 ...]
        setFoods([...foods, ...response]);
        if ( response.length < 9){
            setHasMore(false);
        }
        
       });
    },[pageNo]);

    const clickToButtonHandler = () =>{
        setPageNo((pageNo) => pageNo + 1);
    };



    return(
    <>
        <StyledWrap>
            <StyledTitle>부산맛집</StyledTitle>
                <StyledInnerWrap>
                    { foods.length === 0 ? (
                        <h3>음식점 목록을 불러오는 중입니다.</h3>
                        ) : (
                            foods.map((e) => 
                                <StyledCard key={e.UC_SEQ} onClick={() => navi(`/foods/${e.UC_SEQ}`, {
                                    state : {e},}
                                )}
                                >
                                    <StyleImg src={e.MAIN_IMG_THUMB}/>
                                    <br/>
                                    <StyledStoreName>{e.MAIN_TITLE}</StyledStoreName>
                                </StyledCard>
                        ))
                    }
                </StyledInnerWrap>
                {hasMore && (
                <StyledMoreButton onClick={clickToButtonHandler}>
                    더보기
                </StyledMoreButton>
                )}
        </StyledWrap>
    </>
    );
};

export default Foods;