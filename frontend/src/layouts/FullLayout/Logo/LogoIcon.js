import React from "react";
import logoicn from "../../../assets/images/pfit.png";
const LogoIcon = (props) => {
  return<div>
    <img alt="Logo" width={175} src={logoicn} {...props} />
  </div> 
};

export default LogoIcon;
