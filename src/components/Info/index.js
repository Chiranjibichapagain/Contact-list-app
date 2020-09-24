import React from "react";
const Info = ({ info }) => {
  const infoStyle = () => {
    const style1 = {
      color: "#1D1D1D",
      textAlign: "center",
      margin: 0,
    };
    const style2 = {
      color: "#FE3434",
      textAlign: "center",
      margin: 0,
    };
    const style3 = {
      color: "#099806",
      textAlign: "center",
      margin: 0,
    };

    if (info === "Welcome to Contact-List App") {
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
