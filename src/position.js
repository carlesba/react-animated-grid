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
export const calculateItemsPerRow = (width, margin, wrapper) => {
  return Math.floor((wrapper - margin) / (margin + width))
}
export const calculateAdaptativeMargin = (wrapper, width, perRow) => {
  return (wrapper - width * perRow) / (perRow + 1)
}
export const calculatePosition = (index, perRow) => {
  const row = Math.floor(index / perRow)
  return { row, col: index - row * perRow }
}
export const calculateCoordinates = (row, col, width, height, margin, verticalMargin) => {
  const vMargin = verticalMargin === undefined
    ? margin : verticalMargin
  return {
    left: (width + margin) * col + margin,
    top: (height + vMargin) * row + vMargin
  }
}
