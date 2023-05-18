import React, { useState } from "react";

export const Option = ({ option }) => {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`btn-style ${active ? "color-green" : "color-white"}`}
    >
      <p>{option}</p>
    </div>
  );
};
