'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _position = require('position');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimatedGrid = function (_Component) {
  _inherits(AnimatedGrid, _Component);

  function AnimatedGrid(props) {
    _classCallCheck(this, AnimatedGrid);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AnimatedGrid).call(this, props));

    _this.updateWrapper = _this.updateWrapper.bind(_this);
    _this.state = { width: 0 };
    return _this;
  }

  _createClass(AnimatedGrid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateWrapper();
      if (!window) return;
      window.addEventListener('resize', this.updateWrapper);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!window) return;
      window.removeEventListener('resize', this.updateWrapper);
    }
  }, {
    key: 'updateWrapper',
    value: function updateWrapper() {
      if (!this._wrapper || !this._wrapper.offsetWidth) return;
      var width = this._wrapper.offsetWidth;
      this.setState({ width: width });
    }
  }, {
    key: 'parseChildren',
    value: function parseChildren() {
      var _this2 = this;

      if (this.state.width === 0) {
        return _react.Children.map(function (child) {
          return _this2.renderChild(child);
        });
      }
      var _props = this.props;
      var children = _props.children;
      var width = _props.width;
      var height = _props.height;
      var margin = _props.margin;

      var elementsPerRow = (0, _position.calculateItemsPerRow)(width, margin, this.state.width);
      var newMargin = (0, _position.calculateAdaptativeMargin)(this.state.width, width, elementsPerRow);
      return _react.Children.map(children, function (child, index) {
        var _calculatePosition = (0, _position.calculatePosition)(index, elementsPerRow);

        var row = _calculatePosition.row;
        var col = _calculatePosition.col;

        var _calculateCoordinates = (0, _position.calculateCoordinates)(row, col, width, height, newMargin, margin);

        var top = _calculateCoordinates.top;
        var left = _calculateCoordinates.left;

        return _this2.renderChild(child, top, left);
      });
    }
  }, {
    key: 'renderChild',
    value: function renderChild(child) {
      var top = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var left = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

      return _react2.default.createElement(
        'div',
        {
          className: this.props.childClassName,
          key: child.key,
          style: this.getChildStyles(top, left)
        },
        child
      );
    }
  }, {
    key: 'getChildStyles',
    value: function getChildStyles(top, left) {
      var _props2 = this.props;
      var transitionTime = _props2.transitionTime;
      var transitionTimingFunction = _props2.transitionTimingFunction;

      return {
        position: 'absolute',
        top: top + 'px',
        left: left + 'px',
        transition: transitionTime + ' top ' + transitionTimingFunction + ', ' + transitionTime + ' left ' + transitionTimingFunction
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            return _this3._wrapper = node;
          },
          className: this.props.className,
          style: { position: 'relative' }
        },
        this.parseChildren()
      );
    }
  }]);

  return AnimatedGrid;
}(_react.Component);

AnimatedGrid.propTypes = {
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  className: _react.PropTypes.string,
  childClassName: _react.PropTypes.string,
  transitionTime: _react.PropTypes.string,
  transitionTimingFunction: _react.PropTypes.string,
  margin: _react.PropTypes.number,
  children: _react.PropTypes.array
};
AnimatedGrid.defaultProps = {
  margin: 10,
  className: '',
  childClassName: '',
  transitionTime: '400ms',
  transitionTimingFunction: 'ease-out'
};

module.exports = AnimatedGrid;