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
  const titleDesign = { color: "white", fontSize: "30px" };
  // let posts = '강남 고기 맛집';
  //useState를 사용할때는 이렇게 2개의 array가 존재해야 한다.
  //이 useState안에는 문자, 숫자, array, object  다 저장이 가능하다
  const [postTitle, postTitleChangeFunction] = useState([
    ["남자 코트 추천", "2월 17일 발행"],
    ["강남 우동 맛집", "2월 18일 발행"],
    ["C++ 독학", "2월 19일 발행"],
  ]);
  //likeButtonChangeFunc 같은 경우는 likeButton을 바꾸는 함수의 역할을 한다
  const [likeButton, likeButtonChangeFunc] = useState([0, 0, 0]);
  const [modal, modalChangeFunc] = useState(false);
  const [num, numChangeFunc] = useState(0);
  //기본값은 빈 문자열로 설정
  const [userInput, userInputChangeFunc] = useState("");

  //좋아요 누를시 action하는 function
  function changeLikeNum(i) {
    let temp = [...likeButton];
    temp[i] = temp[i] + 1;
    likeButtonChangeFunc(temp);
  }

  //새로운 개시물 만드는 function
  function newPost(inputTitle) {
    let tempTitleList = [...postTitle];
    let tempLike = [...likeButton];

    //unshift 를 사용하면 array 함수 맨 앞에 배치시켜준다
    tempTitleList.unshift([inputTitle, "2월 25일 발행"]);
    tempLike.unshift(0);

    postTitleChangeFunction(tempTitleList);
    likeButtonChangeFunc(tempLike);
  }

  function onReset() {
    userInputChangeFunc("");
    console.log(userInput);
  }

  return (
    // class 대신 className을 사용
    <div className="App">
      <div className="black-nav">
        <div style={titleDesign}>ThinkMuk's Blog</div>
      </div>

      {postTitle.map(function (temp, i) {
        return (
          //map과 같은 반복문에는 항상 key가 존재해야 warning이 안뜬다
          <div className="list" key={i}>
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

      <h3>새로운 글 작성</h3>
      <div className="publish">
        <input
          placeholder="입력하세요"
          onChange={(e) => {
            userInputChangeFunc(e.target.value);
          }}
          // value는 입력창에 떠 있는 값들을 얘기함
          value={userInput}
        />
        <button
          onClick={() => {
            newPost(userInput);
            userInputChangeFunc("");
          }}
        >
          저장
        </button>
      </div>

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
      <p>👍: {props.tempLike[props.tempNum]}</p>
    </div>
  );
}

export default App;
