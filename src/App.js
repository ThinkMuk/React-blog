import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//리액트는 중괄호의 활용이 무궁무진하다

//state는 리액트의 데이터 저장공간이라고 보면 된다
//평범한 let을 사용하지 않고 state를 사용하는 이유는
//웹이 App처럼 동작하게 만들고 싶어서이다. (state는 변경되면 HTML이 자동으로 재렌더링이 된다) **중요
//평범한 let같은 경우는 새로고침을 해야 재렌더링이 된다 하지만 useState는 새로고침없이 HTML에 렌더링됨
//자주 바뀌는, 중요한 데이터들을 변수 말고 state로 저장해서 사용하면 된다

function App() {

  //다른 방식의 데이터 바인딩도 가능하다 (state)
  let titleDesign = { color:'white', fontSize : '30px' };
  // let posts = '강남 고기 맛집';
  //useState를 사용할때는 이렇게 2개의 array가 존재해야 한다.
  //이 useState안에는 문자, 숫자, array, object  다 저장이 가능하다
  let [postTitle, postTitleChangeFunction] = useState(['tempPost1', 'tempPost2', 'tempPost3']);

  return (
    // class 대신 className을 사용
    <div className="App">
      <div className="black-nav">
        <div style={ titleDesign }>ThinkMuk's Blog</div>
      </div>

      <div className="list">
        <h3> { postTitle[0] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { postTitle[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { postTitle[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
