import React, {Component} from 'react'
import AnimatedGrid from '../src/AnimatedGrid'
require('./main.sass')
const newArray = (length) => {
  return Array.apply(null, Array(length)).map(Number.prototype.valueOf, 0)
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      removedElements: [],
      elements: newArray(10).map((x, i) => {
        return {id: i, name: `element-${i}`}
      })
    }
  }
  render () {
    return (
      <div className='app'>
        <header className='header'>
          <h1>Animated Grid</h1>
          <div>Click on an element to remove it. Or here to <button onClick={() => this.setState({removedElements: []})}>Reset</button>
          </div>
        </header>
        <AnimatedGrid
          width={170}
          height={200}
          margin={10}
          className='gallery'
          transitionTime={'400ms'}
          transitionTimingFunction={'ease-in-out'}
          >
          {this.renderElements()}
        </AnimatedGrid>
      </div>
    )
  }
  renderElements () {
    const {elements, removedElements} = this.state
    return elements
    .filter(({id}) => removedElements.indexOf(id) < 0)
    .map(item => {
      const {id, name} = item
      return (
        <div
          className='item'
          key={id}
          onClick={() => this.removeElement(id)}
          >{name}</div>
      )
    })
  }
  removeElement (id) {
    const {removedElements} = this.state
    this.setState({
      removedElements: removedElements.concat([id])
    })
  }
}

export default App
