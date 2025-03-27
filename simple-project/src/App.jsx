import './App.css'
import Button from './components/modules/Button';
import FirstComponent from './components/modules/FirstComponent';
import { Lego, Gole } from './components/modules/LegoAndGole';
import WhatIsJsx from './components/Chapter/WhatIsJsx';
import WhatIsReact from './components/Chapter/WhatIsReact';
import Chapter01 from './components/Chapter/Chapter01/Chpater01';
import Chapter02 from './components/Chapter/Chapter02/Chapter02';
import Chapter022 from './components/Chapter/Chapter02/Chapter02-2';
import Header from './components/Chapter/Homework/Header';
import Footer from './components/Chapter/Homework/Footer';
import Navbar from './components/Chapter/Homework/Navbar';
import { Routes, Route } from "react-router-dom";
import Chapter03 from './components/Chapter/Chapter03/Chapter03';
import Chapter03Input from './components/Chapter/Chapter03/Chapter03_input';
import Chapter03B from './components/Chapter/Chapter03/Chapter03B';
import Memo from './components/Memo/Memo';
import Foods from './components/Busan/Foods';
import FoodDetail from './components/Busan/Detail/FoodDetail';



/* 
  URL을 이용해서 url이 
  Chapter01일 경우 Chapter01컴포넌트를 보여주고
  Chapter02일 경우 Chapter02컴포넌트를 보여주고
  /일 경우 메인화면을 보여주고
  요청 URL에 따라서 다른 컴포넌트를 보여줄 수 있도록 React-router를 사용할 예정
  
  터미널에 npm install react-router-dom을 입력하여 설치가능
  
*/


function App() {

  return( 
    <> {false && <WhatIsJsx/> &&
       <WhatIsReact/> &&
       <Button/> &&
       <Lego/> &&
       <Gole/> &&
       <FirstComponent/> && <Chapter01/> 
       && <Chapter02 /> && <Chapter022/>}
       <Header/>
       <Navbar/>
       <Routes>
          <Route path="/" element={<WhatIsReact />}/>
          <Route path="/chap01" element={<Chapter01 />}/>
          <Route path="/chap02" element={<Chapter02 />}/>
          <Route path="/chap03" element={<Chapter03 />}/>
          <Route path="/input" element={<Chapter03Input />}/>
          <Route path="/chap03b" element={<Chapter03B />}/>
          <Route path="/memo" element={<Memo />}/>
          <Route path="/foods" element={<Foods />}/>
          <Route path="/foods/:id" element={<FoodDetail />}/>
          <Route path="/*" element={<h1>존재하지 않는 페이지 요청입니다.</h1>}/>
       </Routes>
       
       <Footer/>
       
       </>
    

);



}


export default App
