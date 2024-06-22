export default {
  overlayShow: {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  contentShow: {
    from: {
      opacity: 0,
      transform: "translateY(0px) scale(0.8)",
    },
    to: {
      opacity: 1,
      transform: "translateY(-50%) scale(1)",
    },
  },
};
