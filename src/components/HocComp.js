import React from "react";
import { useParams, useLocation } from "react-router-dom";

const GetParmas = (Component) => {
  function HocComp(props) {
    const { id, name } = useParams();
    const { pathname } = useLocation();

    return (
      <Component {...props} id={id} name={name} loc={pathname}></Component>
    );
  }

  return HocComp;
};

export default GetParmas;
