import React, {Component, PropTypes, Children} from 'react'
import {
  calculateItemsPerRow,
  calculateAdaptativeMargin,
  calculatePosition,
  calculateCoordinates
} from 'position'

class AnimatedGrid extends Component {
  constructor (props) {
    super(props)
    this.updateWrapper = this.updateWrapper.bind(this)
    this.state = {width: 0}
  }
  componentDidMount () {
    this.updateWrapper()
    if (!window) return
    window.addEventListener('resize', this.updateWrapper)
  }
  componentWillUnmount () {
    if (!window) return
    window.removeEventListener('resize', this.updateWrapper)
  }
  updateWrapper () {
    if (!this._wrapper || !this._wrapper.offsetWidth) return
    const width = this._wrapper.offsetWidth
    this.setState({width})
  }
  parseChildren () {
    if (this.state.width === 0) {
      return Children.map((child) => this.renderChild(child))
    }
    const {children, width, height, margin} = this.props
    const elementsPerRow = calculateItemsPerRow(width, margin, this.state.width)
    const newMargin = calculateAdaptativeMargin(this.state.width, width, elementsPerRow)
    return Children.map(children, (child, index) => {
      const {row, col} = calculatePosition(index, elementsPerRow)
      const {top, left} = calculateCoordinates(row, col, width, height, newMargin, margin)
      return this.renderChild(child, top, left)
    })
  }
  renderChild (child, top = 0, left = 0) {
    return (
      <div
        className={this.props.childClassName}
        key={child.key}
        style={this.getChildStyles(top, left)}
      >{child}</div>
    )
  }
  getChildStyles (top, left) {
    const {transitionTime, transitionTimingFunction} = this.props
    return {
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      transition: `${transitionTime} top ${transitionTimingFunction}, ${transitionTime} left ${transitionTimingFunction}`
    }
  }
  render () {
    return (
      <div
        ref={node => this._wrapper = node}
        className={this.props.className}
        style={{position: 'relative'}}
      >{this.parseChildren()}</div>
    )
  }
}
AnimatedGrid.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
  childClassName: PropTypes.string,
  transitionTime: PropTypes.string,
  transitionTimingFunction: PropTypes.string,
  margin: PropTypes.number,
  children: PropTypes.array
}
AnimatedGrid.defaultProps = {
  margin: 10,
  className: '',
  childClassName: '',
  transitionTime: '400ms',
  transitionTimingFunction: 'ease-out'
}

module.exports = AnimatedGrid
