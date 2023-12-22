export const bgVar = "--bg";

export const fgVar = "--fg";

export const alphaVar = "--alpha";

export const cssBgVar = `rgb(var(${bgVar}) / var(${alphaVar}, 1))`;

export const cssFgVar = `rgb(var(${fgVar}) / var(${alphaVar}, 1))`;

export const inlineStylesBg = {
  backgroundColor: cssBgVar,
};

export const inlineStylesFg = {
  color: cssFgVar,
};
