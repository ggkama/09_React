import { useLocation, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { StyledWrap, StyledTitle, StyledMoreButton } from "../Foods.styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CommentList from "../Comment/CommentList";


/*
const location = useLocation();

console.log(location.state);
*/

const StyledMainImg = styled.img`
    width: 95%;
    height: 500x;
`;

const StyledDescription = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin: 20px 0px;
    padding: 30px;
`;

const StyledOther = styled.div`
    font-size  : 18px;
    text-align: center;
    margin: 15px 0px;

`;

const StyledMap = styled.div`
  width  : 50%;
  height: 600px;
  margin: auto;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 15px;
  box-sizing: border-box;

`;


const FoodDetail = () => {
    const {id} = useParams();
    const [ load, isLoad ] = useState(true);
    // alert(id);

    const [food, setFood] = useState({
        title : "",
        img : "",
        description : "",
        usageTime : "",
        adress : "", 
        lat : "",
        lng : "",
    });

    const [content, setContent] = useState("");
    const [success, isSuccess] = useState(false); // 댓글 작성 성공시 스위치할 예정
    const navi = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost/busans/${id}`)
            .then(result => {
               // console.log(result);
               const response = result.data.getFoodKr.item[0];
               setFood({
                title : response.MAIN_TITLE,
                img : response.MAIN_IMG_NORMAL,
                description : response.ITEMCNTNTS,
                usageTime : response.USAGE_DAY_WEEK_AND_TIME,
                adress : response.ADDR1,
                lat : response.LAT,
                lng : response.LNG,
               });
               isLoad(true);
               // 1. MAIN_TITLE              : 가게이름 response.LAT, response.LNG
               // 2. MAIN_IMG_NORMAL         : 이미지 
               // 3. ITEMCNTNTS              : 소개글
               // 4. USAGE_DAY_WEEK_AND_TIME : 운영시간
               // 5. ADDR1                   : 주소
               // 6. LAT                     : 위도
               // 7. LNG                     : 경도
            if(food.lat){
                var mapContainer = document.getElementById('map'), 
                mapOption = { 
                center: new kakao.maps.LatLng(response.LAT, response.LNG),
                level: 3
                };

                var map = new kakao.maps.Map(mapContainer, mapOption); 


                var markerPosition  = new kakao.maps.LatLng(response.LAT, response.LNG); 


                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });


                marker.setMap(map);

            
            }
            });
    }, [food.lat, load]);

    const submitHandler = (e) => {
        e.preventDefault();

        if(content.trim() === ""){
            alert("내용을 입력해주세요");
            return
        };
        /* 
            정규표현식 활용
        */
        axios.post(`http://localhost/busans/comments`, {
            seq: id,
            content : content,
        }).then((result) => {
            console.log(result);
            setContent("");
            isSuccess(!success);
        });
    };

    const contentHandler = e => {
        setContent(e.target.value);
    }


    if(!load){
        return 
        <StyledWrap>
            <StyledTitle>음식점을 조회중입니다....</StyledTitle>
            
        </StyledWrap>
    }




    return (
    <>
        <StyledWrap>
            <StyledTitle>{food.title}</StyledTitle>
            {food.img && <StyledMainImg src={food.img} />}
            <StyledDescription>{food.description}</StyledDescription>
            <StyledOther>{food.adress}</StyledOther>
            <StyledOther>{food.usageTime}</StyledOther>
            <StyledMap id="map" />
            <StyledMoreButton onClick={() =>navi(-1)}>뒤로가기</StyledMoreButton>
        </StyledWrap>

        <div style={{width : "80%", margin :"auto", height:"600px"}}>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={contentHandler} placeholder="★후기남겨주세요★" value={content}/>

                <button>후기 남기기!</button>
            </form>

        <CommentList id={id} success={success} />
        </div>
    </>
)};

export default FoodDetail;