# Animated Grid

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
npm install animated-grid --save
```

Use it on your project
```js
import AnimatedGrid from 'animated-grid'
```

## Try it

```
git clone git@github.com:carlesba/animated-grid.git
npm install
npm start
```

Visit [http://localhost:8080](http://localhost:8080)


