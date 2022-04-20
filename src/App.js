import "./App.css";
import React from "react";
import Info from "./info";

function App() {
  return (
    <div>
      <h1>프로필</h1>
      <hr></hr>
      <Info
        profile={{
          name: "박정현",
          gender: "남자",
          age: 31,
          email: "junghyun227@naver.com",
          address: "부산시 북구",
        }}
      />
      <hr></hr>
      <Info
        profile={{
          name: "아이유",
          gender: "여성",
          email: "ui@gmail.com",
        }}
      />
    </div>
  );
}

export default App;
