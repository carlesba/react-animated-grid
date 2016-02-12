import React, {Component} from 'react'
import AnimatedGrid from './AnimatedGrid'

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
    const styles = {
      maxWidth: '60%',
      width: '900px',
      margin: 'auto'
    }
    return (
      <div style={styles}>
        <header style={{backgroundColor: '#CCC', padding: '20px'}}>
          <h1>Animated Grid</h1>
          <div>Click on an element to remove it</div>
        </header>
        <AnimatedGrid
          width={170}
          height={200}
          margin={10}
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
          style={this.elementStyle}
          >{name}</div>
      )
    })
  }
  get elementStyle () {
    return {
      backgroundColor: '#FC0',
      height: '200px',
      width: '170px',
      cursor: 'pointer'
    }
  }
  removeElement (id) {
    const {removedElements} = this.state
    this.setState({
      removedElements: removedElements.concat([id])
    })
  }
}

export default App
