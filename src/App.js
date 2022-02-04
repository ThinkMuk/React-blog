/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//리액트는 중괄호의 활용이 무궁무진하다

//state는 리액트의 데이터 저장공간이라고 보면 된다
//평범한 let을 사용하지 않고 state를 사용하는 이유는
//웹이 App처럼 동작하게 만들고 싶어서이다. (state는 변경되면 HTML이 자동으로 재렌더링이 된다) **중요
//평범한 let같은 경우는 새로고침을 해야 재렌더링이 된다 하지만 useState는 새로고침없이 HTML에 렌더링됨
//자주 바뀌는, 중요한 데이터들을 변수 말고 state로 저장해서 사용하면 된다

function App() {
  //다른 방식의 데이터 바인딩도 가능하다 (state)
  let titleDesign = { color: "white", fontSize: "30px" };
  // let posts = '강남 고기 맛집';
  //useState를 사용할때는 이렇게 2개의 array가 존재해야 한다.
  //이 useState안에는 문자, 숫자, array, object  다 저장이 가능하다
  let [postTitle, postTitleChangeFunction] = useState([
    ["남자 코트 추천", "2월 17일 발행"],
    ["강남 우동 맛집", "2월 18일 발행"],
    ["C++ 독학", "2월 19일 발행"],
  ]);
  //likeButtonChangeFunc 같은 경우는 likeButton을 바꾸는 함수의 역할을 한다
  let [likeButton, likeButtonChangeFunc] = useState(0);

  //배열로 되어있는 데이터를 변경할 때는 전체 배열을 받아와서 변경을 하고 다시 배열을 입력해줘야함
  //글 제목들 알파벳->ㄱㄴㄷ 순으로 정렬 (대신 게시물들의 정보들은 바뀌지 않음)
  // function changePostTitle() {
  //   //postTitle에 있는 데이터를 temp에 복사 ([...ex]는 deep copy)
  //   let temp = [...postTitle];
  //   temp.sort();
  //   postTitleChangeFunction(temp);
  // }

  let [modal, modalChangeFunc] = useState(false);

  return (
    // class 대신 className을 사용
    <div className="App">
      <div className="black-nav">
        <div style={titleDesign}>ThinkMuk's Blog</div>
      </div>
      {/* <button
        onClick={() => {
          changePostTitle();
        }}
      >
        버튼
      </button> */}

      {/* map을 사용한 같은 게시물 반복문 */}
      {postTitle.map(function (temp) {
        return (
          <div className="list">
            {/* onclick안에는 함수만 들어갈 수 있다 
          사용법 onClick={클릭될 때 실행할 함수}
          또는 onClick={ () => {실행할 내용} }식으로 함수를 직접 하나 그 자리에서 만들기도 된다  */}
            <div className="list-design">
              <h3
                onClick={() => {
                  modal == true
                    ? modalChangeFunc(false)
                    : modalChangeFunc(true);
                }}
              >
                {" "}
                {temp[0]}{" "}
              </h3>
              <span
                className="like-button"
                onClick={() => {
                  likeButtonChangeFunc(likeButton + 1);
                }}
              >
                👍
                {likeButton}
              </span>
            </div>
            <p> {temp[1]}</p>
            <hr />
          </div>
        );
      })}

      {/* component 만드는 법 */}
      {/* component의 유의사항은:
      1.이름은 반드시 첫문자가 대문자일것 
      2.return()안에 있는건 태그 하나로 묶어야한다 */}
      {/* component의 단점:
      1. state를 쓸 때 많이 복잡해짐 (상위 component에서 만든 state 쓰려면 props 문법을 이용해야함) */}

      {/* 여기서는 if문 대신 삼항연산자 라는것을 사용함 */}
      {/* ex) 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드 */}
      {/* 부모 component에서 자식으로 내릴때는 이렇게 작명={state명} 으로 먼저 받아오면 된다 */}
      {modal == true ? <Modal tempPostInfo={postTitle}></Modal> : null}
    </div>
  );
}

//component 만드는법
// 부모에서 자식으로 내릴때는 props를 사용해 내려야함
// 부모에서 받아올때의 데이터는 모두 지금 'props' 라는 파라미터에 담겨서 내려오는것이다.
// 따라서 이를 부르기 위해서는 props.작명한이름 식으로 불러오면 된다.
function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.tempPostInfo[0][0]}</h2>
      <p>{props.tempPostInfo[0][1]}</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
