"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  m == min margin
  W == Wraper width
  w == element's width
  n == number of elements per row
  M == new margin to apply to adapt properly

  |        W          |
   ___________________
  | m | w | m | w | m |

  W = 2 * w + 3 * m = 2( m + w ) + m = n ( m + w ) + m
  n = ( W - m ) / ( m + w )
  M = ( W - w * n ) / ( n + 1 )
  */
var calculateItemsPerRow = exports.calculateItemsPerRow = function calculateItemsPerRow(width, margin, wrapper) {
  return Math.floor((wrapper - margin) / (margin + width));
};
var calculateAdaptativeMargin = exports.calculateAdaptativeMargin = function calculateAdaptativeMargin(wrapper, width, perRow) {
  return (wrapper - width * perRow) / (perRow + 1);
};
var calculatePosition = exports.calculatePosition = function calculatePosition(index, perRow) {
  var row = Math.floor(index / perRow);
  return { row: row, col: index - row * perRow };
};
var calculateCoordinates = exports.calculateCoordinates = function calculateCoordinates(row, col, width, height, margin, verticalMargin) {
  var vMargin = verticalMargin === undefined ? margin : verticalMargin;
  return {
    left: (width + margin) * col + margin,
    top: (height + vMargin) * row + vMargin
  };
};