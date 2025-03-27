import React from 'react';
import './HomeworkCss/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {['공지사항', '이용약관', '고객센터'].map((text, i) => (
          <a key={i} href="#">{text}</a>
        ))}
      </div>
      <div className="footer-texts">
        <span>서울특별시 남대문로 120</span>
        <span>KH정보교육원 2강의장</span>
      </div>
    </footer>
  );
}

export default Footer;
