const ChildComponent = (props) => {
    console.log(props);
    return (
        <>
            <p>조심할점</p>
            <p>공부하기</p>
        </>
    );
};



const Chapter022 = () => {

    /*
        주의할 점

        React의 함수 컴포넌트는 항상 Pure해야 하기 때문에
        절대로 props값을 변경해서는 안돼~!

        ** 정리 **
        React의 사용 목적 : UI(User Interface)

    */
    return (
        <>
        <ChildComponent name={1} age={15}/>
        <ChildComponent name={2} age={16}/>
        </>
    );
};



export default Chapter022;