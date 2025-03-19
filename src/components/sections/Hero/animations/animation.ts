import { rainbow } from "./colors";

export const swirling = (i: number, delay: number) => ({
  initial: {
    opacity: 0,
    translateY: -100,
    translateX: 10 * i,
  },
  animate: {
    opacity: [0, 1],
    color: rainbow,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 2,
      delay,
      ease: "easeInOut",
    },
  },
});

export const slideFadeIn = {
  initial: {
    opacity: 0,
    translateX: 100,
  },
  animate: {
    opacity: [0, 1],
    translateX: 0,
    transition: {
      delay: 2.2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};
