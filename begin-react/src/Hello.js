import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{
    color: color
  }}>
    <b>{isSpecial ? '스페셜 하다': 'not special'}</b>
    안녕하세요. {name}
  </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
};

export default Hello;

