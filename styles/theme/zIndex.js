// @flow

// type zIndex = {
//   [key: string]: number | Object,
// };
let zIndex = {};
// z-index
export default (zIndex = {
  zLoader: 1000,
  zOverlay: 900,
  zSticky: 100,
  ZHeader: 99,
  zArrows: 10,
  zFilterActions: 1,
});
