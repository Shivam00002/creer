import React from "react";
import { useState } from "react";
import { Option } from "./Option";

export const Question = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <h2>{item.question}</h2>
      <div className="options flex gap-[10px] ml-[16px] mt-[4px] p-[5px] ">
        {item.options.map((option) => (
          <div
            onClick={() => setActive(!active)}
            className={`btn-style ${active ? "color-green" : "color-white"}`}
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    </>
  );
};
