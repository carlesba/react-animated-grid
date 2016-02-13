# Animated Grid
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A React component that renders its children in a grid animating them when their position changes.
Children's size has to be specified on Component Props.

```jsx
<AnimatedGrid
  width={200}
  height={170}
  margin={10}
  className={'wrapper-classname'}
  transitionTime={'400ms'}
  transitionTimingFunction={'ease-in-out'}
  >
  {listOfElements}
</AnimatedGrid>
```


## Usage

Install dependency
```
npm install react-animated-grid --save
```

Use it on your project
```js
import AnimatedGrid from 'react-animated-grid'
```

## Try it

Clone the project

```
git clone git@github.com:carlesba/animated-grid.git
```

Install dependencies

```
npm install
```

Start server

```
npm start
```

and visit [http://localhost:8080](http://localhost:8080)
