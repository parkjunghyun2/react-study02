import "./App.css";
import React from "react";
import Info from "./info";

function App() {
  return (
    <div>
      <h1>프로필</h1>
      <Info
        profile={{
          name: "박정현",
          gender: "남자",
          age: 31,
          email: "junghyun227@naver.com",
          address: "부산시 북구",
        }}
      />
    </div>
  );
}

export default App;
