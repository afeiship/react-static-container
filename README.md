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
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |


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
  import React from 'react';
  import ReactStaticContainer from '../@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactStaticContainer />
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
