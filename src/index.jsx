import React from "react";
import ReactDOM from "react-dom";
import * as Icon from "react-bootstrap-icons";

import PostFooter from "./components/postFooter.js";

import "./components/index.css";
import MyImg from "./images/MyImg.jpg";
import SirInzamam from "./images/sirInzamam.jpeg";
import Sami from "./images/sami.png";

function Top() {
  return (
    <div>
      <nav>
        <h1>Powerful Thoughts!</h1>
      </nav>
    </div>
  );
}
function Main(props) {
  return (
    <div className="container">
      <div className="post">
        <div className="postHead">
          <div>
            <div className="profile">
              <img src={props.profile} alt="" />
            </div>
            <div>
              <h1>{props.name}</h1>
              <p>{props.date}</p>
            </div>
          </div>
          <div className="menu">
            <div className="toggle_btn">
              <Icon.ThreeDotsVertical />
            </div>
          </div>
        </div>
        <div className="postBody">
          <p>{props.text}</p>
          <div>
            <img src={props.postImg} alt="" />
          </div>
        </div>
        <PostFooter />
      </div>
    </div>
  );
}

// ReactDOM.render(<Top />,document.querySelector("#root")
ReactDOM.render(
  <div>
    <Top />
    <Main
      profile={SirInzamam}
      name="Inzamam Malik"
      date="25-03-2023 12:34pm"
      text="What’s going on here? Well, at first, it just renders “Hello “ because we’re not passing a name yet. But aside from that…
      When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props.
      You might then wonder, where do props come from? How do we pass them in? Good question."
      postImg="https://loremflickr.com/800/400"
    />
    <Main
      profile={MyImg}
      name="Karan Kumar"
      date="20-03-2023 04:45pm"
      text="What’s going on here? Well, at first, it just renders “Hello “ because we’re not passing a name yet. But aside from that…
      When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props.
      You might then wonder, where do props come from? How do we pass them in? Good question."
      postImg="https://picsum.photos/800/400"
    />
    <Main
      profile="https://shorturl.at/awzTY"
      name="Muhammad Hamd"
      date="26-02-2023 07:27pm"
      text="What’s going on here? Well, at first, it just renders “Hello “ because we’re not passing a name yet. But aside from that…
      When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props.
      You might then wonder, where do props come from? How do we pass them in? Good question."
      postImg="https://loremflickr.com/800/400"
    />
    <Main
      profile={Sami}
      name="Sami Shaikh"
      date="01-02-2023 03:12am"
      text="What’s going on here? Well, at first, it just renders “Hello “ because we’re not passing a name yet. But aside from that…
      When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props.
      You might then wonder, where do props come from? How do we pass them in? Good question."
      postImg="https://picsum.photos/800/400"
    />
  </div>,
  document.querySelector("#root")
);
