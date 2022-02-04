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
  let [likeButton, likeButtonChangeFunc] = useState([0, 0, 0]);

  function changeLikeNum(i) {
    let temp = [...likeButton];
    temp[i] = temp[i] + 1;
    likeButtonChangeFunc(temp);
  }

  //배열로 되어있는 데이터를 변경할 때는 전체 배열을 받아와서 변경을 하고 다시 배열을 입력해줘야함
  //글 제목들 알파벳->ㄱㄴㄷ 순으로 정렬 (대신 게시물들의 정보들은 바뀌지 않음)
  // function changePostTitle() {
  //   //postTitle에 있는 데이터를 temp에 복사 ([...ex]는 deep copy)
  //   let temp = [...postTitle];
  //   temp.sort();
  //   postTitleChangeFunction(temp);
  // }

  let [modal, modalChangeFunc] = useState(false);
  let [num, numChangeFunc] = useState(0);

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
      {/* 두번째 파라미터를 선언 시 몇번 반복하는지 나오는 int형 숫자를 사용가능 */}
      {postTitle.map(function (temp, i) {
        return (
          <div className="list">
            <div className="list-design">
              <h3
                onClick={() => {
                  modal == true && num == i
                    ? modalChangeFunc(false)
                    : modalChangeFunc(true),
                    numChangeFunc(i);
                }}
              >
                {" "}
                {temp[0]}{" "}
              </h3>
              <span
                className="like-button"
                onClick={() => {
                  changeLikeNum(i);
                }}
              >
                👍
                {likeButton[i]}
              </span>
            </div>
            <p> {temp[1]}</p>
            <hr />
          </div>
        );
      })}
      {/* 부모 component에서 자식으로 내릴때는 이렇게 작명={state명} 으로 먼저 받아오면 된다 */}
      {modal == true ? (
        <Modal
          tempPostInfo={postTitle}
          tempNum={num}
          tempLike={likeButton}
        ></Modal>
      ) : null}
    </div>
  );
}

// 부모에서 자식으로 내릴때는 props를 사용해 내려야함
// 부모에서 받아올때의 데이터는 모두 지금 'props' 라는 파라미터에 담겨서 내려오는것이다.
// 따라서 이를 부르기 위해서는 props.작명한이름 식으로 불러오면 된다.
function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.tempPostInfo[props.tempNum][0]}</h2>
      <p>{props.tempPostInfo[props.tempNum][1]}</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
