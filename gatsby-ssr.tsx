import React from "react";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPostBodyComponents,
  setHeadComponents,
}) => {
  setHeadComponents([
    <link key={1} href="theme-2.css" rel="stylesheet" type="text/css" />,
  ]);
  setPostBodyComponents([
    <script key={1} type="text/javascript" src="popper.min.js"></script>,
    <script key={2} type="text/javascript" src="bootstrap.min.js"></script>,
  ]);
};
