import React from "react";

function Info(props) {
  const { name, gender, age, email, address } = props.profile;
  return (
    <div>
      <h1>이름 : {name}</h1>
      <h1>성별 : {gender}</h1>
      <h1>나이 : {age}</h1>
      <h1>이메일 : {email}</h1>
      <h1>주소 : {address}</h1>
    </div>
  );
}

export default Info;
