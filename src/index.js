import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Ball = () => <div className="ball" />;
const Shadow = () => <div className="ball shadow" />;
const Box = ({ children, onClick }) => (
  <div className="box" onClick={onClick}>
    {children}
  </div>
);

const App = () => {
  return (
    <div className="App">
      {Array(4)
        .fill()
        .map((b, p) => (
          <Box onClick={() => {}}>
            {p === 0 ? <Ball /> : null}
            {p === 3 ? <Shadow /> : null}
          </Box>
        ))}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
