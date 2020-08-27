<hr>
<div align="center">
  <h1 align="center">
    react-cursor-follow
  </h1>
</div>

<p align="center">
  <a aria-label="Size" href="v">
    <img alt="Size" src="https://img.shields.io/bundlephobia/min/react-cursor-follow">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@react-hook/mouse-position">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/react-cursor-follow">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/react-cursor-follow">
  </a>
</p>

<pre align="center">npm i react-cursor-follow</pre>
<hr>

A modern cursor follower react component.

## Quick Start

[Check out the example on **CodeSandbox**](https://codesandbox.io/s/react-cursor-follow-example-7emj2?file=/src/App.js)

```jsx harmony
import * as React from 'react'
import Cursor from 'react-cursor-follower'

const Component = (props) => {
  return <Cursor />
}
```

## Props

#### UseMouseOptions

| Property   | Type     | Default | Description                                                                                            |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------ |
| size | `number` | `23`     | The size of the follower in px. |
| color | `string` | `black`     | Any CSS color format works. Used for either background or border-color. |
| pulse | `boolean` | `false`    | Activate infinite pulse animation. |
| hollow | `boolean` | `false`    | Follow circle becomes hollow and has border with 1px and same color as color. |
| opacity | `number` | `1`    | Range [0, 1] |
| easing | `string` | `cubic-bezier(0.18, 0.89, 0.32, 1.28)`    | CSS Easing function for follower transition. |
| duration | `number` | `0.4`    | Transition duration in seconds. |
| custom | `boolean` | `false`    | Set to true if you want to use your own CSS class. |

## LICENSE

MIT