import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledTitle,StyleImg,
    StyledInnerWrap,StyledWrap,
    StyledStoreName,StyledMoreButton,
    StyledCard } from "./Foods.styles";




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