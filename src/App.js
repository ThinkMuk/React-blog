import React from 'react';
import logo from './logo.svg';
import './App.css';

//리액트는 중괄호의 활용이 무궁무진하다

function App() {

  //이렇게 데이터를 받아 왔다고 하면 (15번째 줄 참고)
  //데이터 바인딩이 쉬워짐
  let posts = { color:'white', fontSize : '30px' };


  return (
    // class 대신 className을 사용
    <div className="App">
      <div className="black-nav">
        <div style={ posts }>ThinkMuk's Blog</div>
      </div>
      {/* 이미지 같은 경우는 상단에서 import 해 와 이렇게 중괄호에 넣음 */}
      <img src={ logo }/>
      {/* 자바스크립트와는 달리 쉽게 받아 올 수가 있다 */}
    </div>
  );
}

export default App;
