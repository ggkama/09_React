import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeworkCss/Navbar.css';

function Navbar() {
  const navi = useNavigate();

  const buttonList = [
    { text: 'Home', path: '/' },
    { text: 'Chapter01', path: '/chap01' },
    { text: 'Chapter02', path: '/chap02' },
    { text: 'Chapter03', path: '/chap03' },
    { text: 'Chapter03-input', path: '/input' },
    { text: 'Chapter03B', path: '/chap03b' },
    { text: 'Memo', path: '/memo' },
    { text: '부산맛집', path: '/foods' },
    { text: '추가용버튼1', path: '/extra1' },
    { text: '추가용버튼2', path: '/extra2' },
  ];

  return (
    <div className="navbar">
      {buttonList.map((btn, i) => (
        <button
          key={i}
          className="nav-button"
          onClick={() => navi(btn.path)}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
}

export default Navbar;