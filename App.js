import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hi pratosh</h1>; //react element
const Title = () => <h1>Title </h1>;
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h2>Hi pratosh bhai   </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
