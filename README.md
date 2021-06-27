# react-static-container
> Static container for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-static-container
```

## properties
| Name    | Type  | Required | Default        | Description                |
| ------- | ----- | -------- | -------------- | -------------------------- |
| as      | any   | false    | React.Fragment | The static node name.      |
| deps    | array | false    | []             | The deps of the component. |
| dynamic | bool  | false    | false          | The default should update. |


## usage
1. import css
  ```scss
  @import "~@jswork/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@jswork/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React, { useState } from 'react';
  import ReactStaticContainer from '../@jswork/boilerplate-react-component';
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
          I can change.(Because i have deps changed.)
          <ReactStaticContainer deps={[id]}>{count}</ReactStaticContainer>
        </p>
        <p>
          <strong>I can change {count}</strong>
        </p>
      </Container>
    );
  };

  ```

## license
Code released under [the MIT license](https://github.com/afeiship/react-static-container/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-static-container
[version-url]: https://npmjs.org/package/@jswork/react-static-container

[license-image]: https://img.shields.io/npm/l/@jswork/react-static-container
[license-url]: https://github.com/afeiship/react-static-container/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-static-container
[size-url]: https://github.com/afeiship/react-static-container/blob/master/dist/react-static-container.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-static-container
[download-url]: https://www.npmjs.com/package/@jswork/react-static-container
