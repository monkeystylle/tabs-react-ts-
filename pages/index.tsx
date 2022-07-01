import styled from 'styled-components';
import { css } from 'styled-components';

import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(true);

  return (
    <>
      <TabsWrapper>
        <TabsList>
          <TabHead onClick={() => setIndex(0)} active={index === 0}>
            <h2>Tab 1</h2>
          </TabHead>
          <TabHead onClick={() => setIndex(1)} active={index === 1}>
            <h2>Tab 2</h2>
          </TabHead>
          <TabHead onClick={() => setIndex(2)} active={index === 2}>
            <h2>Tab 3</h2>
          </TabHead>
        </TabsList>
        <TabContent hidden={index !== 0}>This is Tab 1 content</TabContent>
        <TabContent hidden={index !== 1}>This is Tab 2 content</TabContent>
        <TabContent hidden={index !== 2}>
          This is Tab 3 content
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            error itaque vitae, facilis alias excepturi nostrum nam consequatur
            nulla quae harum, voluptates aut! Odit, non.
          </p>
        </TabContent>
      </TabsWrapper>
    </>
  );
};

type TabheadProps = {
  active: boolean;
};

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background-color: gainsboro;
  margin: 64px auto;
  padding: 8px;
`;

const TabsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TabHead = styled.div<TabheadProps>`
  font-size: 1.4rem;
  cursor: pointer;
  padding: 12px;
  padding-bottom: 4px;
  background-color: ${({ active }) => active && 'red'};
  ${({ active }) =>
    active &&
    css`
      border-bottom: 4px solid white;
    `}
`;

const TabContent = styled.div``;

export default Home;
