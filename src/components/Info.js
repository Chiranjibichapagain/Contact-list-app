import React from "react";
const Info = ({ info }) => {
  const infoStyle = () => {
    const style1 = {
      border: "none",
    };
    const style2 = {
      border: "red solid 1.5px",
    };
    const style3 = {
      border: "green solid 1.5px",
    };

    if (info === "") {
      return style1;
    } else if (info.includes("is deleted")) {
      return style2;
    } else {
      return style3;
    }
  };

  return <h3 style={infoStyle()}>{info}</h3>;
};

export default Info;
