import styled from "@emotion/styled";
import React from "react";
import Hero from "../src/components/Hero";
import Search from "../src/components/Search/Search";
import Footer from "../src/components/Footer";

const Background = styled.div`
  background-color: #fbf5f4;
`;

const Index = () => (
  <Background>
    <Hero />
    <Search />
    <Footer />
  </Background>
);

export default Index;
