/* useState활용해보기 */
import { useState } from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
    width:1000px;
    min-height: 800px;
    height: auto;
    margin : auto;
    border: 1px solid rgba(0,0,0,0.17);
    border-radius: 12px;
    padding: 25px;
`;

const StyledTitle = styled.h1`
    font-size : 40px;
    color : lightpink;
    text-align: center;
`;

const StyledHr = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    margin : 50px 0px;
    width: 100%;
    `;

const StyledMemo = styled.div`
    width : 260px;
    height: 140px;
    margin: 20px;
    padding: 7px;
    background-color: lightyellow;
    border : 1px solid yellow;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 2px black;
    display: inline-block;
`;

const StyledContent = styled.div`
  width  : 90%;
  height: 60%;
  margin : auto;
  padding : 7px;
  font-size : 19px;
  text-align : center;

`;

const StyledWriter = styled.div`
  width  : 90%;
  height: 60%;
  padding : 7px;
  font-weight: bold;
  text-align : right;
  margin: auto;
`;

const Memo = () =>{
    // AJAX요청을 잘 보내서 응답을 받았다는 가정하에
    // 메모들이 반환됨(Table에서 조회됨)
    const [memos, setMemos] = useState([
        {
            writer : '짱구',
            content : '가가가가가가',
        },
        {
            writer : '철수',
            content : '나나나나나나',
        },
        {
            writer : '맹구',
            content : '다다다다다다',
        },
        {
            writer : '유리',
            content : '라라라라라라',
        },
    ]);

    const [content, setContent] = useState("");
    const [writer, setWriter] = useState("");
    // state : 컴포넌트에서 사용할 변수
    // state의 변화가 일어나면 컴포넌트가 재렌더링함
    // useState() => [value, setValue] == value 인자로 전달한 초기값의 식별자
    //                                 == setValue value를 변경할 수 있는 setter함수
    const inputContentHandler = (e) => {
        setContent(e.target.value);
    };
    const inputWriterHandler = (e) => {
        setWriter(e.target.value);
    };
    
    // 추가하기 버튼 클릭 시 memoState에 새롭게 요소를 추가할 핸들러
    const addMemo = () => {
        const memo = { writer : writer, content : content};
        
        // setState를 이용해서 memo state를 변경
        //memos.push(memo);
        setMemos([...memos, memo]);

        setContent("");
        setWriter("");
    };

    return(
        <>
        <StyledWrap>
        <StyledTitle>메모작성메모작성</StyledTitle>
        <styledHr>
            {
                memos ? (
                memos.map((memo, i) => (
                    <StyledMemo key={i}>
                        <StyledContent>{memo.content}</StyledContent>
                        <StyledWriter>{memo.writer}</StyledWriter>
                    </StyledMemo>
                ))
            ) : (<h2>메모가 존재하지 않습니다.</h2>

            )};
            <div>
                <h4>내용을 입력해주세요</h4>
                <input type="text" onChange={inputContentHandler} value={content}/>
                <br/>
            </div>
            <div>
                <h4>작성자를 입력해주세요</h4>
                <input type="text" onChange={inputWriterHandler} value={writer}/>
                <br/>
            </div>
            <button onClick={addMemo}>메모추가하기</button>
        </styledHr>
        </StyledWrap>
        </>
    );
};


export default Memo;