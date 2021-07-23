export const addStylesToElements = (e, stylesObj = {}) => {
  Object.keys(stylesObj)?.forEach((styleKey) => {
    let target = e.target;
    if (stylesObj[styleKey]) {
      target.style[styleKey] = stylesObj[styleKey];
    }
  });
};
