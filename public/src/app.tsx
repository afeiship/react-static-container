import React, { useState } from 'react';
import ReactStaticContainer from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  const [count, setCount] = useState(10);
  const [id, setId] = useState(0);
  return (
    <Container>
      <button onClick={(e) => setCount(count + 1)}>Change Counter</button>
      <button onClick={(e) => setId(Date.now())}>Change Id</button>
      <p>
        I can not change.(except the first time.)
        <ReactStaticContainer>{count}</ReactStaticContainer>
      </p>
      <p>
        I can change.(Because i have dependencies changed.)
        <ReactStaticContainer dependencies={[id]}>{count}</ReactStaticContainer>
      </p>
      <p>
        <strong>I can change {count}</strong>
      </p>
    </Container>
  );
};
