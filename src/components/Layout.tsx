import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header/Header";

type Props = {
  children: React.ReactNode;
};

const BodyWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Helmet>
        <title>Adrian Petrov - Full Stack Developer</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          href="//fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic"
          rel="stylesheet"
          type="text/css"
        />
        <link href="theme-2.css" rel="stylesheet" type="text/css" />
      </Helmet>
      <BodyWrapper>
        <Header />
        <Main>
          <div>{children}</div>
        </Main>
        <Footer />
      </BodyWrapper>
    </>
  );
};

export default Layout;
