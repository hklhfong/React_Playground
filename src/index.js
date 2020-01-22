import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1 style={{ color: "yellow" }}>Ho Fong Law</h1>
      <p style={{ backgroundColor: "yellow" }}>
        Hi,My name is Ken.Nice to meet you.I come from Hong Kong and Like to
        code!!
      </p>
      <ol>
        <li>Japan</li>
        <li>Korea</li>
        <li>China</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
