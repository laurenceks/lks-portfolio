export const remToPx = (rem: number = 0) =>
    rem *
    parseFloat(getComputedStyle(document?.documentElement)?.fontSize || "0");
export default remToPx;
