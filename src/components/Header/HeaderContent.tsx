import React, { ReactElement } from "react";
import { useLocation } from "@reach/router";
import HeaderContentIndex from "./HeaderContentIndex";
import HeaderContentProjects from "./HeaderContentProjects";
import HeaderContentCV from "./HeaderContentCV";
import HeaderContentContact from "./HeaderContentContact";

const HeaderContent = () => {
  const location = useLocation();
  let content: ReactElement | null = null;

  switch (location.pathname) {
    case "/":
      content = <HeaderContentIndex />;
      break;
    case "/projects":
      content = <HeaderContentProjects />;
      break;
    case "/cv":
      content = <HeaderContentCV />;
      break;
    case "/contact":
      content = <HeaderContentContact />;
      break;
    default:
      content = null;
      break;
  }

  return content;
};

export default HeaderContent;
