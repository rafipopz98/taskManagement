"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const GlobalStyleProvider = ({ children }: Props) => {
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 250);
  }, []);
  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }
  return <GlobalStyles>{children}</GlobalStyles>;
};

export default GlobalStyleProvider;

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;
