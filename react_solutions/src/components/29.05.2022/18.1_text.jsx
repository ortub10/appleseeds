import React, { useState } from "react";
import "./style.css";
const Exercise18_1 = () => {
  const text = `Lorem Ipsum is simply dummy 
    text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took
    a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently 
    with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`;

  return <Read text={text} max={40} />;
};

export default Exercise18_1;

const Read = ({ text, max }) => {
  const [article, setArticle] = useState(text.slice(0, max) + "...");
  const [textButton, setTextButton] = useState("read more");
  if (text.length < max) {
    return <p>{text}</p>;
  }
  const moreOrLess = () => {
    if (textButton === "read more") {
      setArticle(text);
      setTextButton("show less");
    } else {
      setArticle(`${text.slice(0, max)}...`);
      setTextButton("read more");
    }
  };
  return (
    <p>
      {article}
      <button className="hide_show" onClick={moreOrLess}>
        {textButton}
      </button>
    </p>
  );
};
