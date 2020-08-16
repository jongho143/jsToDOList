const addButton = document.querySelector(".add-button");
const todoListContainer = document.querySelector("#todolist");
const textInput = document.querySelector("#new-task");

function addFunc() {
  console.log("add");
  const text = textInput.value;
  // console.log(text);
  // 엘리멘트들을 생성하는 부분
  const li = document.createElement("li");
  const div = document.createElement("div");
  const textDiv = document.createElement("div");

  textDiv.innerText = text;

  // 자식에 엘리먼트 추가하는 방법
  li.appendChild(div);
  div.appendChild(textDiv);
  todoListContainer.appendChild(li);

  const delButton = document.createElement("button");
  delButton.innerText = "Delete";
  delButton.addEventListener("click", delFunc);
  div.appendChild(delButton);

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", editOnClick);
  div.appendChild(editButton);

  textInput.value = "";
}

// Edit 버튼 클릭 함수
function editOnClick(event) {
  const editInput = document.createElement("input");
  const target = event.target;
  const parentDiv = target.parentNode;
  parentDiv.appendChild(editInput);

  // Edit 버튼을 Edit 완료 버튼으로 변경
  target.remove();
  const editConfirm = document.createElement("button");
  editConfirm.innerText = "Confirm";
  editConfirm.addEventListener("click", editOnConfirm);
  parentDiv.appendChild(editConfirm);
}

// Edit 완료 버튼 클릭 함수
function editOnConfirm(event) {
  const target = event.target;
  const parentDiv = target.parentNode;

  const textDiv = parentDiv.children[0];
  const editInput = parentDiv.children[2];
  // editInput 값 div에 넣기
  textDiv.innerText = editInput.value;

  // 완료 버튼, edit input 제거
  target.remove();
  editInput.remove();

  // 완료 후 Edit 버튼 재생성
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", editOnClick);
  parentDiv.appendChild(editButton);
}

function delFunc(event) {
  const target = event.target;
  const parentLi = target.parentNode.parentNode;

  parentLi.remove();
}

function init() {
  // init 가장 먼저 시작되는 스크립트
  // 맨 처음부터 기능을 바로 넣기 때문에 첫 로드에 필요한 엘리먼트들의 기능들을 추가해줌.
  addButton.addEventListener("click", addFunc);
}

init();

// 함수 실행
// addFunc()

// 함수를 변수로 사용
// addFunc

// const 상수명 = 값;
// let 변수명 = 값;

// 마우스 올려서 확인할 때
// (method) 함수명<무시>(인수들): 리턴값
// (property) 는 = 으로 값을 넣음
