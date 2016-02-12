# Animated Grid

A React component that renders its children in a grid animating them when their position changes.
Children's size has to be specified on Component Props.

```jsx
<AnimatedGrid
  width={200}
  height={170}
  margin={10}
  className={'wrapper-classname'}
  childClassName={'classname-applied-to-children-wrapper'}
  >
  {listOfElements}
</AnimatedGrid>
```


