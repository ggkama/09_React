import React from 'react';
import './HomeworkCss/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">React</h1>
      <nav className="header-nav">
        {['게시판', '구매', '판매', '마이페이지', '회원가입', '로그인'].map((text, i) => (
          <a key={i} href="#">{text}</a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
